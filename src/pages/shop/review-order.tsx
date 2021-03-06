import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/client';
import { useMediaQuery } from 'react-responsive';

import { ShoppingBagItemsDocument } from '../../graphql-operations';
import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';
import BagItem from '../../components/BagItem';
import BagItemMobile from '../../components/BagItemMobile';

import { fetchPostJSON } from '../../utils/api-helpers';
import getStripe from '../../utils/get-stripe';

const ReviewOrderPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [session] = useSession();
  const tabletOrLarger = useMediaQuery({ query: '(min-width: 768px)' });

  const { loading, error, data } = useQuery(ShoppingBagItemsDocument);

  if (error)
    return <ErrorMessage message="Error loading shopping bag items." />;

  if (loading || isLoading) return <Loader />;

  if (!data) return null;

  if (!session) {
    return (
      <div className="flex flex-col w-11/12 max-w-3xl mx-auto my-5">
        <h1>Must be signed in to review order.</h1>
      </div>
    );
  }

  const products = data.shoppingBagItems.dataList;

  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col w-11/12 max-w-3xl mx-auto my-5">
        <h1>Your cart is empty.</h1>
      </div>
    );
  }

  let orderPrice = 0;
  products.forEach((product) => {
    orderPrice += product.totalRetailPrice;
  });

  // base shipping charge is $6 per item (applies only to unmounted paper prints)
  let shippingCharge = 6 * products.length;
  const mattedFramedOrMetalProducts = products.filter(
    (x) => x.mat != null || x.frame != null || x.print.type != 'paper'
  );

  console.log(
    `Found ${mattedFramedOrMetalProducts.length} products that need additional shipping charges`
  );

  shippingCharge += 10 * mattedFramedOrMetalProducts.length;

  const checkout = async () => {
    setIsLoading(true);

    const response = await fetchPostJSON(
      `/api/checkout_sessions/cart`,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      products
    );

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }
    console.log({ response });

    // Redirect to Checkout.
    const stripe = await getStripe();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col w-11/12 max-w-3xl mx-auto my-5 dark:text-white">
      <h1 className="text-3xl xl:text-4xl text-center mb-8 dark:text-white">
        Review Your Order
      </h1>
      {products.map((product) => (
        <div key={product.id} className="w-full pt-4">
          {tabletOrLarger ? (
            <BagItem product={product} />
          ) : (
            <BagItemMobile product={product} />
          )}
        </div>
      ))}
      <div className="flex flex-col w-5/12 ml-auto mr-3">
        <div className="flex flex-row my-1 justify-between">
          <p>Subtotal</p>
          <p>${orderPrice}</p>
        </div>
        <div className="flex flex-row my-1 justify-between">
          <p>Shipping</p>
          <p>${shippingCharge}</p>
        </div>
        <hr className="my-1" />
        <div className="flex flex-row my-1 justify-between">
          <p className="text-xl font-medium text-blue-500">Total</p>
          <p className="text-xl font-medium text-blue-500">
            ${orderPrice + shippingCharge}
          </p>
        </div>
      </div>

      <button
        className="bg-indigo-700 text-white rounded py-2 xl:py-3 px-4 xl:px-6 my-10 ml-auto mr-0 text-xl disabled:opacity-50"
        onClick={checkout}
      >
        Checkout
      </button>
    </div>
  );
};

export default ReviewOrderPage;
