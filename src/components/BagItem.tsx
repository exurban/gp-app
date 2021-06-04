import Image from 'next/image';
import {
  Product,
  DeleteProductDocument,
  ShoppingBagItemsDocument,
} from '../graphql-operations';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

type Props = {
  product: Product;
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
        <div className="col-start-1 col-span-2 overflow-hidden relative">
          <Image
            className="rounded"
            src={image.webpUrl}
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            quality={80}
          />
        </div>
        <div className="col-start-3 col-span-7 flex flex-col justify-between">
          <h5>{photo.title}</h5>
          <p className="mt-2">{photo.description}</p>
          <p className="mt-2 text-sm">
            {print.type === 'paper' ? 'Exhibition Paper' : 'Aluminum'},{' '}
            {displayDimensions}
          </p>
          <p className="mt-2 text-sm">{mat?.description}</p>
          <p className="mt-2 text-sm">{frame?.description}</p>
        </div>
        <div className="col-start-10 text-lg font-bold text-blue-500 pr-3 justify-self-center">
          ${product.totalRetailPrice}
        </div>
        <button
          className="text-blue-500 row-start-2 col-start-3 justify-self-center"
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
