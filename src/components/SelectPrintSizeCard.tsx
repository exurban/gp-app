import { Dispatch, SetStateAction } from 'react';
import { PrintInfoFragment } from '../graphql-operations';

type imagePrice = {
  size: number;
  price: number;
};

type Props = {
  print: PrintInfoFragment;
  size: number;
  imagePrice: imagePrice | undefined;
  isSelected: boolean;
  setSelectedPrint: Dispatch<SetStateAction<PrintInfoFragment | undefined>>;
};

const PrintSizeCard: React.FC<Props> = ({
  print,
  // size,
  imagePrice,
  isSelected,
  setSelectedPrint,
}) => {
  let price = 0;
  if (imagePrice) {
    price = imagePrice.price + print.retailPrice;
  }

  return (
    <div
      className={`my-3 p-4 shadow-sm rounded-md border-2 border-solid dark:hover:border-purple-500 transition-colors ease-in select-none w-64 max-w-xl mx-auto ${
        isSelected
          ? 'border-purple-500 bg-purple-700 text-white'
          : 'border-blueGray-600'
      }`}
      onClick={() => setSelectedPrint(print)}
    >
      <div className="flex flex-row justify-between">
        <p>
          {print.dimension1}" x {print.dimension2}"
        </p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default PrintSizeCard;
