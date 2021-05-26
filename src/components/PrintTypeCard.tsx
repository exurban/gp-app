import { Dispatch, SetStateAction } from 'react';

type Props = {
  type: string;
  displayName: string;
  lowestPrice: number;
  description: string;
  selectedPrintType: string | undefined;
  setSelectedPrintType: Dispatch<SetStateAction<string | undefined>>;
};

const PrintTypeCard: React.FC<Props> = ({
  type,
  displayName,
  lowestPrice,
  description,
  // selectedPrintType,
  setSelectedPrintType,
}) => {
  return (
    <div
      className="m-1 shadow-md rounded-sm border-2 border-solid border-transperent hover:border-indigo-700 transition-colors ease-in select-none"
      onClick={() => setSelectedPrintType(type)}
    >
      <div className="grid-cols-4 gap-x-2">
        <p className="text-lg font-bold self-end col-start-1 col-span-1 row-start-1 row-span-1">
          {displayName}
        </p>
        <p className="text-sm col-start-2 col-span-1 row-start-2 row-span-1 mt-2">
          from ${lowestPrice}
        </p>
        <p className="col-start-2 row-start-1 row-span-2 self-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PrintTypeCard;
