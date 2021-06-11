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
      <div className="container grid grid-cols-4 gap-2 max-w-xl mx-auto">
        <div className="col-span-4 w-64 h-64 justify-self-center overflow-hidden relative">
          <Image
            className="rounded-md"
            src={image.webpUrl}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            quality={80}
          />
        </div>
        <h5 className="row-start-2 col-start-1 col-span-4">
          {photo.title}, {displayDimensions}
        </h5>
        {/* <p className="mt-2">{photo.description}</p> */}
        <p className="col-start-1 row-start-3 mt-2 text-sm opacity-60 text-right">
          Print:
        </p>
        <p className="col-start-2 col-span-2 row-start-3 mt-2 text-sm">
          {print.type === 'paper' ? 'Exhibition Paper' : 'Aluminum'}
        </p>
        <p className="col-start-1 row-start-4 mt-2 text-sm opacity-60 text-right">
          Mat:
        </p>
        <p className="col-start-2 col-span-2 row-start-4 mt-2 text-sm">
          {mat ? mat.color : 'none'}
        </p>
        <p className="col-start-1 row-start-5 mt-2 text-sm opacity-60 text-right">
          Frame:
        </p>
        <p className="col-start-2 col-span-2 row-start-5 mt-2 text-sm">
          {frame ? frame.displayName.toLowerCase() : ' none'}
        </p>

        <div className="col-start-4 row-start-2 text-lg font-bold text-blue-500 pr-3 justify-self-end">
          ${product.totalRetailPrice}
        </div>
        <button
          className="text-blue-500 row-start-6 col-start-4 justify-self-center"
          onClick={() => onDelete()}
        >
          remove
        </button>
      </div>
      <hr className="my-3" />
    </>
  );
};

export default BagItem;
