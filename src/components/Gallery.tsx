// import { useRouter } from "next/router";
import { PhotoInfoFragment } from '../graphql-operations';
import { useMediaQuery } from 'react-responsive';
import Slide from './Slide';

type Props = {
  photos: PhotoInfoFragment[];
};

const Gallery: React.FC<Props> = ({ photos }) => {
  // const router = useRouter();
  const largeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  const isPortrait = (photo: PhotoInfoFragment) => {
    if (!photo || !photo.photoImage) {
      return false;
    } else {
      return photo.photoImage.height > photo.photoImage.width;
    }
  };

  const isPanoramic = (photo: PhotoInfoFragment) => {
    if (!photo || !photo.photoImage) {
      return false;
    } else {
      return (
        largeScreen && photo.photoImage.width / photo.photoImage.height > 1.7
      );
    }
  };

  return (
    <>
      <div className="pt-6 pb-12 ml-6 xl:ml-12 xl:mr-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row-dense gap-x-4 gap-y-12 justify-evenly justify-items-center">
        {photos.map((photo, idx) => (
          // portrait
          <div
            key={photo.sku}
            className={`${isPortrait(photo) ? 'row-span-2' : 'row-span-1'} ${
              isPanoramic(photo) ? 'col-span-2' : 'col-span-1'
            } container`}
          >
            <Slide photo={photo} priority={idx < 12} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
