import { Dispatch, SetStateAction } from 'react';
import { MatInfoFragment } from '../graphql-operations';
import SelectMatCard from './SelectMatCard';

type Props = {
  mats: MatInfoFragment[] | undefined;
  selectedMat: MatInfoFragment | undefined;
  setSelectedMat: Dispatch<SetStateAction<MatInfoFragment | undefined>>;
};

const SelectMat: React.FC<Props> = ({ mats, selectedMat, setSelectedMat }) => {
  if (!mats || mats.length < 1) return null;

  mats.sort((a, b) => (a.displayName > b.displayName ? 1 : -1));

  return (
    <>
      <hr className="my-3" />
      <div>
        <h5 className="my-2">Add a mat.</h5>

        <p className="text-blue-500 font-medium self-center ml-2">
          +${mats[0]?.retailPrice}
        </p>
        <p className="text-gray-500 font-light italic self-center ml-1">
          (optional)
        </p>
      </div>
      <div className="grid-cols-3 gap-x-4 gap-y-8 justify-items-center items-start justify-evenly">
        {mats?.map((mat) => (
          <SelectMatCard
            key={mat.displayName}
            mat={mat}
            selectedMat={selectedMat}
            setSelectedMat={setSelectedMat}
          />
        ))}
      </div>
    </>
  );
};

export default SelectMat;
