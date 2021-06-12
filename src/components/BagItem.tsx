import Image from 'next/image';
import {
  ProductInfoFragment,
  DeleteProductDocument,
  ShoppingBagItemsDocument,
} from '../graphql-operations';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

type Props = {
  product: ProductInfoFragment;
};

const BagItem: React.FC<Props> = ({ product }) => {
  const photo = product.photo;
  const image = photo.photoImage;
  const print = product.print;
  const mat = product.mat;
  const frame = product.frame;
  const displayDimensions = image.isPortrait
    ? `${print.dimension1}"w x ${print.dimension2}"h`
    : `${print.dimension2}"w x ${print.dimension1}"h`;

  const toastSuccess = (msg: string) => {
    toast.success(msg);
  };

  const [deleteProduct] = useMutation(DeleteProductDocument, {
    onCompleted() {
      toastSuccess(`Successfully removed product from your shopping bag.`);
    },
  });

  const onDelete = () => {
    deleteProduct({
      variables: { id: parseInt(product.id) },
      refetchQueries: [
        {
          query: ShoppingBagItemsDocument,
          variables: {},
        },
      ],
    });
  };

  return (
    <>
      <div className="container grid grid-cols-10 gap-2">
        <div className="col-start-1 col-span-3 row-start-1 row-span-6 overflow-hidden relative">
          <Image
            className="rounded"
            src={image.webpUrl}
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            quality={80}
          />
        </div>
        <h5 className="col-start-4 col-span-6 text-2xl font-semibold">
          {photo.title}, {displayDimensions}
        </h5>
        {/* <p className="mt-2">{photo.description}</p> */}
        <p className="col-start-4 row-start-2 mt-2 text-sm lg:text-base 2xl:text-lg opacity-60 text-right">
          Print:
        </p>
        <p className="col-start-5 col-span-5 row-start-2 mt-2 text-sm lg:text-base 2xl:text-lg">
          {print.type === 'paper' ? 'Exhibition Paper' : 'Aluminum'}
        </p>
        <p className="col-start-4 row-start-3 mt-2 text-sm lg:text-base 2xl:text-lg opacity-60 text-right">
          Mat:
        </p>
        <p className="col-start-5 col-span-5 row-start-3 mt-2 text-sm lg:text-base 2xl:text-lg">
          {mat ? mat.color : 'none'}
        </p>
        <p className="col-start-4 row-start-4 mt-2 text-sm lg:text-base 2xl:text-lg opacity-60 text-right">
          Frame:
        </p>
        <p className="col-start-5 col-span-5 row-start-4 mt-2 text-sm lg:text-base 2xl:text-lg">
          {frame ? frame.displayName.toLowerCase() : ' none'}
        </p>

        <div className="col-start-10 text-lg font-bold text-blue-500 pr-3 justify-self-end">
          ${product.totalRetailPrice}
        </div>
        <button
          className="text-blue-500 row-start-5 col-start-10 justify-self-center"
          onClick={() => onDelete()}
        >
          remove
        </button>
      </div>
      <hr className="my-3 border-opacity-60" />
    </>
  );
};

export default BagItem;
