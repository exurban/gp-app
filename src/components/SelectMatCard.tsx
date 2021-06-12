import { Dispatch, SetStateAction } from 'react';
import { MatInfoFragment } from '../graphql-operations';

type Props = {
  mat: MatInfoFragment;
  isSelected: boolean;
  setSelectedMat: Dispatch<SetStateAction<MatInfoFragment | undefined>>;
};

const SelectMatCard: React.FC<Props> = ({
  mat,
  isSelected,
  setSelectedMat,
}) => {
  return (
    <div
      className={`m-3 shadow-sm rounded-md border-2 border-solid dark:hover:border-purple-500 transition-colors ease-in select-none  ${
        isSelected ? 'border-purple-500  text-white' : 'border-blueGray-600'
      }`}
      onClick={() => setSelectedMat(mat)}
    >
      <img
        className="m-3 rounded"
        src={mat.productImage?.imageUrl}
        alt={mat.productImage?.altText}
        width={mat.productImage ? mat.productImage.width / 5 : 0}
        height={mat.productImage ? mat.productImage.height / 5 : 0}
      />
      <div
        className={`py-2 transition-colors ease-in select-none ${
          isSelected
            ? 'border-purple-500 bg-purple-700'
            : 'border-blueGray-700 dark:border-blueGray-500'
        }`}
      >
        <p className="mt-1 text-center text-xs">{mat.displayName}</p>
      </div>
    </div>
  );
};

export default SelectMatCard;
