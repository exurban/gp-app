import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { fetchGetJSON } from '../../utils/api-helpers';
import useSWR from 'swr';

const CheckoutResultPage: NextPage = () => {
  const router = useRouter();

  // fetch Checkout Session from static page via static generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  );

  if (error) return <div>failed to load</div>;

  const name = data?.payment_intent.charges.data[0].billing_details.name;
  const paymentAmount =
    data?.payment_intent.charges.data[0].amount_captured / 100;
  const email = data?.payment_intent.charges.data[0].billing_details.email;

  return (
    <div className="container w-5/6 max-w-3xl mx-auto">
      <h1 className="mt-4 text-xl xl:text-4xl">Thanks for your order!</h1>

      <p className="mt-5">
        {name}, your payment of ${paymentAmount} was processed successfully.
      </p>
      <p className="mt-3"> A receipt has been emailed to you at {email}.</p>
      <p className="mt-3">
        {' '}
        Your photo(s) are being lovingly created just for you, in accordance
        with your order. Please expect your order to arrive within 2-3 weeks. We
        hope you're delighted with your new photo(s) and we look forward to your
        next visit.
      </p>
    </div>
  );
};

export default CheckoutResultPage;