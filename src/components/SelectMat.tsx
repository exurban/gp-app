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
      <hr className="my-5 dark:border-blueGray-600" />
      <div className="flex flex-row mt-3 align-baseline">
        <h5 className="text-2xl text-purple-500">Add a mat.</h5>

        <p className="text-purple-700 font-medium self-center ml-2">
          (+${mats[0]?.retailPrice}, optional)
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 justify-items-center items-center justify-evenly">
        {mats?.map((mat) => (
          <SelectMatCard
            key={mat.displayName}
            mat={mat}
            isSelected={mat === selectedMat}
            setSelectedMat={setSelectedMat}
          />
        ))}
      </div>
    </>
  );
};

export default SelectMat;
