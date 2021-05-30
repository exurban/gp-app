import { Dispatch, SetStateAction } from 'react';
import { PrintInfoFragment } from '../graphql-operations';
import SelectPrintSizeCard from './SelectPrintSizeCard';

type imagePrice = {
  size: number;
  price: number;
};

type Props = {
  prints: PrintInfoFragment[] | undefined;
  imagePrices: imagePrice[] | undefined;
  selectedPrint: PrintInfoFragment | undefined;
  setSelectedPrint: Dispatch<SetStateAction<PrintInfoFragment | undefined>>;
};

const SelectPrintSize: React.FC<Props> = ({
  prints,
  imagePrices,
  selectedPrint,
  setSelectedPrint,
}) => {
  return (
    <>
      <hr className="my-5 dark:border-blueGray-600" />
      <h5 className="mt-3 text-2xl text-purple-500">Choose your size.</h5>
      <div className="flex flex-col w-2/3 mx-auto mt-3 justify-around">
        {prints?.map((print) => (
          <SelectPrintSizeCard
            key={print.dimension1}
            print={print}
            imagePrice={imagePrices?.find((p) => p.size === print.dimension1)}
            size={print.dimension1}
            isSelected={print === selectedPrint}
            setSelectedPrint={setSelectedPrint}
          />
        ))}
      </div>
    </>
  );
};

export default SelectPrintSize;
