import { Dispatch, SetStateAction } from 'react';
import SelectPrintTypeCard from './SelectPrintTypeCard';

type PrintType = {
  type: string;
  displayName: string;
  lowestPrice: number;
  description: string;
};

type Props = {
  printTypes: PrintType[] | undefined;
  selectedPrintType: string | undefined;
  setSelectedPrintType: Dispatch<SetStateAction<string | undefined>>;
};

const SelectPrintType: React.FC<Props> = ({
  printTypes,
  selectedPrintType,
  setSelectedPrintType,
}) => {
  return (
    <>
      <hr className="my-5 dark:border-blueGray-600" />
      <h5 className="mt-3 text-2xl text-purple-500">Choose your finish.</h5>
      <div className="flex flex-col w-full md:w-5/6 xl:2/3 mx-auto mt-3 justify-around">
        {printTypes?.map((printType) => (
          <SelectPrintTypeCard
            key={printType.type}
            type={printType.type}
            displayName={printType.displayName}
            lowestPrice={printType.lowestPrice}
            description={printType.description}
            isSelected={selectedPrintType === printType.type}
            setSelectedPrintType={setSelectedPrintType}
          />
        ))}
      </div>
    </>
  );
};

export default SelectPrintType;
