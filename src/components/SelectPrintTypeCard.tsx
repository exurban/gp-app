import { Dispatch, SetStateAction } from 'react';

type Props = {
  type: string;
  displayName: string;
  lowestPrice: number;
  description: string;
  isSelected: boolean;
  setSelectedPrintType: Dispatch<SetStateAction<string | undefined>>;
};

const SelectPrintTypeCard: React.FC<Props> = ({
  type,
  displayName,
  lowestPrice,
  description,
  isSelected,
  setSelectedPrintType,
}) => {
  const select = (printType: string) => {
    console.log(`setting selected print type ${printType}`);
    setSelectedPrintType(printType);
  };

  return (
    <div
      className={`my-3 p-4 shadow-sm rounded-md border-2 border-solid dark:hover:border-purple-500 transition-colors ease-in select-none  ${
        isSelected
          ? 'border-purple-500 bg-purple-700 text-white'
          : 'border-blueGray-600'
      }`}
      onClick={() => select(type)}
    >
      <div className="grid grid-cols-4">
        <p className="text-lg font-bold col-start-1 col-span-2 row-start-1 row-span-1">
          {displayName}
        </p>
        <p className="col-start-1 lg:col-start-2 col-span-4 lg:col-span-3 row-start-2 lg:row-start-1 row-span-2 self-center mt-3 lg:mt-0">
          {description}
        </p>
        <p className="text-sm col-start-4 lg:col-start-1 col-span-1 row-start-1 lg:row-start-2 row-span-1 mt-1 lg:mt-2 ml-auto lg:ml-0 mr-auto lg:mr-0">
          from ${lowestPrice}
        </p>
      </div>
    </div>
  );
};

export default SelectPrintTypeCard;
