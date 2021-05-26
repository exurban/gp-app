import { Dispatch, SetStateAction } from 'react';
import { MatInfoFragment } from '../graphql-operations';

type Props = {
  mat: MatInfoFragment;
  selectedMat: MatInfoFragment | undefined;
  setSelectedMat: Dispatch<SetStateAction<MatInfoFragment | undefined>>;
};

const SelectMatCard: React.FC<Props> = ({
  mat,
  // selectedMat,
  setSelectedMat,
}) => {
  // const OptionCard = applyTheme(Card, {
  //   styles: {
  //     base: {
  //       boxShadow: "none",
  //       border: "3px solid",
  //       borderColor: selectedMat?.displayName === mat.displayName ? "primary" : "rgba(0, 0, 0, 0)",
  //       transition: "border-color 0.25s ease",
  //       _hover: {
  //         border: "3px solid",
  //         borderColor: "primary"
  //       }
  //     }
  //   }
  // });

  return (
    <div
      className="border-2 rounded border-transparent hover:border-indigo-700 transition-colors select-none"
      onClick={() => setSelectedMat(mat)}
    >
      <img
        src={mat.productImage?.imageUrl}
        alt={mat.productImage?.altText}
        width={mat.productImage ? mat.productImage.width / 5 : 0}
        height={mat.productImage ? mat.productImage.height / 5 : 0}
        style={{ borderRadius: '4px' }}
      />
      <p className="mt-1 text-center text-xs">{mat.displayName}</p>
    </div>
  );
};

export default SelectMatCard;
