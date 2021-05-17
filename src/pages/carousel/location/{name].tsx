import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import {
  AllPhotosAtLocationDocument,
  AllPhotosAtLocationInput,
  PhotoInfoFragment,
} from '../../../graphql-operations';
import Loader from '../../../components/Loader';
import ErrorMessage from '../../../components/ErrorMessage';
import Carousel from '../../../components/Carousel';
import CarouselItem from '../../../components/CarouselItem';
import CarouselMenu from '../../../components/CarouselMenu';

const CollectionCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePhoto, setActivePhoto] = useState<PhotoInfoFragment>();

  useEffect(() => {
    if (sku && typeof sku === 'string') {
      const skuNum = parseInt(sku);
      const index = photos.findIndex((x) => x.sku === skuNum);
      setActiveIndex(index);
    }
  }, []);

  useEffect(() => {
    if (!photos || !activeIndex) {
      return;
    }
    setActivePhoto(photos[activeIndex]);
  }, [activeIndex, setActiveIndex]);

  const router = useRouter();
  const { name, sku } = router.query;

  // * fetch all photos in section
  const input = { name: name } as AllPhotosAtLocationInput;
  const { loading, error, data } = useQuery(AllPhotosAtLocationDocument, {
    variables: { input: input },
  });

  if (error) return <ErrorMessage message="Error loading photos." />;

  if (loading) return <Loader />;

  if (!data) return null;

  const { total, photos } = data.allPhotosAtLocation;

  const items = photos.map((photo, idx) => (
    <CarouselItem photo={photo} idx={idx} />
  ));

  return (
    <div className="relative">
      <div className="absolute top-2 right-4 py-1 px-2 flex items-center z-10">
        {activePhoto && (
          <CarouselMenu
            photo={photos[activeIndex]}
            current={activeIndex + 1}
            total={total}
          />
        )}
      </div>

      <Carousel
        items={items}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};

export default CollectionCarousel;
