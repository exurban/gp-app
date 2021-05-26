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
  selectedPrint: PrintInfoFragment | undefined;
  setSelectedPrint: Dispatch<SetStateAction<PrintInfoFragment | undefined>>;
};

const PrintSizeCard: React.FC<Props> = ({
  print,
  // size,
  imagePrice,
  // selectedPrint,
  setSelectedPrint,
}) => {
  let price = 0;
  if (imagePrice) {
    price = imagePrice.price + print.retailPrice;
  }

  return (
    <div
      className="shadow-md rounded-sm border-2 border-solid border-transperent hover:border-indigo-700 transition-colors ease-in select-none w-2/3 my-1 mx-auto"
      onClick={() => setSelectedPrint(print)}
    >
      <div className="content-between">
        <p>
          {print.dimension1}" x {print.dimension2}"
        </p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default PrintSizeCard;
