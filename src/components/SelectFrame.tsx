import { Dispatch, SetStateAction } from 'react';
import { FrameInfoFragment } from '../graphql-operations';
import SelectFrameCard from './SelectFrameCard';

type Props = {
  frames: FrameInfoFragment[] | undefined;
  selectedFrame: FrameInfoFragment | undefined;
  setSelectedFrame: Dispatch<SetStateAction<FrameInfoFragment | undefined>>;
};

const SelectFrame: React.FC<Props> = ({
  frames,
  selectedFrame,
  setSelectedFrame,
}) => {
  if (!frames) return null;

  frames.sort((a, b) => (a.sortIndex > b.sortIndex ? 1 : -1));

  return (
    <>
      <hr className="my-3" />
      {frames.length < 1 ? (
        <h5 className="my-2">
          No matting or framing options available for prints this size.
        </h5>
      ) : (
        <>
          <div className="flex flex-row">
            <h5 className="my-2">Add a frame.</h5>
            <p className="self-center ml-2 text-blue-500 font-medium">
              +${frames[0]?.retailPrice}
            </p>
            {frames[0].printType === 'paper' ? (
              <p className="self-center ml-1 font-light text-gray-500 italic">
                (optional, price includes acrylic sheet to protect image)
              </p>
            ) : (
              <p className="self-center ml-1 font-light text-gray-500 italic">
                (optional)
              </p>
            )}
          </div>
          <div className="grid-cols-3 gap-y-8 gap-x-4 justify-items-center items-center justify-evenly">
            {frames.map((frame) => (
              <SelectFrameCard
                key={frame.displayName}
                frame={frame}
                selectedFrame={selectedFrame}
                setSelectedFrame={setSelectedFrame}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SelectFrame;
