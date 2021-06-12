import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="text-sm lg:text-base text-coolGray-600 hover:text-indigo-600 dark:text-coolGray-500 dark:hover:text-white focus:outline-none"
        >
          Newsletter
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl bg-gray-800">
                {/* <div className="lg:w-0 lg:flex-1"> */}
                <div>
                  <Dialog.Title
                    as="h2"
                    className="text-4xl font-extrabold tracking-tight text-white"
                  >
                    Signup for Our Newsletter
                  </Dialog.Title>

                  <p className="mt-3 leading-6 text-gray-300">
                    Sometimes we have thoughts. Occasionally we write them down.
                    We seldom share them.
                  </p>
                  <p className="mt-3 leading-6 text-gray-300">
                    If you'd like to receive our highly-curated thoughts
                    directly in your inbox (3-4 times per year?), please sign up
                    here.
                  </p>
                </div>
                {/* <div className="mt-8 xl:mt-0 xl:ml-8"> */}
                <div className="mt-8">
                  <form className="sm:flex">
                    <label htmlFor="emailAddress" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="emailAddress"
                      name="emailAddress"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                      placeholder="Enter your email"
                    />
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                      >
                        Notify me
                      </button>
                    </div>
                  </form>
                  <p className="mt-3 text-sm text-gray-300">
                    We care about the protection of your data. Read our{' '}
                    <a
                      href="/legal/privacy-policy"
                      className="text-white font-medium underline"
                    >
                      Privacy Policy.
                    </a>
                  </p>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NewsletterSignup;

{
  /* <Dialog.Title
  as="h3"
  className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
>
  Signup for Our Newsletter
</Dialog.Title>; */
}

// <p className="mt-2">
//   Sometimes we have thoughts. Occasionally we write them down. We seldom share them.
// </p>

// <p className="mt-2">
//   If you'd like to receive our highly-curated thoughts
//   directly in your inbox (3-4 times per year?), please
//   sign up here.
// </p>
