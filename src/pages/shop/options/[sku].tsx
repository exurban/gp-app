import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useQuery, useMutation } from '@apollo/client';
import { useSession } from 'next-auth/client';
import {
  PhotoAndFinishOptionsForSkuDocument,
  PrintInfoFragment,
  MatInfoFragment,
  FrameInfoFragment,
  CreateProductDocument,
  CreateProductMutationVariables,
  ShoppingBagItemsDocument,
  AddProductToShoppingBagDocument,
} from '../../../graphql-operations';
import Loader from '../../../components/Loader';
import ErrorMessage from '../../../components/ErrorMessage';
import Link from 'next/link';
import SelectPrintType from '../../../components/SelectPrintType';
import SelectPrintSize from '../../../components/SelectPrintSize';
import SelectMat from '../../../components/SelectMat';
import SelectFrame from '../../../components/SelectFrame';

const ConfigureForPurchasePage: React.FC = () => {
  const [session] = useSession();
  const router = useRouter();

  const [selectedPrintType, setSelectedPrintType] =
    useState<string | undefined>(undefined);
  const [selectedPrint, setSelectedPrint] =
    useState<PrintInfoFragment | undefined>(undefined);
  const [matsToDisplay, setMatsToDisplay] =
    useState<MatInfoFragment[] | undefined>(undefined);
  const [selectedMat, setSelectedMat] =
    useState<MatInfoFragment | undefined>(undefined);
  const [framesToDisplay, setFramesToDisplay] =
    useState<FrameInfoFragment[] | undefined>(undefined);
  const [selectedFrame, setSelectedFrame] =
    useState<FrameInfoFragment | undefined>(undefined);

  const [addToShoppingBag] = useMutation(AddProductToShoppingBagDocument, {
    onCompleted() {
      router.push(`/shop/review-order`);
    },
  });

  const [createProduct] = useMutation(CreateProductDocument, {
    refetchQueries: [
      {
        query: ShoppingBagItemsDocument,
      },
    ],
    onCompleted(data) {
      // * if user was signed in, product was added to bag upon creation--push to review-order
      console.log(JSON.stringify(data));

      if (data.createProduct.success) {
        if (session && data.createProduct.newProduct) {
          const pid = data.createProduct.newProduct.id;
          console.log(`adding product with id ${pid} to shopping bag.`);
          addToShoppingBag({
            variables: { productId: parseInt(pid) },
            refetchQueries: [
              {
                query: ShoppingBagItemsDocument,
                variables: {},
              },
            ],
          });
          router.push('/shop/review-order');
        } else {
          if (data.createProduct.newProduct) {
            localStorage.setItem(
              'redirectUrl',
              'https://gibbs-photography.com/shop/review-order'
            );
            localStorage.setItem(
              'bagProduct',
              data.createProduct.newProduct.id
            );
            router.push('/auth/signin');
          }
        }
      } else {
        console.log(`raise toast to failure`);
      }
    },
  });

  // * get location's name from router
  const { sku } = router.query;

  let skuInt = 0;
  if (sku && typeof sku === 'string') {
    skuInt = parseInt(sku);
  }

  useEffect(() => {
    if (selectedPrintType) {
      setSelectedPrint(undefined);
    }
  }, [selectedPrintType, setSelectedPrintType]);

  useEffect(() => {
    if (selectedPrintType && selectedPrint) {
      const matSelections = mats?.filter(
        (mt) =>
          mt.dimension1 === selectedPrint.dimension1 &&
          mt.printType === selectedPrintType
      );
      setMatsToDisplay(matSelections);
      const frameSelections = frames?.filter(
        (fr) =>
          fr.dimension1 === selectedPrint.dimension1 &&
          fr.printType === selectedPrint.type
      );
      setFramesToDisplay(frameSelections);
    }
  }, [selectedPrint, setSelectedPrint]);

  const { loading, error, data } = useQuery(
    PhotoAndFinishOptionsForSkuDocument,
    {
      variables: { sku: skuInt },
    }
  );

  if (error) return <ErrorMessage message="Error loading photo." />;

  if (loading) return <Loader />;

  if (!data) return null;

  const { photo, prints, mats, frames } = data.photoAndFinishOptionsForSku;

  if (!photo) return null;

  const image = photo.photoImage;
  const aspectRatio = image?.aspectRatio;

  if (!photo.photographer) return null;
  if (!photo.location) return null;

  const pgName = photo.photographer.name;
  const locationName = photo.location.name;

  const imagePrices = [
    {
      size: 12,
      price: photo.retailPrice12,
    },
    {
      size: 16,
      price: photo.retailPrice16,
    },
    {
      size: 20,
      price: photo.retailPrice20,
    },
    {
      size: 24,
      price: photo.retailPrice24,
    },
    {
      size: 30,
      price: photo.retailPrice30,
    },
  ];

  if (!prints) return null;

  const paperPrints = prints.filter((p) => p.type === 'paper');
  const paperPrices = imagePrices.map(
    (ip, idx) => ip.price + paperPrints[idx].retailPrice
  );
  const lowestPricePaper = Math.min(...paperPrices);

  const aluPrints = prints.filter((p) => p.type === 'alu');
  const aluPrices = imagePrices.map(
    (ip, idx) => ip.price + aluPrints[idx].retailPrice
  );
  const lowestPriceAlu = Math.min(...aluPrices);

  const printTypes = [
    {
      type: 'paper',
      displayName: 'Exhibition Paper',
      lowestPrice: lowestPricePaper,
      description:
        'The high-resolution image is printed in ink on fine-art quality paper. This paper print may be ordered separately, or finished with your choice of a single mat and wood or metal frame.',
    },
    {
      type: 'alu',
      displayName: 'Aluminum',
      lowestPrice: lowestPriceAlu,
      description:
        'The high-resolution image is rendered by infusing dyes into the surface of a specially-coated aluminum sheet. This aluminum print may be ordered separately, or mounted in your choice of a float frame.',
    },
  ];

  const buildProduct = () => {
    let matId, frameId;
    if (!selectedPrint) return;
    if (selectedMat) {
      matId = parseInt(selectedMat.id);
    }

    if (selectedFrame) {
      frameId = parseInt(selectedFrame.id);
    }

    const input = {
      photoId: parseInt(photo.id),
      printId: parseInt(selectedPrint.id),
      matId: matId,
      frameId: frameId,
    };

    console.log(`create product input: ${JSON.stringify(input, null, 2)}`);

    const createVariables: CreateProductMutationVariables = { input };

    createProduct({
      variables: createVariables,
    });
  };

  return (
    <>
      <div className="container py-4 mx-auto text-coolGray-800 dark:text-white">
        <div className="flex flex-col w-5/6 w-max-w-3xl mx-auto">
          <Image
            className="w-full relative overflow-hidden rounded-md shadow-lg"
            src={image.webpUrl}
            alt={image.altText}
            layout="responsive"
            width={image.width}
            height={image.height}
            sizes="(max-width: 400px) 100vw, 720px"
          />
          <h2 className="subpixel-antialiased text-2xl md:3xl xl:text-4xl md: font-medium xl:font-semibold text-center mt-4 text-coolGray-800 dark:text-white">
            {photo.title}
          </h2>
          <div className="flex flex-row items-baseline leading-8">
            <p className="text-xs md:text-sm lg:text-base xl:text-lg uppercase mr-2 text-coolGray-400">
              Photographer:
            </p>
            {pgName && (
              <Link
                href={`/gallery/photographer/${encodeURIComponent(
                  pgName.toLowerCase()
                )}`}
              >
                <a>
                  <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl mt-3 lg:mt-4 xl:mt-5 hover:text-indigo-700">
                    {pgName}
                  </h3>
                </a>
              </Link>
            )}
          </div>
          <div className="flex flex-row items-baseline leading-8">
            <p className="text-xs md:text-sm lg:text-base xl:text-lg uppercase mr-2 text-coolGray-400">
              Location:
            </p>
            {locationName && (
              <Link
                href={`/gallery/location/${encodeURIComponent(
                  locationName.toLowerCase()
                )}`}
              >
                <a>
                  <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 lg:mt-3 xl:mt-4 text-indigo-700 hover:text-purple-600">
                    {locationName}
                  </h3>
                </a>
              </Link>
            )}
          </div>
          <div className="flex flex-row items-baseline leading-8">
            <p className="text-xs md:text-sm lg:text-base xl:text-lg uppercase mr-2 text-coolGray-400">
              Description:
            </p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 lg:mt-3 xl:mt-4">
              {photo.description}
            </p>
          </div>

          <SelectPrintType
            printTypes={printTypes}
            selectedPrintType={selectedPrintType}
            setSelectedPrintType={setSelectedPrintType}
          />

          {aspectRatio && selectedPrintType && (
            <>
              <SelectPrintSize
                prints={prints.filter((p) => p.type === selectedPrintType)}
                imagePrices={imagePrices}
                selectedPrint={selectedPrint}
                setSelectedPrint={setSelectedPrint}
              />
            </>
          )}
          {selectedPrint && (
            <>
              <SelectMat
                mats={matsToDisplay}
                selectedMat={selectedMat}
                setSelectedMat={setSelectedMat}
              />
              <SelectFrame
                frames={framesToDisplay}
                selectedFrame={selectedFrame}
                setSelectedFrame={setSelectedFrame}
              />
            </>
          )}

          <button
            className="bg-indigo-700 text-white rounded py-2 xl:py-3 px-4 xl:px-6 my-10 ml-auto mr-0 disabled:opacity-50"
            disabled={selectedPrint === undefined}
            onClick={() => buildProduct()}
          >
            Add to Bag
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfigureForPurchasePage;
