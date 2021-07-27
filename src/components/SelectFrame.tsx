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
      <hr className="my-5 dark:border-blueGray-600" />
      {frames.length < 1 ? (
        <h5 className="my-2">
          No matting or framing options available for prints this size.
        </h5>
      ) : (
        <>
          <div className="flex flex-col md:flex-row mt-3 align-baseline">
            <h5 className="text-2xl text-purple-500">Add a frame.</h5>

            {frames[0].printType === 'paper' ? (
              <p className="text-purple-700 font-medium self-start md:self-center ml-0 md:ml-2">
                (+${frames[0]?.retailPrice}, optional, price includes acrylic
                sheet to protect image)
              </p>
            ) : (
              <p className="text-purple-700 font-medium self-center ml-2">
                (optional)
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 justify-items-center items-center justify-evenly mt-4">
            {frames.map((frame) => (
              <SelectFrameCard
                key={frame.displayName}
                frame={frame}
                isSelected={frame === selectedFrame}
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
