import { Dispatch, SetStateAction } from 'react';
import { FrameInfoFragment } from '../graphql-operations';

type Props = {
  frame: FrameInfoFragment;
  selectedFrame: FrameInfoFragment | undefined;
  setSelectedFrame: Dispatch<SetStateAction<FrameInfoFragment | undefined>>;
};

const SelectFrameCard: React.FC<Props> = ({
  frame,
  // selectedFrame,
  setSelectedFrame,
}) => {
  return (
    <div
      className="shadow-md rounded-sm border-2 border-solid border-transperent hover:border-indigo-700 transition-colors ease-in select-none"
      onClick={() => setSelectedFrame(frame)}
    >
      <img
        className="rounded"
        src={frame.productImage?.imageUrl}
        alt={frame.productImage?.altText}
        width="150px"
        height="135px"
      />
      <p className="text-sm text-center mt-1">{frame.displayName}</p>
    </div>
  );
};

export default SelectFrameCard;
