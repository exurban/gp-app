import { useRouter } from 'next/router';
import Image from 'next/image';
import SlideMenu from './SlideMenu';
import { PhotoInfoFragment } from '../graphql-operations';

const Slide: React.FC<{ photo: PhotoInfoFragment; priority: boolean }> = ({
  photo,
  priority,
}) => {
  const router = useRouter();

  if (!photo.photoImage) {
    return null;
  }

  const img = photo.photoImage;
  const showInfo = () => {
    router.push(`/image/${photo.sku}`);
  };

  return (
    <>
      <div
        className="flex flex-row items-start"
        onDoubleClick={() => showInfo()}
      >
        <div className="w-full relative overflow-hidden rounded-md shadow-lg cursor-pointer">
          <Image
            src={img.webpUrl}
            alt={img.altText}
            layout="responsive"
            width={img.width}
            height={img.height}
            priority={priority}
            sizes="(max-width: 400px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 34vw, 25vw"
          />
        </div>
        <SlideMenu photo={photo} />
      </div>
    </>
  );
};

export default Slide;
