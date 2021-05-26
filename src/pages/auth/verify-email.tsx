const VerifyEmailPage: React.FC = () => {
  return (
    <>
      <div className="max-w-screen-sm mx-auto">
        <h1 className="text-center text-coolGray-800 dark:text-white text-2xl lg:text-3xl xl:text-5xl my-6">
          Check your email.
        </h1>
        <p className="text-center text-coolGray-800 dark:text-white text-lg lg:text-xl xl:text-2xl">
          Click the button in the email that was sent to the address you
          provided and you will be signed into this site.
        </p>
      </div>
    </>
  );
};

export default VerifyEmailPage;
