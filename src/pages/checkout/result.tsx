import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

import { fetchGetJSON } from '../../utils/api-helpers';
import useSWR from 'swr';

import { useQuery, useMutation } from '@apollo/client';
import {
  ShoppingBagItemsDocument,
  AddOrderDocument,
  AddOrderMutationVariables,
} from '../../graphql-operations';

const CheckoutResultPage: NextPage = () => {
  const router = useRouter();
  const [session] = useSession();

  const [addOrder] = useMutation(AddOrderDocument, {
    refetchQueries: [
      {
        query: ShoppingBagItemsDocument,
      },
    ],
  });
  const { data: bagData } = useQuery(ShoppingBagItemsDocument);
  const bagItems = bagData?.shoppingBagItems.dataList;

  // fetch Checkout Session from static page via static generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  );

  // ! get user, get bag items for user, compare retail price + shipping to amountPaid, use productIds from bag items in addOrder mutation

  let bagTotalPrice = 0;
  const productIds: number[] = [];

  if (bagItems) {
    bagItems.map((bi) => (bagTotalPrice += bi.totalRetailPrice));
    console.log(`Bag Total Price: ${JSON.stringify(bagTotalPrice, null, 2)}`);
    bagItems.map((item) => {
      productIds.push(parseInt(item.id));
    });
  } else console.log(`Failed to fetch bag items.`);

  // const amountPaid = data?.payment_intent.amount_received;
  if (data && data.shipping_address) {
    console.log(`Shipping address: ${data?.shipping.address}`);
    console.log(`Receipt email: ${data?.receipt_email}`);
    console.log(`Payment status: ${data?.payment_status}`);
  }

  useEffect(() => {
    if (
      data?.payment_status &&
      data?.payment_status === 'paid' &&
      data?.shipping.address
    ) {
      const add = data?.shipping.address;
      console.log(`shipping_address: ${JSON.stringify(add, null, 2)}`);

      const input = {
        line1: add.line1 as string,
        line2: add.line2 as string,
        city: add.city as string,
        state: add.state as string,
        country: add.country as string,
        postalCode: add.postal_code as string,
        productIds: productIds,
      };
      const orderVariables: AddOrderMutationVariables = { input };

      addOrder({ variables: orderVariables });
    }
  }, [data, data?.payment_status, data?.shipping?.address]);

  if (error) return <div>failed to load</div>;

  // * if no session, log error and return null
  if (!session || !data) {
    return <p>Loading...</p>;
  }

  const name = data?.payment_intent.charges.data[0].billing_details.name;
  const paymentAmount =
    data?.payment_intent.charges.data[0].amount_captured / 100;
  const email = data?.payment_intent.charges.data[0].billing_details.email;

  return (
    <div className="container w-5/6 max-w-3xl mx-auto text-blueGray-800 dark:text-white">
      <h1 className="mt-4 text-xl xl:text-4xl">Thanks for your order!</h1>

      <p className="mt-5">
        {name}, your payment of ${paymentAmount} was processed successfully.
      </p>
      <p className="mt-3"> A receipt has been emailed to you at {email}.</p>
      <p className="mt-3">
        {' '}
        Your photo(s) are being lovingly created just for you, in accordance
        with your order. Please expect your order to arrive within 2-3 weeks. We
        hope you'll be delighted with your new photo(s) and we look forward to
        your next visit.
      </p>
    </div>
  );
};

export default CheckoutResultPage;
