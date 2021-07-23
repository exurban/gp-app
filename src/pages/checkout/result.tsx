import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

import { fetchGetJSON } from '../../utils/api-helpers';
import useSWR from 'swr';

import { useMutation } from '@apollo/client';
import {
  AddOrderDocument,
  AddOrderMutationVariables,
} from '../../graphql-operations';

const CheckoutResultPage: NextPage = () => {
  const router = useRouter();
  const [session] = useSession();
  // const [line1, setLine1] = useState<string | undefined>(undefined);
  // const [line2, setLine2] = useState<string | undefined>(undefined);
  // const [city, setCity] = useState<string | undefined>(undefined);
  // const [state, setState] = useState<string | undefined>(undefined);
  // const [country, setCountry] = useState<string | undefined>(undefined);
  // const [postalCode, setPostalCode] = useState<string | undefined>(undefined);

  const [addOrder] = useMutation(AddOrderDocument);

  // const input = {
  //   line1: line1,
  //   line2: line2,
  //   city: city,
  //   state: state,
  //   country: country,
  //   postalCode: postalCode,
  //   productIds: [16, 17],
  // };

  // const orderVariables: AddOrderMutationVariables = { input };

  // fetch Checkout Session from static page via static generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  );

  // const amountPaid = data?.payment_intent.amount_received;
  console.log(`Shipping address: ${data?.shipping.address}`);
  console.log(`Receipt email: ${data?.receipt_email}`);
  console.log(`Payment status: ${data?.payment_status}`);

  useEffect(() => {
    if (
      data.payment_status &&
      data.payment_status === 'paid' &&
      data.shipping.address
    ) {
      const add = data.shipping.address;
      const input = {
        line1: add.line1 as string,
        line2: add.line2 as string,
        city: add.city as string,
        state: add.state as string,
        country: add.country as string,
        postalCode: add.postalCode as string,
        productIds: [16, 17],
      };
      const orderVariables: AddOrderMutationVariables = { input };

      console.log(
        `should send addOrder mutation here with: ${JSON.stringify(
          orderVariables,
          null,
          2
        )}`
      );
      addOrder({ variables: orderVariables });

      // setLine1(add.line1);
      // setLine2(add.line2);
      // setCity(add.city);
      // setCountry(add.country);
      // setPostalCode(add.postalCode);
    }
  }, [data, data.payment_status, data.shipping.address]);

  // * If retailPrice of shoppingBagItems === amountPaid, remove all shopping bag items

  const name = data?.payment_intent.charges.data[0].billing_details.name;
  const paymentAmount =
    data?.payment_intent.charges.data[0].amount_captured / 100;
  const email = data?.payment_intent.charges.data[0].billing_details.email;

  if (error) return <div>failed to load</div>;

  // * if no session, log error and return null
  if (!session || !data) {
    return <p>Loading...</p>;
  }

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
