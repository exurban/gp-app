import { Dispatch, SetStateAction } from 'react';
import { FrameInfoFragment } from '../graphql-operations';

type Props = {
  frame: FrameInfoFragment;
  isSelected: boolean;
  setSelectedFrame: Dispatch<SetStateAction<FrameInfoFragment | undefined>>;
};

const SelectFrameCard: React.FC<Props> = ({
  frame,
  isSelected,
  setSelectedFrame,
}) => {
  return (
    <div
      className={`m-3 shadow-sm rounded-md border-2 border-solid dark:hover:border-purple-500 transition-colors ease-in select-none  ${
        isSelected
          ? 'border-purple-500'
          : 'border-blueGray-700 dark:border-blueGray-500'
      }`}
      onClick={() => setSelectedFrame(frame)}
    >
      <img
        className="m-3 rounded"
        src={frame.productImage?.imageUrl}
        alt={frame.productImage?.altText}
        width="150px"
        height="135px"
      />
      <div
        className={`py-2 transition-colors ease-in select-none ${
          isSelected
            ? 'border-purple-500 dark:bg-purple-800'
            : 'border-blueGray-700 dark:border-blueGray-500'
        }`}
      >
        <p className="mt-1 text-center text-xs">{frame.displayName}</p>
      </div>
    </div>
  );
};

export default SelectFrameCard;
