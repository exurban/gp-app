import { CheckCircleIcon } from '@heroicons/react/solid';
import { ExclamationIcon } from '@heroicons/react/solid';
import { XCircleIcon } from '@heroicons/react/solid';
import { InformationCircleIcon } from '@heroicons/react/solid';

type Props = {
  title: string;
  msg: string;
};

export const SuccessToast: React.FC<Props> = ({ title, msg }) => {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">{title}</h3>
          <div className="mt-2 text-sm text-green-700">
            <p>{msg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WarningToast: React.FC<Props> = ({ title, msg }) => {
  return (
    <div className="rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationIcon
            className="h-5 w-5 text-yellow-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">{title}</h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>{msg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FailureToast: React.FC<Props> = ({ title, msg }) => {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{title}</h3>
          <div className="mt-2 text-sm text-red-700">
            <p>{msg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const InfoToast: React.FC<Props> = ({ title, msg }) => {
  return (
    <div className="rounded-md bg-blue-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <InformationCircleIcon
            className="h-5 w-5 text-blue-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-blue-800">{title}</h3>
          <div className="mt-2 text-sm text-blue-700">
            <p>{msg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
