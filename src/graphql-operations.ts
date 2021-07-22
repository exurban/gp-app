import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

/** Inputs to create a new Collection entity. */
export type AddCollectionInput = {
  id?: Maybe<Scalars['Float']>;
  /** Name of the collection. Used in Photo Info links. */
  name: Scalars['String'];
  /** A vignette used to introduce the collection. */
  description?: Maybe<Scalars['String']>;
};

export type AddCollectionResponse = {
  __typename?: 'AddCollectionResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  newCollection?: Maybe<Collection>;
};

export type AddFrameInput = {
  id?: Maybe<Scalars['Float']>;
  sortIndex: Scalars['Float'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  material: Scalars['String'];
  color: Scalars['String'];
  printType: Scalars['String'];
  productImageId?: Maybe<Scalars['Float']>;
  frameSku: Scalars['String'];
  dimension1: Scalars['Float'];
  dimension2: Scalars['Float'];
  cost: Scalars['Float'];
  basePrice: Scalars['Float'];
  priceModifier: Scalars['Float'];
};

export type AddFrameResponse = {
  __typename?: 'AddFrameResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  newFrame?: Maybe<Frame>;
};

/** Inputs to create a new Location entity. */
export type AddLocationInput = {
  id?: Maybe<Scalars['Float']>;
  sortIndex: Scalars['Float'];
  /** Name of the location. Used in Photo Info links. */
  name: Scalars['String'];
  /** An optional string that can be used to refer to the location. */
  tag?: Maybe<Scalars['String']>;
  /** A vignette used to introduce the location. */
  description?: Maybe<Scalars['String']>;
};

export type AddLocationResponse = {
  __typename?: 'AddLocationResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  newLocation?: Maybe<Location>;
};

export type AddMatInput = {
  id?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  printType: Scalars['String'];
  productImageId?: Maybe<Scalars['Float']>;
  matSku: Scalars['String'];
  dimension1: Scalars['Float'];
  dimension2: Scalars['Float'];
  cost: Scalars['Float'];
  shippingCost: Scalars['Float'];
  basePrice: Scalars['Float'];
  priceModifier: Scalars['Float'];
};

export type AddMatResponse = {
  __typename?: 'AddMatResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  newMat?: Maybe<Mat>;
};

export type AddOrderInput = {
  /** The user who placed the order. */
  userId?: Maybe<Scalars['Int']>;
  /** Current status of the order. */
  orderStatus?: Maybe<OrderStatus>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  /** IDs of products on the order. */
  productIds?: Maybe<Array<Scalars['Int']>>;
};

export type AddOrderResponse = {
  __typename?: 'AddOrderResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  newOrder?: Maybe<Order>;
};

export type AddPhotoImageInput = {
  imageName?: Maybe<Scalars['String']>;
  fileExtension?: Maybe<Scalars['String']>;
  jpegUrl?: Maybe<Scalars['String']>;
  webpUrl?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type AddPhotoImageResponse = {
  __typename?: 'AddPhotoImageResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  newPhotoImage?: Maybe<PhotoImage>;
};

export type AddPhotoInput = {
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  isLimitedEdition?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Int']>;
  basePrice12?: Maybe<Scalars['Float']>;
  priceModifier12?: Maybe<Scalars['Float']>;
  basePrice16?: Maybe<Scalars['Float']>;
  priceModifier16?: Maybe<Scalars['Float']>;
  basePrice20?: Maybe<Scalars['Float']>;
  priceModifier20?: Maybe<Scalars['Float']>;
  basePrice24?: Maybe<Scalars['Float']>;
  priceModifier24?: Maybe<Scalars['Float']>;
  basePrice30?: Maybe<Scalars['Float']>;
  priceModifier30?: Maybe<Scalars['Float']>;
  photographerId?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  subjectIds?: Maybe<Array<Scalars['Int']>>;
  tagIds?: Maybe<Array<Scalars['Int']>>;
  collectionIds?: Maybe<Array<Scalars['Int']>>;
  photoImageId?: Maybe<Scalars['Int']>;
  shareImageId?: Maybe<Scalars['Int']>;
};

export type AddPhotoResponse = {
  __typename?: 'AddPhotoResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  newPhoto?: Maybe<Photo>;
};

export type AddPhotoToFavoritesResponse = {
  __typename?: 'AddPhotoToFavoritesResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  addedPhotoWithId?: Maybe<Scalars['ID']>;
};

/** Inputs to create a new Photographer entity. */
export type AddPhotographerInput = {
  id?: Maybe<Scalars['Float']>;
  /** Photographer's full name. */
  name: Scalars['String'];
  /** Photographer's first name. */
  firstName: Scalars['String'];
  /** Photographer's last name. */
  lastName: Scalars['String'];
  /** Photographer's email address. */
  email: Scalars['String'];
  /** Short biography for Photographer. Displayed at the top of the Photographer's photo gallery. */
  bio: Scalars['String'];
  /** id for cover image. */
  coverImageId?: Maybe<Scalars['Int']>;
};

export type AddPhotographerResponse = {
  __typename?: 'AddPhotographerResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  newPhotographer?: Maybe<Photographer>;
};

export type AddPrintInput = {
  id?: Maybe<Scalars['Float']>;
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  printSku: Scalars['String'];
  dimension1: Scalars['Float'];
  dimension2: Scalars['Float'];
  cost: Scalars['Float'];
  shippingCost: Scalars['Float'];
  basePrice: Scalars['Float'];
  priceModifier: Scalars['Float'];
};

export type AddPrintResponse = {
  __typename?: 'AddPrintResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  newPrint?: Maybe<Print>;
};

export type AddProductImageInput = {
  imageName?: Maybe<Scalars['String']>;
  fileExtension?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type AddProductImageResponse = {
  __typename?: 'AddProductImageResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  newProductImage?: Maybe<ProductImage>;
};

export type AddProductToShoppingBagResponse = {
  __typename?: 'AddProductToShoppingBagResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  addedProduct?: Maybe<Product>;
};

export type AddShareImageInput = {
  id?: Maybe<Scalars['Float']>;
  imageName?: Maybe<Scalars['String']>;
  fileExtension?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type AddShareImageResponse = {
  __typename?: 'AddShareImageResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  newShareImage?: Maybe<ShareImage>;
};

/** Inputs to create a new Subject entity. */
export type AddSubjectInput = {
  id?: Maybe<Scalars['Float']>;
  /** Name of the subject. Used in Photo Info links. */
  name: Scalars['String'];
  /** A vignette used to introduce the subject. */
  description?: Maybe<Scalars['String']>;
  /** A cover image to be displayed next to the opening vignette. */
  coverImageId?: Maybe<Scalars['Int']>;
};

export type AddSubjectResponse = {
  __typename?: 'AddSubjectResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  newSubject?: Maybe<Subject>;
};

/** Inputs to create a new Tag entity. */
export type AddTagInput = {
  id?: Maybe<Scalars['Float']>;
  /** Name of the tag. Used in Photo Info links. */
  name: Scalars['String'];
  /** A vignette used to introduce the tag. */
  description?: Maybe<Scalars['String']>;
};

export type AddTagResponse = {
  __typename?: 'AddTagResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  newTag?: Maybe<Tag>;
};

export type Address = {
  __typename?: 'Address';
  id: Scalars['ID'];
  line1: Scalars['String'];
  line2: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  country: Scalars['String'];
  postalCode: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type AllFeaturedPhotosResponse = {
  __typename?: 'AllFeaturedPhotosResponse';
  total: Scalars['Int'];
  photos: Array<Photo>;
};

export type AllPhotosAtLocationInput = {
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
};

export type AllPhotosAtLocationResponse = {
  __typename?: 'AllPhotosAtLocationResponse';
  locationInfo: Location;
  total: Scalars['Int'];
  photos: Array<Photo>;
};

export type AllPhotosByPhotographerInput = {
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type AllPhotosByPhotographerResponse = {
  __typename?: 'AllPhotosByPhotographerResponse';
  photographerInfo: Photographer;
  total: Scalars['Int'];
  photos: Array<Photo>;
};

export type AllPhotosInCollectionInput = {
  name: Scalars['String'];
};

export type AllPhotosInCollectionResponse = {
  __typename?: 'AllPhotosInCollectionResponse';
  collectionInfo: Collection;
  total: Scalars['Int'];
  photos: Array<Photo>;
};

export type AllPhotosOfSubjectInput = {
  name: Scalars['String'];
};

export type AllPhotosOfSubjectResponse = {
  __typename?: 'AllPhotosOfSubjectResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  subjectInfo?: Maybe<Subject>;
  total: Scalars['Int'];
  photos: Array<Photo>;
};

export type AllPhotosWithTagInput = {
  name: Scalars['String'];
};

export type AllPhotosWithTagResponse = {
  __typename?: 'AllPhotosWithTagResponse';
  tagInfo: Tag;
  total: Scalars['Int'];
  photos: Array<Photo>;
};

export type Collection = {
  __typename?: 'Collection';
  id: Scalars['ID'];
  name: Scalars['String'];
  tag: Scalars['String'];
  description: Scalars['String'];
  photosInCollection?: Maybe<Array<PhotoCollection>>;
  /** Count of photos in the collection. */
  countOfPhotos: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type CollectionSearchSortInput = {
  filter?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  direction?: Maybe<SortDirection>;
};

export type CollectionSelectionOption = {
  __typename?: 'CollectionSelectionOption';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type CollectionsResponse = {
  __typename?: 'CollectionsResponse';
  collections: Array<Collection>;
};

export type CreateProductInput = {
  photoId: Scalars['Int'];
  printId: Scalars['Int'];
  matId?: Maybe<Scalars['Int']>;
  frameId?: Maybe<Scalars['Int']>;
};

export type CreateProductResponse = {
  __typename?: 'CreateProductResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  newProduct?: Maybe<Product>;
};

export type FavoritesResponse = {
  __typename?: 'FavoritesResponse';
  /** Returns list of Photo objects in user's favorites. */
  photoList?: Maybe<Array<Photo>>;
};

export type FinishOptions = {
  __typename?: 'FinishOptions';
  prints: Array<Print>;
  mats: Array<Mat>;
  frames: Array<Frame>;
};

export type Frame = {
  __typename?: 'Frame';
  id: Scalars['ID'];
  sortIndex: Scalars['Float'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  material: Scalars['String'];
  color: Scalars['String'];
  printType: Scalars['String'];
  frameSku: Scalars['String'];
  aspectRatio: Scalars['String'];
  dimension1: Scalars['Float'];
  dimension2: Scalars['Float'];
  cost: Scalars['Float'];
  basePrice: Scalars['Float'];
  priceModifier: Scalars['Float'];
  retailPrice: Scalars['Float'];
  /** Optional. An image of the frame. */
  productImage?: Maybe<ProductImage>;
  products?: Maybe<Array<Product>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type GetApiTokenInput = {
  userId: Scalars['Float'];
  email: Scalars['String'];
};

export type Location = {
  __typename?: 'Location';
  /** The ID of the location. It is unique, numeric and automatically-generated. */
  id: Scalars['ID'];
  /** The name of the Location. It is required and must be unique. */
  name: Scalars['String'];
  /** A tag for the Location. It is required and must be unique. */
  tag: Scalars['String'];
  /** A description of the location, used as a vignette at the top of the Location's photos page. */
  description: Scalars['String'];
  /** Nullable. An array of photos taken at the Location. */
  photos?: Maybe<Array<Photo>>;
  /** Count of photos taken at the location on the site. */
  countOfPhotos: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type LocationSearchSortInput = {
  filter?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  direction?: Maybe<SortDirection>;
};

export type LocationSelectionOption = {
  __typename?: 'LocationSelectionOption';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type LocationsResponse = {
  __typename?: 'LocationsResponse';
  locations: Array<Location>;
};

export type Mat = {
  __typename?: 'Mat';
  id: Scalars['ID'];
  sortIndex: Scalars['Int'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  printType: Scalars['String'];
  matSku: Scalars['String'];
  aspectRatio: Scalars['String'];
  dimension1: Scalars['Float'];
  dimension2: Scalars['Float'];
  cost: Scalars['Float'];
  basePrice: Scalars['Float'];
  priceModifier: Scalars['Float'];
  retailPrice: Scalars['Float'];
  productImage?: Maybe<ProductImage>;
  products?: Maybe<Array<Product>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type MatsInput = {
  printType: Scalars['String'];
  dimension1: Scalars['String'];
  dimension2: Scalars['String'];
};

export type MatsResponse = {
  __typename?: 'MatsResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  mats?: Maybe<Array<Mat>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateCollectionsFromCsv: UpdateCollectionsFromCsvResponse;
  addCollection: AddCollectionResponse;
  updateCollection: UpdateCollectionResponse;
  deleteCollection: Scalars['Boolean'];
  updateFramesFromCsv: UpdateFramesFromCsvResponse;
  addFrame: AddFrameResponse;
  updateFrame: UpdateFrameResponse;
  deleteFrame: Scalars['Boolean'];
  updateLocationsFromCsv: UpdateLocationsFromCsvResponse;
  addLocation: AddLocationResponse;
  updateLocation: UpdateLocationResponse;
  deleteLocation: Scalars['Boolean'];
  updateMatsFromCsv: UpdateMatsFromCsvResponse;
  addMat: AddMatResponse;
  updateMat: UpdateMatResponse;
  deleteMat: Scalars['Boolean'];
  addOrder: AddOrderResponse;
  updateOrder: UpdateOrderResponse;
  updatePhotoImagesFromCsv: UpdatePhotoImagesFromCsvResponse;
  addPhotoImage: AddShareImageResponse;
  updatePhotoImage: UpdatePhotoImageResponse;
  deletePhotoImage: Scalars['Boolean'];
  updatePhotographersFromCsv: UpdatePhotographersFromCsvResponse;
  addPhotographer: AddPhotographerResponse;
  updatePhotographer: UpdatePhotographerResponse;
  deletePhotographer: Scalars['Boolean'];
  updatePhotosFromCsv: UpdatePhotosFromCsvResponse;
  addPhoto: AddPhotoResponse;
  updatePhoto: UpdatePhotoResponse;
  deletePhoto: Scalars['Boolean'];
  updatePrintsFromCsv: UpdatePrintsFromCsvResponse;
  addPrint: AddPrintResponse;
  updatePrint: UpdatePrintResponse;
  deletePrint: Scalars['Boolean'];
  updateProductImagesFromCsv: UpdateProductImagesFromCsvResponse;
  addImage: AddProductImageResponse;
  updateProductImage: UpdateProductImageResponse;
  deleteProductImage: Scalars['Boolean'];
  addProductImageToMat: AddProductImageToMatResponse;
  addProductImageToFrame: AddProductImageToFrameResponse;
  createProduct: CreateProductResponse;
  updateProduct: UpdateProductResponse;
  deleteProduct: SuccessMessageResponse;
  updateShareImagesFromCsv: UpdateShareImagesFromCsvResponse;
  updateShareImage: UpdateShareImageResponse;
  deleteShareImage: Scalars['Boolean'];
  updateSubjectsFromCsv: UpdateSubjectsFromCsvResponse;
  addSubject: AddSubjectResponse;
  updateSubject: UpdateSubjectResponse;
  deleteSubject: Scalars['Boolean'];
  updateTagsFromCsv: UpdateTagsFromCsvResponse;
  addTag: AddTagResponse;
  updateTag: UpdateTagResponse;
  deleteTag: Scalars['Boolean'];
  getApiToken: Scalars['String'];
  addPhotoToFavorites: AddPhotoToFavoritesResponse;
  removePhotoFromFavorites: RemovePhotoFromFavoritesResponse;
  addProductToShoppingBag: AddProductToShoppingBagResponse;
  removeProductFromShoppingBag: SuccessMessageResponse;
};

export type MutationAddCollectionArgs = {
  input: AddCollectionInput;
};

export type MutationUpdateCollectionArgs = {
  input: UpdateCollectionInput;
  id: Scalars['Int'];
};

export type MutationDeleteCollectionArgs = {
  id: Scalars['Int'];
};

export type MutationAddFrameArgs = {
  input: AddFrameInput;
};

export type MutationUpdateFrameArgs = {
  input: UpdateFrameInput;
  id: Scalars['Int'];
};

export type MutationDeleteFrameArgs = {
  id: Scalars['Int'];
};

export type MutationAddLocationArgs = {
  input: AddLocationInput;
};

export type MutationUpdateLocationArgs = {
  input: UpdateLocationInput;
  id: Scalars['Int'];
};

export type MutationDeleteLocationArgs = {
  id: Scalars['Int'];
};

export type MutationAddMatArgs = {
  input: AddMatInput;
};

export type MutationUpdateMatArgs = {
  input: UpdateMatInput;
  id: Scalars['Int'];
};

export type MutationDeleteMatArgs = {
  id: Scalars['Int'];
};

export type MutationAddOrderArgs = {
  input: AddOrderInput;
};

export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput;
  id: Scalars['Int'];
};

export type MutationAddPhotoImageArgs = {
  input: AddShareImageInput;
};

export type MutationUpdatePhotoImageArgs = {
  input: UpdatePhotoImageInput;
  id: Scalars['Int'];
};

export type MutationDeletePhotoImageArgs = {
  id: Scalars['Int'];
};

export type MutationAddPhotographerArgs = {
  input: AddPhotographerInput;
};

export type MutationUpdatePhotographerArgs = {
  input: UpdatePhotographerInput;
  id: Scalars['Int'];
};

export type MutationDeletePhotographerArgs = {
  id: Scalars['Int'];
};

export type MutationAddPhotoArgs = {
  input: AddPhotoInput;
};

export type MutationUpdatePhotoArgs = {
  input: UpdatePhotoInput;
  id: Scalars['Int'];
};

export type MutationDeletePhotoArgs = {
  id: Scalars['Int'];
};

export type MutationAddPrintArgs = {
  input: AddPrintInput;
};

export type MutationUpdatePrintArgs = {
  input: UpdatePrintInput;
  id: Scalars['Int'];
};

export type MutationDeletePrintArgs = {
  id: Scalars['Int'];
};

export type MutationAddImageArgs = {
  input: AddProductImageInput;
};

export type MutationUpdateProductImageArgs = {
  input: UpdateProductImageInput;
  id: Scalars['Int'];
};

export type MutationDeleteProductImageArgs = {
  id: Scalars['Int'];
};

export type MutationAddProductImageToMatArgs = {
  productImageId: Scalars['Int'];
  matId: Scalars['Int'];
};

export type MutationAddProductImageToFrameArgs = {
  productImageId: Scalars['Int'];
  frameId: Scalars['Int'];
};

export type MutationCreateProductArgs = {
  input: CreateProductInput;
};

export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
  id: Scalars['Int'];
};

export type MutationDeleteProductArgs = {
  id: Scalars['Int'];
};

export type MutationUpdateShareImageArgs = {
  input: UpdateShareImageInput;
  id: Scalars['Int'];
};

export type MutationDeleteShareImageArgs = {
  id: Scalars['Int'];
};

export type MutationAddSubjectArgs = {
  input: AddSubjectInput;
};

export type MutationUpdateSubjectArgs = {
  input: UpdateSubjectInput;
  id: Scalars['Int'];
};

export type MutationDeleteSubjectArgs = {
  id: Scalars['Int'];
};

export type MutationAddTagArgs = {
  input: AddTagInput;
};

export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
  id: Scalars['Int'];
};

export type MutationDeleteTagArgs = {
  id: Scalars['Int'];
};

export type MutationGetApiTokenArgs = {
  input: GetApiTokenInput;
};

export type MutationAddPhotoToFavoritesArgs = {
  photoId: Scalars['Float'];
};

export type MutationRemovePhotoFromFavoritesArgs = {
  photoId: Scalars['Float'];
};

export type MutationAddProductToShoppingBagArgs = {
  productId: Scalars['Float'];
};

export type MutationRemoveProductFromShoppingBagArgs = {
  productId: Scalars['Float'];
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  user?: Maybe<User>;
  orderStatus: OrderStatus;
  products?: Maybe<Array<Product>>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

/** Order status */
export enum OrderStatus {
  /** order freshly created. */
  Created = 'CREATED',
  /** payment received from customer */
  Paid = 'PAID',
  /** order placed with lab */
  Placed = 'PLACED',
  /** lab shipped order */
  Shipped = 'SHIPPED',
  /** order complete */
  Fulfilled = 'FULFILLED',
  /** problem with order, see notes */
  Problem = 'PROBLEM',
}

export type Photo = {
  __typename?: 'Photo';
  id: Scalars['ID'];
  sku: Scalars['Int'];
  sortIndex: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['String'];
  isFeatured: Scalars['Boolean'];
  isLimitedEdition: Scalars['Boolean'];
  isHidden: Scalars['Boolean'];
  rating: Scalars['Int'];
  printTypes: Array<Scalars['String']>;
  basePrice12: Scalars['Float'];
  priceModifier12: Scalars['Float'];
  retailPrice12: Scalars['Float'];
  basePrice16: Scalars['Float'];
  priceModifier16: Scalars['Float'];
  retailPrice16: Scalars['Float'];
  basePrice20: Scalars['Float'];
  priceModifier20: Scalars['Float'];
  retailPrice20: Scalars['Float'];
  basePrice24: Scalars['Float'];
  priceModifier24: Scalars['Float'];
  retailPrice24: Scalars['Float'];
  basePrice30: Scalars['Float'];
  priceModifier30: Scalars['Float'];
  retailPrice30: Scalars['Float'];
  photographer?: Maybe<Photographer>;
  location?: Maybe<Location>;
  /** Primary image for the photo with a maximum dimension of 1,400px, saved to .webp format and converted to .jpeg for email sharing. */
  photoImage: PhotoImage;
  /** A 1,200px x 630px image for sharing. */
  shareImage?: Maybe<ShareImage>;
  subjectsInPhoto?: Maybe<Array<PhotoSubject>>;
  tagsForPhoto?: Maybe<Array<PhotoTag>>;
  collectionsForPhoto?: Maybe<Array<PhotoCollection>>;
  favoritedByUsers?: Maybe<Array<UserFavorite>>;
  products?: Maybe<Array<Product>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type PhotoCollection = {
  __typename?: 'PhotoCollection';
  collectionId: Collection;
  collection: Collection;
  photoId: Photo;
  photo: Photo;
};

export type PhotoEditSelectionOptions = {
  __typename?: 'PhotoEditSelectionOptions';
  photographers: Array<PhotographerSelectionOption>;
  locations: Array<LocationSelectionOption>;
  subjects: Array<SubjectSelectionOption>;
  tags: Array<TagSelectionOption>;
  collections: Array<CollectionSelectionOption>;
};

export type PhotoImage = {
  __typename?: 'PhotoImage';
  id: Scalars['ID'];
  imageName: Scalars['String'];
  jpegUrl: Scalars['String'];
  webpUrl: Scalars['String'];
  altText: Scalars['String'];
  aspectRatio?: Maybe<Scalars['String']>;
  size: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
  isPortrait: Scalars['Boolean'];
  isPanoramic: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type PhotoSubject = {
  __typename?: 'PhotoSubject';
  subjectId: Subject;
  subject: Subject;
  photoId: Photo;
  photo: Photo;
};

export type PhotoTag = {
  __typename?: 'PhotoTag';
  tagId: Tag;
  tag: Tag;
  photoId: Photo;
  photo: Photo;
};

export type PhotoWithFinishOptionsResponse = {
  __typename?: 'PhotoWithFinishOptionsResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  photo?: Maybe<Photo>;
  prints?: Maybe<Array<Print>>;
  mats?: Maybe<Array<Mat>>;
  frames?: Maybe<Array<Frame>>;
};

export type Photographer = {
  __typename?: 'Photographer';
  id: Scalars['ID'];
  /** The artist's full name */
  name: Scalars['String'];
  /** The artist's first name. */
  firstName: Scalars['String'];
  /** The artist's last name. */
  lastName: Scalars['String'];
  /** The artist's email address. */
  email: Scalars['String'];
  /** The Image for the artist's portrait. */
  coverImage?: Maybe<ProductImage>;
  /** The artist's biography. */
  bio: Scalars['String'];
  /** Photos attributed to the artist. */
  photos?: Maybe<Array<Photo>>;
  /** Count of photos attributed to the photographer on the site. */
  countOfPhotos: Scalars['Int'];
  /** Date record was created. */
  createdAt: Scalars['DateTime'];
  /** Date record was most recently updated. */
  updatedAt: Scalars['DateTime'];
};

export type PhotographerSelectionOption = {
  __typename?: 'PhotographerSelectionOption';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type PhotographersResponse = {
  __typename?: 'PhotographersResponse';
  photographers: Array<Photographer>;
};

export type Print = {
  __typename?: 'Print';
  id: Scalars['ID'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  printSku: Scalars['String'];
  aspectRatio: Scalars['String'];
  dimension1: Scalars['Float'];
  dimension2: Scalars['Float'];
  cost: Scalars['Float'];
  shippingCost: Scalars['Float'];
  basePrice: Scalars['Float'];
  priceModifier: Scalars['Float'];
  retailPrice: Scalars['Float'];
  products?: Maybe<Array<Product>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type PrintsInput = {
  type: Scalars['String'];
  aspectRatio: Scalars['String'];
};

export type PrintsResponse = {
  __typename?: 'PrintsResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  prints?: Maybe<Array<Print>>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  photo: Photo;
  print: Print;
  mat?: Maybe<Mat>;
  frame?: Maybe<Frame>;
  shoppingBag?: Maybe<User>;
  order: Order;
  totalRetailPrice: Scalars['Float'];
  removedAt?: Maybe<Scalars['DateTime']>;
  removedBy?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  productSummary: Scalars['String'];
};

export type ProductImage = {
  __typename?: 'ProductImage';
  id: Scalars['ID'];
  imageName: Scalars['String'];
  fileExtension: Scalars['String'];
  imageUrl: Scalars['String'];
  altText: Scalars['String'];
  aspectRatio?: Maybe<Scalars['String']>;
  size: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
  /** Optional. Product image for mats. */
  mats?: Maybe<Array<Mat>>;
  /** Optional. Product image for frames. */
  frames?: Maybe<Array<Frame>>;
  /** Optional. Biographical image for photographer. */
  photographers?: Maybe<Array<Photographer>>;
  isPortrait: Scalars['Boolean'];
  isPanoramic: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  /** Returns all Collections. Sortable and filterable. */
  collections: CollectionsResponse;
  /** Search collections */
  searchCollections: SearchCollectionsResponse;
  collection?: Maybe<Collection>;
  collectionWithName?: Maybe<Collection>;
  allPhotosInCollection: AllPhotosInCollectionResponse;
  /** Search Frames. Returns Frame + product Image. */
  searchFrames: SearchFramesResponse;
  framesWithAspectRatio: Array<Frame>;
  frame: Frame;
  /** Returns all Locations. Sortable and filterable. */
  locations: LocationsResponse;
  /** Search locations */
  searchLocations: SearchLocationsResponse;
  location?: Maybe<Location>;
  locationWithName?: Maybe<Location>;
  allPhotosAtLocation: AllPhotosAtLocationResponse;
  /** Search Mats. Returns Mat + Product Image. */
  searchMats: SearchMatsResponse;
  matsWithAspectRatio: Array<Mat>;
  matsWithAspectRatioAndSize: Array<Mat>;
  mat: Mat;
  allOrders: Array<Order>;
  photoImages: Array<PhotoImage>;
  photoImage: PhotoImage;
  searchPhotoImages: SearchShareImagesResponse;
  printsOfTypeAndAspectRatio: PrintsResponse;
  matsOfTypeAndSize: MatsResponse;
  finishOptions: FinishOptions;
  photoAndFinishOptionsForSku: PhotoWithFinishOptionsResponse;
  /** Returns all Photographers + portraits, only. Meant to be used on the backend. */
  searchPhotographers: SearchPhotographersResponse;
  /** Returns all Photographers + portraits, only. Meant to be used on the backend. */
  sortedPhotographers: PhotographersResponse;
  /** Returns one Photographer + portrait, only or null, if no matching id is found. Meant to be used on the backend. */
  photographer?: Maybe<Photographer>;
  /** Returns one Photographer + portrait AND Photographer's Photos and related data. Meant to be used on the frontend. Used for the Photographer's Gallery. */
  photographerWithName?: Maybe<Photographer>;
  allPhotosByPhotographer: AllPhotosByPhotographerResponse;
  photoEditOptions: PhotoEditSelectionOptions;
  allFeaturedPhotos: AllFeaturedPhotosResponse;
  /** Returns all Photos + all relations. Searchable. */
  searchPhotos: SearchPhotosResponse;
  photo?: Maybe<Photo>;
  photoWithSku: Photo;
  /** Search Prints. Returns Print + Cover Image. */
  searchPrints: SearchPrintsResponse;
  print: Print;
  productImages: Array<ProductImage>;
  productImage: ProductImage;
  searchImages: SearchProductImagesResponse;
  product?: Maybe<Product>;
  shareImages: Array<ShareImage>;
  shareImage: ShareImage;
  /** Returns all Subjects. Sortable and filterable. */
  subjects: SubjectsResponse;
  /** Search subjects. */
  searchSubjects: SearchSubjectsResponse;
  subject?: Maybe<Subject>;
  subjectWithName?: Maybe<Subject>;
  allPhotosOfSubject: AllPhotosOfSubjectResponse;
  /** Returns all Tags. Sortable and filterable. */
  tags: TagsResponse;
  /** Search tags */
  searchTags: SearchTagsResponse;
  tag?: Maybe<Tag>;
  tagWithName?: Maybe<Tag>;
  allPhotosWithTag: AllPhotosWithTagResponse;
  /** Returns all Photos favorited by the signed in User. */
  favorites: FavoritesResponse;
  shoppingBagItems: ShoppingBagItemsResponse;
  userSummaries: Array<User>;
  newsletterSubscribers: Array<User>;
  getUserPreferences: UserPreferencesResponse;
  users: Array<User>;
  user: User;
  me: Scalars['Int'];
};

export type QueryCollectionsArgs = {
  input: CollectionSearchSortInput;
};

export type QuerySearchCollectionsArgs = {
  input: SearchCollectionsInput;
};

export type QueryCollectionArgs = {
  id: Scalars['Int'];
};

export type QueryCollectionWithNameArgs = {
  name: Scalars['String'];
};

export type QueryAllPhotosInCollectionArgs = {
  input: AllPhotosInCollectionInput;
};

export type QuerySearchFramesArgs = {
  input: SearchFramesInput;
};

export type QueryFramesWithAspectRatioArgs = {
  aspectRatio: Scalars['String'];
};

export type QueryFrameArgs = {
  id: Scalars['Int'];
};

export type QueryLocationsArgs = {
  input: LocationSearchSortInput;
};

export type QuerySearchLocationsArgs = {
  input: SearchLocationsInput;
};

export type QueryLocationArgs = {
  id: Scalars['Int'];
};

export type QueryLocationWithNameArgs = {
  name: Scalars['String'];
};

export type QueryAllPhotosAtLocationArgs = {
  input: AllPhotosAtLocationInput;
};

export type QuerySearchMatsArgs = {
  input: SearchMatsInput;
};

export type QueryMatsWithAspectRatioArgs = {
  aspectRatio: Scalars['String'];
};

export type QueryMatsWithAspectRatioAndSizeArgs = {
  size: Scalars['Int'];
  aspectRatio: Scalars['String'];
};

export type QueryMatArgs = {
  id: Scalars['Int'];
};

export type QueryPhotoImageArgs = {
  id: Scalars['Int'];
};

export type QuerySearchPhotoImagesArgs = {
  input: SearchShareImagesInput;
};

export type QueryPrintsOfTypeAndAspectRatioArgs = {
  input: PrintsInput;
};

export type QueryMatsOfTypeAndSizeArgs = {
  input: MatsInput;
};

export type QueryFinishOptionsArgs = {
  aspectRatio: Scalars['String'];
};

export type QueryPhotoAndFinishOptionsForSkuArgs = {
  sku: Scalars['Int'];
};

export type QuerySearchPhotographersArgs = {
  input: SearchPhotographersInput;
};

export type QuerySortedPhotographersArgs = {
  asc: Scalars['Boolean'];
  orderBy: Scalars['String'];
  filter: Scalars['String'];
};

export type QueryPhotographerArgs = {
  id: Scalars['Int'];
};

export type QueryPhotographerWithNameArgs = {
  name: Scalars['String'];
};

export type QueryAllPhotosByPhotographerArgs = {
  input: AllPhotosByPhotographerInput;
};

export type QuerySearchPhotosArgs = {
  input: SearchPhotosInput;
};

export type QueryPhotoArgs = {
  id: Scalars['Int'];
};

export type QueryPhotoWithSkuArgs = {
  sku: Scalars['Int'];
};

export type QuerySearchPrintsArgs = {
  input: SearchPrintsInput;
};

export type QueryPrintArgs = {
  id: Scalars['Int'];
};

export type QueryProductImageArgs = {
  id: Scalars['Int'];
};

export type QuerySearchImagesArgs = {
  input: SearchProductImagesInput;
};

export type QueryProductArgs = {
  id: Scalars['Int'];
};

export type QueryShareImageArgs = {
  id: Scalars['Int'];
};

export type QuerySubjectsArgs = {
  input: SubjectSearchSortInput;
};

export type QuerySearchSubjectsArgs = {
  input: SearchSubjectsInput;
};

export type QuerySubjectArgs = {
  id: Scalars['Int'];
};

export type QuerySubjectWithNameArgs = {
  name: Scalars['String'];
};

export type QueryAllPhotosOfSubjectArgs = {
  input: AllPhotosOfSubjectInput;
};

export type QueryTagsArgs = {
  input: TagSearchSortInput;
};

export type QuerySearchTagsArgs = {
  input: SearchTagsInput;
};

export type QueryTagArgs = {
  id: Scalars['Int'];
};

export type QueryTagWithNameArgs = {
  name: Scalars['String'];
};

export type QueryAllPhotosWithTagArgs = {
  input: AllPhotosWithTagInput;
};

export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type RemovePhotoFromFavoritesResponse = {
  __typename?: 'RemovePhotoFromFavoritesResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  removedPhotoWithId?: Maybe<Scalars['ID']>;
};

export type SearchCollectionsInput = {
  searchString: Scalars['String'];
};

export type SearchCollectionsResponse = {
  __typename?: 'SearchCollectionsResponse';
  datalist: Array<Collection>;
};

export type SearchFramesInput = {
  searchString: Scalars['String'];
};

export type SearchFramesResponse = {
  __typename?: 'SearchFramesResponse';
  datalist: Array<Frame>;
};

export type SearchLocationsInput = {
  searchString: Scalars['String'];
};

export type SearchLocationsResponse = {
  __typename?: 'SearchLocationsResponse';
  datalist: Array<Location>;
};

export type SearchMatsInput = {
  searchString: Scalars['String'];
};

export type SearchMatsResponse = {
  __typename?: 'SearchMatsResponse';
  datalist: Array<Mat>;
};

export type SearchPhotoImagesInput = {
  searchString: Scalars['String'];
};

export type SearchPhotoImagesResponse = {
  __typename?: 'SearchPhotoImagesResponse';
  datalist: Array<PhotoImage>;
};

export type SearchPhotographersInput = {
  searchString: Scalars['String'];
};

export type SearchPhotographersResponse = {
  __typename?: 'SearchPhotographersResponse';
  datalist: Array<Photographer>;
};

export type SearchPhotosInput = {
  searchString: Scalars['String'];
};

export type SearchPhotosResponse = {
  __typename?: 'SearchPhotosResponse';
  datalist: Array<Photo>;
};

export type SearchPrintsInput = {
  searchString: Scalars['String'];
};

export type SearchPrintsResponse = {
  __typename?: 'SearchPrintsResponse';
  datalist: Array<Print>;
};

export type SearchProductImagesInput = {
  searchString: Scalars['String'];
};

export type SearchProductImagesResponse = {
  __typename?: 'SearchProductImagesResponse';
  datalist: Array<ProductImage>;
};

export type SearchShareImagesInput = {
  searchString: Scalars['String'];
};

export type SearchShareImagesResponse = {
  __typename?: 'SearchShareImagesResponse';
  datalist: Array<ShareImage>;
};

export type SearchSubjectsInput = {
  searchString: Scalars['String'];
};

export type SearchSubjectsResponse = {
  __typename?: 'SearchSubjectsResponse';
  datalist: Array<Subject>;
};

export type SearchTagsInput = {
  searchString: Scalars['String'];
};

export type SearchTagsResponse = {
  __typename?: 'SearchTagsResponse';
  datalist: Array<Tag>;
};

export type SelectionOption = {
  __typename?: 'SelectionOption';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type ShareImage = {
  __typename?: 'ShareImage';
  id: Scalars['ID'];
  imageName: Scalars['String'];
  fileExtension: Scalars['String'];
  imageUrl: Scalars['String'];
  altText: Scalars['String'];
  aspectRatio?: Maybe<Scalars['String']>;
  size: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
  isPortrait: Scalars['Boolean'];
  isPanoramic: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ShoppingBagItemsResponse = {
  __typename?: 'ShoppingBagItemsResponse';
  /** Returns list of Products in user's shopping bag. */
  dataList?: Maybe<Array<Product>>;
};

/** Sort direction */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type Subject = {
  __typename?: 'Subject';
  id: Scalars['ID'];
  sortIndex: Scalars['Float'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  photosOfSubject?: Maybe<Array<PhotoSubject>>;
  /** Count of photos of the subject on the site. */
  countOfPhotos: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type SubjectSearchSortInput = {
  filter?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  direction?: Maybe<SortDirection>;
};

export type SubjectSelectionOption = {
  __typename?: 'SubjectSelectionOption';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type SubjectsResponse = {
  __typename?: 'SubjectsResponse';
  subjects: Array<Subject>;
};

export type SuccessMessageResponse = {
  __typename?: 'SuccessMessageResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  sortIndex: Scalars['Int'];
  /** The name of the tag. */
  name: Scalars['String'];
  /** Optional. A description of the tag used in connection with the vignette at the top of the Tag's photo page. */
  description: Scalars['String'];
  /** A connection through a join table to the photos tagged with the tag. */
  photosWithTag?: Maybe<Array<PhotoTag>>;
  /** Count of photos of the tag on the site. */
  countOfPhotos: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type TagSearchSortInput = {
  filter?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  direction?: Maybe<SortDirection>;
};

export type TagSelectionOption = {
  __typename?: 'TagSelectionOption';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TagsResponse = {
  __typename?: 'TagsResponse';
  tags: Array<Tag>;
};

/** Optional inputs to be used to update the Collection Info. */
export type UpdateCollectionInput = {
  /** An index used to sort the collections. */
  sortIndex?: Maybe<Scalars['Float']>;
  /** Optional. Name of the collection. Used in Photo Info links. */
  name?: Maybe<Scalars['String']>;
  /** Optional. A vignette used to introduce the collection. */
  description?: Maybe<Scalars['String']>;
};

export type UpdateCollectionResponse = {
  __typename?: 'UpdateCollectionResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updatedCollection?: Maybe<Collection>;
};

export type UpdateCollectionsFromCsvResponse = {
  __typename?: 'UpdateCollectionsFromCsvResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updated?: Maybe<Scalars['Int']>;
  inserted?: Maybe<Scalars['Int']>;
};

export type UpdateFrameInput = {
  sortIndex?: Maybe<Scalars['Float']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  printType?: Maybe<Scalars['String']>;
  productImageId?: Maybe<Scalars['Float']>;
  frameSku?: Maybe<Scalars['String']>;
  dimension1?: Maybe<Scalars['Float']>;
  dimension2?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  basePrice?: Maybe<Scalars['Float']>;
  priceModifier?: Maybe<Scalars['Float']>;
};

export type UpdateFrameResponse = {
  __typename?: 'UpdateFrameResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updatedFrame?: Maybe<Frame>;
};

export type UpdateFramesFromCsvResponse = {
  __typename?: 'UpdateFramesFromCsvResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updated: Scalars['Int'];
  inserted: Scalars['Int'];
};

/** Optional inputs to be used to update the Location Info. */
export type UpdateLocationInput = {
  /** An index used to sort the locations. */
  sortIndex?: Maybe<Scalars['Float']>;
  /** Optional. Name of the location. Used in Photo Info links. */
  name?: Maybe<Scalars['String']>;
  /** An optional string that can be used to refer to the location. */
  tag?: Maybe<Scalars['String']>;
  /** Optional. A vignette used to introduce the location. */
  description?: Maybe<Scalars['String']>;
};

export type UpdateLocationResponse = {
  __typename?: 'UpdateLocationResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updatedLocation?: Maybe<Location>;
};

export type UpdateLocationsFromCsvResponse = {
  __typename?: 'UpdateLocationsFromCsvResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updated?: Maybe<Scalars['Int']>;
  inserted?: Maybe<Scalars['Int']>;
};

export type UpdateMatInput = {
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  printType?: Maybe<Scalars['String']>;
  productImageId?: Maybe<Scalars['Float']>;
  matSku?: Maybe<Scalars['String']>;
  dimension1?: Maybe<Scalars['Float']>;
  dimension2?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  shippingCost?: Maybe<Scalars['Float']>;
  basePrice?: Maybe<Scalars['Float']>;
  priceModifier?: Maybe<Scalars['Float']>;
};

export type UpdateMatResponse = {
  __typename?: 'UpdateMatResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updatedMat?: Maybe<Mat>;
};

export type UpdateMatsFromCsvResponse = {
  __typename?: 'UpdateMatsFromCsvResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updated?: Maybe<Scalars['Int']>;
  inserted?: Maybe<Scalars['Int']>;
};

export type UpdateOrderInput = {
  /** The user who placed the order. */
  userId?: Maybe<Scalars['Int']>;
  /** Current status of the order. */
  orderStatus?: Maybe<OrderStatus>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  /** IDs of products on the order. */
  productIds?: Maybe<Array<Scalars['Int']>>;
};

export type UpdateOrderResponse = {
  __typename?: 'UpdateOrderResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updatedOrder?: Maybe<Order>;
};

export type UpdatePhotoImageInput = {
  imageName?: Maybe<Scalars['String']>;
  fileExtension?: Maybe<Scalars['String']>;
  jpegUrl?: Maybe<Scalars['String']>;
  webpUrl?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type UpdatePhotoImageResponse = {
  __typename?: 'UpdatePhotoImageResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updatedPhotoImage?: Maybe<PhotoImage>;
};

export type UpdatePhotoImagesFromCsvResponse = {
  __typename?: 'UpdatePhotoImagesFromCsvResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updated?: Maybe<Scalars['Int']>;
  inserted?: Maybe<Scalars['Int']>;
};

export type UpdatePhotoInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isHidden?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  isLimitedEdition?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Int']>;
  basePrice12?: Maybe<Scalars['Float']>;
  priceModifier12?: Maybe<Scalars['Float']>;
  basePrice16?: Maybe<Scalars['Float']>;
  priceModifier16?: Maybe<Scalars['Float']>;
  basePrice20?: Maybe<Scalars['Float']>;
  priceModifier20?: Maybe<Scalars['Float']>;
  basePrice24?: Maybe<Scalars['Float']>;
  priceModifier24?: Maybe<Scalars['Float']>;
  basePrice30?: Maybe<Scalars['Float']>;
  priceModifier30?: Maybe<Scalars['Float']>;
  photoImageId?: Maybe<Scalars['Int']>;
  shareImageId?: Maybe<Scalars['Int']>;
  photographerId?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  subjectIds?: Maybe<Array<Scalars['Int']>>;
  tagIds?: Maybe<Array<Scalars['Int']>>;
  collectionIds?: Maybe<Array<Scalars['Int']>>;
};

export type UpdatePhotoResponse = {
  __typename?: 'UpdatePhotoResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updatedPhoto?: Maybe<Photo>;
};

/** Inputs to update a Photographer entity. */
export type UpdatePhotographerInput = {
  /** Optional: Photographer's full name. */
  name?: Maybe<Scalars['String']>;
  /** Optional: Photographer's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** Optional: Photographer's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** Optional: Photographer's email address. */
  email?: Maybe<Scalars['String']>;
  /** Optional: Short biography for Photographer. Displayed at the top of the Photographer's photo gallery. */
  bio?: Maybe<Scalars['String']>;
  /** id for cover image. */
  coverImageId?: Maybe<Scalars['Int']>;
};

export type UpdatePhotographerResponse = {
  __typename?: 'UpdatePhotographerResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updatedPhotographer?: Maybe<Photographer>;
};

export type UpdatePhotographersFromCsvResponse = {
  __typename?: 'UpdatePhotographersFromCsvResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updated?: Maybe<Scalars['Int']>;
  inserted?: Maybe<Scalars['Int']>;
};

export type UpdatePhotosFromCsvResponse = {
  __typename?: 'UpdatePhotosFromCsvResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updated?: Maybe<Scalars['Int']>;
  inserted?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Int']>;
};

export type UpdatePrintInput = {
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  coverImageId?: Maybe<Scalars['Float']>;
  printSku?: Maybe<Scalars['String']>;
  dimension1?: Maybe<Scalars['Float']>;
  dimension2?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  shippingCost?: Maybe<Scalars['Float']>;
  basePrice?: Maybe<Scalars['Float']>;
  priceModifier?: Maybe<Scalars['Float']>;
};

export type UpdatePrintResponse = {
  __typename?: 'UpdatePrintResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updatedPrint?: Maybe<Print>;
};

export type UpdatePrintsFromCsvResponse = {
  __typename?: 'UpdatePrintsFromCsvResponse';
  success: Scalars['Boolean'];
  updated: Scalars['Int'];
  inserted: Scalars['Int'];
};

export type UpdateProductImageInput = {
  imageName?: Maybe<Scalars['String']>;
  fileExtension?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type UpdateProductImageResponse = {
  __typename?: 'UpdateProductImageResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updatedProductImage?: Maybe<ProductImage>;
};

export type UpdateProductImagesFromCsvResponse = {
  __typename?: 'UpdateProductImagesFromCsvResponse';
  success: Scalars['Boolean'];
  updated: Scalars['Int'];
  inserted: Scalars['Int'];
};

export type UpdateProductInput = {
  photoId?: Maybe<Scalars['Int']>;
  printId?: Maybe<Scalars['Int']>;
  matId?: Maybe<Scalars['Int']>;
  frameId?: Maybe<Scalars['Int']>;
};

export type UpdateProductResponse = {
  __typename?: 'UpdateProductResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updatedProduct?: Maybe<Product>;
};

export type UpdateShareImageInput = {
  id?: Maybe<Scalars['Float']>;
  imageName?: Maybe<Scalars['String']>;
  fileExtension?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type UpdateShareImageResponse = {
  __typename?: 'UpdateShareImageResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updatedShareImage?: Maybe<ShareImage>;
};

export type UpdateShareImagesFromCsvResponse = {
  __typename?: 'UpdateShareImagesFromCsvResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updated?: Maybe<Scalars['Int']>;
  inserted?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Int']>;
};

/** Optional inputs to be used to update the Subject Info. */
export type UpdateSubjectInput = {
  /** An index used to sort the subjects. */
  sortIndex?: Maybe<Scalars['Float']>;
  /** Optional. Name of the subject. Used in Photo Info links. */
  name?: Maybe<Scalars['String']>;
  /** Optional. A vignette used to introduce the subject. */
  description?: Maybe<Scalars['String']>;
  /** Optional. A cover image to be displayed next to the opening vignette. */
  coverImageId?: Maybe<Scalars['Float']>;
};

export type UpdateSubjectResponse = {
  __typename?: 'UpdateSubjectResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updatedSubject?: Maybe<Subject>;
};

export type UpdateSubjectsFromCsvResponse = {
  __typename?: 'UpdateSubjectsFromCsvResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updated?: Maybe<Scalars['Int']>;
  inserted?: Maybe<Scalars['Int']>;
};

/** Optional inputs to be used to update the Tag Info. */
export type UpdateTagInput = {
  /** An index used to sort the tags. */
  sortIndex?: Maybe<Scalars['Float']>;
  /** Optional. Name of the tag. Used in Photo Info links. */
  name?: Maybe<Scalars['String']>;
  /** Optional. A vignette used to introduce the tag. */
  description?: Maybe<Scalars['String']>;
};

export type UpdateTagResponse = {
  __typename?: 'UpdateTagResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updatedTag?: Maybe<Tag>;
};

export type UpdateTagsFromCsvResponse = {
  __typename?: 'UpdateTagsFromCsvResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  updated?: Maybe<Scalars['Int']>;
  inserted?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
  roles: Array<Scalars['String']>;
  isSubscribed: Scalars['Boolean'];
  userFavorites: Array<UserFavorite>;
  orders: Array<Order>;
  shoppingBagItems?: Maybe<Array<Product>>;
  /** Products added to bag and then removed by user. */
  removedProducts?: Maybe<Array<Product>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UserFavorite = {
  __typename?: 'UserFavorite';
  userId: User;
  user: User;
  photoId: Photo;
  photo: Photo;
};

export type UserPreferencesResponse = {
  __typename?: 'UserPreferencesResponse';
  favorites?: Maybe<Array<UserFavorite>>;
  shoppingBagItems?: Maybe<Array<Product>>;
};

export type AddProductImageToFrameResponse = {
  __typename?: 'addProductImageToFrameResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  productImage?: Maybe<ProductImage>;
  frame?: Maybe<Frame>;
};

export type AddProductImageToMatResponse = {
  __typename?: 'addProductImageToMatResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  productImage?: Maybe<ProductImage>;
  mat?: Maybe<Mat>;
};

export type AllPhotosInCollectionQueryVariables = Exact<{
  input: AllPhotosInCollectionInput;
}>;

export type AllPhotosInCollectionQuery = { __typename?: 'Query' } & {
  allPhotosInCollection: {
    __typename?: 'AllPhotosInCollectionResponse';
  } & Pick<AllPhotosInCollectionResponse, 'total'> & {
      collectionInfo: { __typename?: 'Collection' } & Pick<
        Collection,
        'id' | 'name' | 'tag' | 'description'
      >;
      photos: Array<{ __typename?: 'Photo' } & PhotoInfoFragment>;
    };
};

export type PrintsOfTypeAndAspectRatioQueryVariables = Exact<{
  input: PrintsInput;
}>;

export type PrintsOfTypeAndAspectRatioQuery = { __typename?: 'Query' } & {
  printsOfTypeAndAspectRatio: { __typename?: 'PrintsResponse' } & Pick<
    PrintsResponse,
    'success' | 'message'
  > & { prints?: Maybe<Array<{ __typename?: 'Print' } & PrintInfoFragment>> };
};

export type MatsOfTypeAndSizeQueryVariables = Exact<{
  input: MatsInput;
}>;

export type MatsOfTypeAndSizeQuery = { __typename?: 'Query' } & {
  matsOfTypeAndSize: { __typename?: 'MatsResponse' } & Pick<
    MatsResponse,
    'success' | 'message'
  > & {
      mats?: Maybe<
        Array<
          { __typename?: 'Mat' } & {
            productImage?: Maybe<
              { __typename?: 'ProductImage' } & ProductImageInfoFragment
            >;
          } & MatInfoFragment
        >
      >;
    };
};

export type PhotoAndFinishOptionsForSkuQueryVariables = Exact<{
  sku: Scalars['Int'];
}>;

export type PhotoAndFinishOptionsForSkuQuery = { __typename?: 'Query' } & {
  photoAndFinishOptionsForSku: {
    __typename?: 'PhotoWithFinishOptionsResponse';
  } & {
    photo?: Maybe<{ __typename?: 'Photo' } & PhotoInfoFragment>;
    prints?: Maybe<Array<{ __typename?: 'Print' } & PrintInfoFragment>>;
    mats?: Maybe<
      Array<
        { __typename?: 'Mat' } & {
          productImage?: Maybe<
            { __typename?: 'ProductImage' } & ProductImageInfoFragment
          >;
        } & MatInfoFragment
      >
    >;
    frames?: Maybe<
      Array<
        { __typename?: 'Frame' } & {
          productImage?: Maybe<
            { __typename?: 'ProductImage' } & ProductImageInfoFragment
          >;
        } & FrameInfoFragment
      >
    >;
  };
};

export type FinishOptionsQueryVariables = Exact<{
  aspectRatio: Scalars['String'];
}>;

export type FinishOptionsQuery = { __typename?: 'Query' } & {
  finishOptions: { __typename?: 'FinishOptions' } & {
    prints: Array<{ __typename?: 'Print' } & PrintInfoFragment>;
    mats: Array<
      { __typename?: 'Mat' } & {
        productImage?: Maybe<
          { __typename?: 'ProductImage' } & ProductImageInfoFragment
        >;
      } & MatInfoFragment
    >;
    frames: Array<
      { __typename?: 'Frame' } & {
        productImage?: Maybe<
          { __typename?: 'ProductImage' } & ProductImageInfoFragment
        >;
      } & FrameInfoFragment
    >;
  };
};

export type FrameInfoFragment = { __typename?: 'Frame' } & Pick<
  Frame,
  | 'id'
  | 'sortIndex'
  | 'displayName'
  | 'description'
  | 'material'
  | 'color'
  | 'printType'
  | 'frameSku'
  | 'aspectRatio'
  | 'dimension1'
  | 'dimension2'
  | 'retailPrice'
  | 'createdAt'
  | 'updatedAt'
> & {
    productImage?: Maybe<
      { __typename?: 'ProductImage' } & Pick<
        ProductImage,
        | 'id'
        | 'imageName'
        | 'fileExtension'
        | 'imageUrl'
        | 'altText'
        | 'aspectRatio'
        | 'size'
        | 'width'
        | 'height'
        | 'isPortrait'
        | 'isPanoramic'
        | 'createdAt'
        | 'updatedAt'
      >
    >;
  };

export type AllPhotosAtLocationQueryVariables = Exact<{
  input: AllPhotosAtLocationInput;
}>;

export type AllPhotosAtLocationQuery = { __typename?: 'Query' } & {
  allPhotosAtLocation: { __typename?: 'AllPhotosAtLocationResponse' } & Pick<
    AllPhotosAtLocationResponse,
    'total'
  > & {
      locationInfo: { __typename?: 'Location' } & Pick<
        Location,
        'id' | 'name' | 'description'
      >;
      photos: Array<{ __typename?: 'Photo' } & PhotoInfoFragment>;
    };
};

export type MatInfoFragment = { __typename?: 'Mat' } & Pick<
  Mat,
  | 'id'
  | 'sortIndex'
  | 'displayName'
  | 'description'
  | 'color'
  | 'printType'
  | 'matSku'
  | 'aspectRatio'
  | 'dimension1'
  | 'dimension2'
  | 'retailPrice'
  | 'createdAt'
  | 'updatedAt'
> & {
    productImage?: Maybe<
      { __typename?: 'ProductImage' } & Pick<
        ProductImage,
        | 'id'
        | 'imageName'
        | 'fileExtension'
        | 'imageUrl'
        | 'altText'
        | 'aspectRatio'
        | 'size'
        | 'width'
        | 'height'
        | 'isPortrait'
        | 'isPanoramic'
        | 'createdAt'
        | 'updatedAt'
      >
    >;
  };

export type AddOrderMutationVariables = Exact<{
  input: AddOrderInput;
}>;

export type AddOrderMutation = { __typename?: 'Mutation' } & {
  addOrder: { __typename?: 'AddOrderResponse' } & Pick<
    AddOrderResponse,
    'success' | 'message'
  > & {
      newOrder?: Maybe<
        { __typename: 'Order' } & Pick<
          Order,
          | 'id'
          | 'orderStatus'
          | 'line1'
          | 'line2'
          | 'city'
          | 'state'
          | 'country'
          | 'postalCode'
          | 'createdAt'
          | 'updatedAt'
        > & {
            user?: Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>;
            products?: Maybe<
              Array<{ __typename?: 'Product' } & Pick<Product, 'id'>>
            >;
          }
      >;
    };
};

export type UpdateOrderMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateOrderInput;
}>;

export type UpdateOrderMutation = { __typename?: 'Mutation' } & {
  updateOrder: { __typename?: 'UpdateOrderResponse' } & Pick<
    UpdateOrderResponse,
    'success' | 'message'
  > & {
      updatedOrder?: Maybe<
        { __typename?: 'Order' } & Pick<
          Order,
          | 'id'
          | 'orderStatus'
          | 'line1'
          | 'line2'
          | 'city'
          | 'state'
          | 'country'
          | 'postalCode'
        > & {
            user?: Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>;
            products?: Maybe<
              Array<
                { __typename?: 'Product' } & Pick<Product, 'id'> & {
                    photo: { __typename?: 'Photo' } & PhotoInfoFragment;
                    print: { __typename?: 'Print' } & PrintInfoFragment;
                    mat?: Maybe<{ __typename?: 'Mat' } & MatInfoFragment>;
                    frame?: Maybe<{ __typename?: 'Frame' } & FrameInfoFragment>;
                  }
              >
            >;
          }
      >;
    };
};

export type PhotoImageInfoFragment = { __typename?: 'PhotoImage' } & Pick<
  PhotoImage,
  | 'id'
  | 'imageName'
  | 'jpegUrl'
  | 'webpUrl'
  | 'altText'
  | 'aspectRatio'
  | 'size'
  | 'width'
  | 'height'
  | 'isPortrait'
  | 'isPanoramic'
  | 'createdAt'
  | 'updatedAt'
>;

export type PhotographerInfoFragment = { __typename?: 'Photographer' } & Pick<
  Photographer,
  'id' | 'name' | 'firstName' | 'lastName' | 'email' | 'bio'
> & {
    coverImage?: Maybe<
      { __typename?: 'ProductImage' } & ProductImageInfoFragment
    >;
  };

export type AllPhotosByPhotographerQueryVariables = Exact<{
  input: AllPhotosByPhotographerInput;
}>;

export type AllPhotosByPhotographerQuery = { __typename?: 'Query' } & {
  allPhotosByPhotographer: {
    __typename?: 'AllPhotosByPhotographerResponse';
  } & Pick<AllPhotosByPhotographerResponse, 'total'> & {
      photographerInfo: {
        __typename?: 'Photographer';
      } & PhotographerInfoFragment;
      photos: Array<{ __typename?: 'Photo' } & PhotoInfoFragment>;
    };
};

export type PhotoInfoFragment = { __typename?: 'Photo' } & Pick<
  Photo,
  | 'id'
  | 'rating'
  | 'sku'
  | 'sortIndex'
  | 'title'
  | 'description'
  | 'isFeatured'
  | 'isLimitedEdition'
  | 'isHidden'
  | 'basePrice12'
  | 'priceModifier12'
  | 'retailPrice12'
  | 'basePrice16'
  | 'priceModifier16'
  | 'retailPrice16'
  | 'basePrice20'
  | 'priceModifier20'
  | 'retailPrice20'
  | 'basePrice24'
  | 'priceModifier24'
  | 'retailPrice24'
  | 'basePrice30'
  | 'priceModifier30'
  | 'retailPrice30'
> & {
    photoImage: { __typename?: 'PhotoImage' } & Pick<
      PhotoImage,
      | 'id'
      | 'imageName'
      | 'jpegUrl'
      | 'webpUrl'
      | 'altText'
      | 'aspectRatio'
      | 'size'
      | 'width'
      | 'height'
      | 'isPortrait'
      | 'isPanoramic'
    >;
    shareImage?: Maybe<
      { __typename?: 'ShareImage' } & Pick<
        ShareImage,
        | 'id'
        | 'imageName'
        | 'fileExtension'
        | 'imageUrl'
        | 'altText'
        | 'aspectRatio'
        | 'size'
        | 'width'
        | 'height'
        | 'isPortrait'
        | 'isPanoramic'
      >
    >;
    photographer?: Maybe<
      { __typename?: 'Photographer' } & Pick<Photographer, 'id' | 'name'>
    >;
    location?: Maybe<
      { __typename?: 'Location' } & Pick<Location, 'id' | 'name'>
    >;
    subjectsInPhoto?: Maybe<
      Array<
        { __typename?: 'PhotoSubject' } & {
          subject: { __typename?: 'Subject' } & Pick<Subject, 'id' | 'name'>;
        }
      >
    >;
    tagsForPhoto?: Maybe<
      Array<
        { __typename?: 'PhotoTag' } & {
          tag: { __typename?: 'Tag' } & Pick<Tag, 'id' | 'name'>;
        }
      >
    >;
    collectionsForPhoto?: Maybe<
      Array<
        { __typename?: 'PhotoCollection' } & {
          collection: { __typename?: 'Collection' } & Pick<
            Collection,
            'id' | 'name'
          >;
        }
      >
    >;
  };

export type AllFeaturedPhotosQueryVariables = Exact<{ [key: string]: never }>;

export type AllFeaturedPhotosQuery = { __typename?: 'Query' } & {
  allFeaturedPhotos: { __typename?: 'AllFeaturedPhotosResponse' } & Pick<
    AllFeaturedPhotosResponse,
    'total'
  > & { photos: Array<{ __typename?: 'Photo' } & PhotoInfoFragment> };
};

export type PhotoWithSkuQueryVariables = Exact<{
  sku: Scalars['Int'];
}>;

export type PhotoWithSkuQuery = { __typename?: 'Query' } & {
  photoWithSku: { __typename?: 'Photo' } & PhotoInfoFragment;
};

export type PrintInfoFragment = { __typename?: 'Print' } & Pick<
  Print,
  | 'id'
  | 'displayName'
  | 'description'
  | 'type'
  | 'printSku'
  | 'aspectRatio'
  | 'dimension1'
  | 'dimension2'
  | 'retailPrice'
  | 'createdAt'
  | 'updatedAt'
>;

export type ProductImageInfoFragment = { __typename?: 'ProductImage' } & Pick<
  ProductImage,
  | 'id'
  | 'imageName'
  | 'fileExtension'
  | 'imageUrl'
  | 'altText'
  | 'aspectRatio'
  | 'size'
  | 'width'
  | 'height'
  | 'isPortrait'
  | 'isPanoramic'
  | 'createdAt'
  | 'updatedAt'
>;

export type ProductInfoFragment = { __typename?: 'Product' } & Pick<
  Product,
  'id' | 'productSummary' | 'totalRetailPrice' | 'createdAt' | 'updatedAt'
> & {
    photo: { __typename?: 'Photo' } & PhotoInfoFragment;
    print: { __typename?: 'Print' } & PrintInfoFragment;
    mat?: Maybe<{ __typename?: 'Mat' } & MatInfoFragment>;
    frame?: Maybe<{ __typename?: 'Frame' } & FrameInfoFragment>;
  };

export type ProductQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type ProductQuery = { __typename?: 'Query' } & {
  product?: Maybe<
    { __typename?: 'Product' } & Pick<
      Product,
      'id' | 'productSummary' | 'totalRetailPrice' | 'createdAt' | 'updatedAt'
    > & {
        photo: { __typename?: 'Photo' } & PhotoInfoFragment;
        print: { __typename?: 'Print' } & PrintInfoFragment;
        mat?: Maybe<{ __typename?: 'Mat' } & MatInfoFragment>;
        frame?: Maybe<{ __typename?: 'Frame' } & FrameInfoFragment>;
      }
  >;
};

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput;
}>;

export type CreateProductMutation = { __typename?: 'Mutation' } & {
  createProduct: { __typename?: 'CreateProductResponse' } & Pick<
    CreateProductResponse,
    'success' | 'message'
  > & {
      newProduct?: Maybe<
        { __typename?: 'Product' } & Pick<
          Product,
          'id' | 'totalRetailPrice'
        > & {
            photo: { __typename?: 'Photo' } & PhotoInfoFragment;
            print: { __typename?: 'Print' } & PrintInfoFragment;
            mat?: Maybe<{ __typename?: 'Mat' } & MatInfoFragment>;
            frame?: Maybe<{ __typename?: 'Frame' } & FrameInfoFragment>;
          }
      >;
    };
};

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateProductInput;
}>;

export type UpdateProductMutation = { __typename?: 'Mutation' } & {
  updateProduct: { __typename?: 'UpdateProductResponse' } & Pick<
    UpdateProductResponse,
    'success' | 'message'
  > & {
      updatedProduct?: Maybe<
        { __typename?: 'Product' } & Pick<
          Product,
          'id' | 'totalRetailPrice'
        > & {
            photo: { __typename?: 'Photo' } & PhotoInfoFragment;
            print: { __typename?: 'Print' } & PrintInfoFragment;
            mat?: Maybe<{ __typename?: 'Mat' } & MatInfoFragment>;
            frame?: Maybe<{ __typename?: 'Frame' } & FrameInfoFragment>;
          }
      >;
    };
};

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type DeleteProductMutation = { __typename?: 'Mutation' } & {
  deleteProduct: { __typename?: 'SuccessMessageResponse' } & Pick<
    SuccessMessageResponse,
    'success' | 'message'
  >;
};

export type AllPhotosOfSubjectQueryVariables = Exact<{
  input: AllPhotosOfSubjectInput;
}>;

export type AllPhotosOfSubjectQuery = { __typename?: 'Query' } & {
  allPhotosOfSubject: { __typename?: 'AllPhotosOfSubjectResponse' } & Pick<
    AllPhotosOfSubjectResponse,
    'total'
  > & {
      subjectInfo?: Maybe<
        { __typename?: 'Subject' } & Pick<
          Subject,
          'id' | 'name' | 'description'
        >
      >;
      photos: Array<{ __typename?: 'Photo' } & PhotoInfoFragment>;
    };
};

export type AllPhotosWithTagQueryVariables = Exact<{
  input: AllPhotosWithTagInput;
}>;

export type AllPhotosWithTagQuery = { __typename?: 'Query' } & {
  allPhotosWithTag: { __typename?: 'AllPhotosWithTagResponse' } & Pick<
    AllPhotosWithTagResponse,
    'total'
  > & {
      tagInfo: { __typename?: 'Tag' } & Pick<
        Tag,
        'id' | 'name' | 'description'
      >;
      photos: Array<{ __typename?: 'Photo' } & PhotoInfoFragment>;
    };
};

export type GetApiTokenMutationVariables = Exact<{
  input: GetApiTokenInput;
}>;

export type GetApiTokenMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'getApiToken'
>;

export type AddPhotoToFavoritesMutationVariables = Exact<{
  photoId: Scalars['Float'];
}>;

export type AddPhotoToFavoritesMutation = { __typename?: 'Mutation' } & {
  addPhotoToFavorites: { __typename?: 'AddPhotoToFavoritesResponse' } & Pick<
    AddPhotoToFavoritesResponse,
    'success' | 'message' | 'addedPhotoWithId'
  >;
};

export type RemovePhotoFromFavoritesMutationVariables = Exact<{
  photoId: Scalars['Float'];
}>;

export type RemovePhotoFromFavoritesMutation = { __typename?: 'Mutation' } & {
  removePhotoFromFavorites: {
    __typename?: 'RemovePhotoFromFavoritesResponse';
  } & Pick<
    RemovePhotoFromFavoritesResponse,
    'success' | 'message' | 'removedPhotoWithId'
  >;
};

export type FavoritesQueryVariables = Exact<{ [key: string]: never }>;

export type FavoritesQuery = { __typename?: 'Query' } & {
  favorites: { __typename?: 'FavoritesResponse' } & {
    photoList?: Maybe<Array<{ __typename?: 'Photo' } & PhotoInfoFragment>>;
  };
};

export type ShoppingBagItemsQueryVariables = Exact<{ [key: string]: never }>;

export type ShoppingBagItemsQuery = { __typename?: 'Query' } & {
  shoppingBagItems: { __typename?: 'ShoppingBagItemsResponse' } & {
    dataList?: Maybe<
      Array<
        { __typename?: 'Product' } & Pick<
          Product,
          | 'id'
          | 'totalRetailPrice'
          | 'productSummary'
          | 'createdAt'
          | 'updatedAt'
        > & {
            photo: { __typename?: 'Photo' } & PhotoInfoFragment;
            print: { __typename?: 'Print' } & PrintInfoFragment;
            mat?: Maybe<{ __typename?: 'Mat' } & MatInfoFragment>;
            frame?: Maybe<{ __typename?: 'Frame' } & FrameInfoFragment>;
          }
      >
    >;
  };
};

export type AddProductToShoppingBagMutationVariables = Exact<{
  productId: Scalars['Float'];
}>;

export type AddProductToShoppingBagMutation = { __typename?: 'Mutation' } & {
  addProductToShoppingBag: {
    __typename?: 'AddProductToShoppingBagResponse';
  } & Pick<AddProductToShoppingBagResponse, 'success' | 'message'> & {
      addedProduct?: Maybe<
        { __typename?: 'Product' } & Pick<
          Product,
          'id' | 'totalRetailPrice'
        > & {
            photo: { __typename?: 'Photo' } & PhotoInfoFragment;
            print: { __typename?: 'Print' } & PrintInfoFragment;
            mat?: Maybe<{ __typename?: 'Mat' } & MatInfoFragment>;
            frame?: Maybe<{ __typename?: 'Frame' } & FrameInfoFragment>;
          }
      >;
    };
};

export type RemoveProductFromShoppingBagMutationVariables = Exact<{
  productId: Scalars['Float'];
}>;

export type RemoveProductFromShoppingBagMutation = {
  __typename?: 'Mutation';
} & {
  removeProductFromShoppingBag: {
    __typename?: 'SuccessMessageResponse';
  } & Pick<SuccessMessageResponse, 'success' | 'message'>;
};

export type GetUserPreferencesQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserPreferencesQuery = { __typename?: 'Query' } & {
  getUserPreferences: { __typename?: 'UserPreferencesResponse' } & {
    favorites?: Maybe<
      Array<
        { __typename?: 'UserFavorite' } & {
          photo: { __typename?: 'Photo' } & PhotoInfoFragment;
        }
      >
    >;
    shoppingBagItems?: Maybe<
      Array<
        { __typename?: 'Product' } & {
          photo: { __typename?: 'Photo' } & PhotoInfoFragment;
        }
      >
    >;
  };
};

export const PhotoImageInfoFragmentDoc: DocumentNode<
  PhotoImageInfoFragment,
  unknown
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PhotoImageInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PhotoImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'imageName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jpegUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'altText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isPortrait' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isPanoramic' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
        ],
      },
    },
  ],
};
export const ProductImageInfoFragmentDoc: DocumentNode<
  ProductImageInfoFragment,
  unknown
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductImageInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ProductImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'imageName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'fileExtension' } },
          { kind: 'Field', name: { kind: 'Name', value: 'imageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'altText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isPortrait' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isPanoramic' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
        ],
      },
    },
  ],
};
export const PhotographerInfoFragmentDoc: DocumentNode<
  PhotographerInfoFragment,
  unknown
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PhotographerInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photographer' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'coverImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProductImageInfo' },
                },
              ],
            },
          },
        ],
      },
    },
    ...ProductImageInfoFragmentDoc.definitions,
  ],
};
export const PhotoInfoFragmentDoc: DocumentNode<PhotoInfoFragment, unknown> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PhotoInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sku' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sortIndex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFeatured' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isLimitedEdition' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isHidden' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
          { kind: 'Field', name: { kind: 'Name', value: 'basePrice12' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceModifier12' } },
          { kind: 'Field', name: { kind: 'Name', value: 'retailPrice12' } },
          { kind: 'Field', name: { kind: 'Name', value: 'basePrice16' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceModifier16' } },
          { kind: 'Field', name: { kind: 'Name', value: 'retailPrice16' } },
          { kind: 'Field', name: { kind: 'Name', value: 'basePrice20' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceModifier20' } },
          { kind: 'Field', name: { kind: 'Name', value: 'retailPrice20' } },
          { kind: 'Field', name: { kind: 'Name', value: 'basePrice24' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceModifier24' } },
          { kind: 'Field', name: { kind: 'Name', value: 'retailPrice24' } },
          { kind: 'Field', name: { kind: 'Name', value: 'basePrice30' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceModifier30' } },
          { kind: 'Field', name: { kind: 'Name', value: 'retailPrice30' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'photoImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'imageName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'jpegUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'webpUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'altText' } },
                { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
                { kind: 'Field', name: { kind: 'Name', value: 'size' } },
                { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isPortrait' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isPanoramic' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'shareImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'imageName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fileExtension' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'imageUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'altText' } },
                { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
                { kind: 'Field', name: { kind: 'Name', value: 'size' } },
                { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isPortrait' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isPanoramic' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'photographer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subjectsInPhoto' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'subject' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tagsForPhoto' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tag' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collectionsForPhoto' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'collection' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const PrintInfoFragmentDoc: DocumentNode<PrintInfoFragment, unknown> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PrintInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Print' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'printSku' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dimension1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dimension2' } },
          { kind: 'Field', name: { kind: 'Name', value: 'retailPrice' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
        ],
      },
    },
  ],
};
export const MatInfoFragmentDoc: DocumentNode<MatInfoFragment, unknown> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MatInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Mat' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sortIndex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'color' } },
          { kind: 'Field', name: { kind: 'Name', value: 'printType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'matSku' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dimension1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dimension2' } },
          { kind: 'Field', name: { kind: 'Name', value: 'retailPrice' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'productImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'imageName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fileExtension' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'imageUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'altText' } },
                { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
                { kind: 'Field', name: { kind: 'Name', value: 'size' } },
                { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isPortrait' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isPanoramic' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const FrameInfoFragmentDoc: DocumentNode<FrameInfoFragment, unknown> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FrameInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Frame' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sortIndex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'material' } },
          { kind: 'Field', name: { kind: 'Name', value: 'color' } },
          { kind: 'Field', name: { kind: 'Name', value: 'printType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'frameSku' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dimension1' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dimension2' } },
          { kind: 'Field', name: { kind: 'Name', value: 'retailPrice' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'productImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'imageName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fileExtension' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'imageUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'altText' } },
                { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
                { kind: 'Field', name: { kind: 'Name', value: 'size' } },
                { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isPortrait' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isPanoramic' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const ProductInfoFragmentDoc: DocumentNode<
  ProductInfoFragment,
  unknown
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Product' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productSummary' } },
          { kind: 'Field', name: { kind: 'Name', value: 'totalRetailPrice' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'photo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PhotoInfo' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'print' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PrintInfo' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'mat' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'MatInfo' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'frame' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'FrameInfo' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
    ...PrintInfoFragmentDoc.definitions,
    ...MatInfoFragmentDoc.definitions,
    ...FrameInfoFragmentDoc.definitions,
  ],
};
export const AllPhotosInCollectionDocument: DocumentNode<
  AllPhotosInCollectionQuery,
  AllPhotosInCollectionQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'allPhotosInCollection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AllPhotosInCollectionInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allPhotosInCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'collectionInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'photos' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PhotoInfo' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
  ],
};
export const PrintsOfTypeAndAspectRatioDocument: DocumentNode<
  PrintsOfTypeAndAspectRatioQuery,
  PrintsOfTypeAndAspectRatioQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'printsOfTypeAndAspectRatio' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'PrintsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'printsOfTypeAndAspectRatio' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'prints' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PrintInfo' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PrintInfoFragmentDoc.definitions,
  ],
};
export const MatsOfTypeAndSizeDocument: DocumentNode<
  MatsOfTypeAndSizeQuery,
  MatsOfTypeAndSizeQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'matsOfTypeAndSize' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'MatsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'matsOfTypeAndSize' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mats' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'MatInfo' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'productImage' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ProductImageInfo' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...MatInfoFragmentDoc.definitions,
    ...ProductImageInfoFragmentDoc.definitions,
  ],
};
export const PhotoAndFinishOptionsForSkuDocument: DocumentNode<
  PhotoAndFinishOptionsForSkuQuery,
  PhotoAndFinishOptionsForSkuQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'photoAndFinishOptionsForSku' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sku' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'photoAndFinishOptionsForSku' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sku' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sku' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'photo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PhotoInfo' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'prints' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PrintInfo' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mats' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'MatInfo' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'productImage' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ProductImageInfo' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'frames' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'FrameInfo' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'productImage' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ProductImageInfo' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
    ...PrintInfoFragmentDoc.definitions,
    ...MatInfoFragmentDoc.definitions,
    ...ProductImageInfoFragmentDoc.definitions,
    ...FrameInfoFragmentDoc.definitions,
  ],
};
export const FinishOptionsDocument: DocumentNode<
  FinishOptionsQuery,
  FinishOptionsQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'finishOptions' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'aspectRatio' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'finishOptions' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'aspectRatio' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'aspectRatio' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'prints' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PrintInfo' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mats' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'MatInfo' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'productImage' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ProductImageInfo' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'frames' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'FrameInfo' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'productImage' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ProductImageInfo' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PrintInfoFragmentDoc.definitions,
    ...MatInfoFragmentDoc.definitions,
    ...ProductImageInfoFragmentDoc.definitions,
    ...FrameInfoFragmentDoc.definitions,
  ],
};
export const AllPhotosAtLocationDocument: DocumentNode<
  AllPhotosAtLocationQuery,
  AllPhotosAtLocationQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'allPhotosAtLocation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AllPhotosAtLocationInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allPhotosAtLocation' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'locationInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'photos' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PhotoInfo' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
  ],
};
export const AddOrderDocument: DocumentNode<
  AddOrderMutation,
  AddOrderMutationVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'addOrder' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AddOrderInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addOrder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'newOrder' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'orderStatus' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'products' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'country' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'postalCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const UpdateOrderDocument: DocumentNode<
  UpdateOrderMutation,
  UpdateOrderMutationVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateOrder' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateOrderInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateOrder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'updatedOrder' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'orderStatus' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'line1' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'line2' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'country' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'postalCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'products' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'photo' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'PhotoInfo' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'print' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'PrintInfo' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'mat' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'MatInfo' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'frame' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'FrameInfo' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
    ...PrintInfoFragmentDoc.definitions,
    ...MatInfoFragmentDoc.definitions,
    ...FrameInfoFragmentDoc.definitions,
  ],
};
export const AllPhotosByPhotographerDocument: DocumentNode<
  AllPhotosByPhotographerQuery,
  AllPhotosByPhotographerQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'allPhotosByPhotographer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AllPhotosByPhotographerInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allPhotosByPhotographer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'photographerInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PhotographerInfo' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'photos' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PhotoInfo' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotographerInfoFragmentDoc.definitions,
    ...PhotoInfoFragmentDoc.definitions,
  ],
};
export const AllFeaturedPhotosDocument: DocumentNode<
  AllFeaturedPhotosQuery,
  AllFeaturedPhotosQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'allFeaturedPhotos' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allFeaturedPhotos' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'photos' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PhotoInfo' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
  ],
};
export const PhotoWithSkuDocument: DocumentNode<
  PhotoWithSkuQuery,
  PhotoWithSkuQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'photoWithSku' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sku' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'photoWithSku' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sku' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sku' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PhotoInfo' },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
  ],
};
export const ProductDocument: DocumentNode<
  ProductQuery,
  ProductQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'product' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'productSummary' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'totalRetailPrice' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'photo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PhotoInfo' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'print' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PrintInfo' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mat' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'MatInfo' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'frame' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'FrameInfo' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
    ...PrintInfoFragmentDoc.definitions,
    ...MatInfoFragmentDoc.definitions,
    ...FrameInfoFragmentDoc.definitions,
  ],
};
export const CreateProductDocument: DocumentNode<
  CreateProductMutation,
  CreateProductMutationVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createProduct' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateProductInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createProduct' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'newProduct' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalRetailPrice' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'photo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'PhotoInfo' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'print' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'PrintInfo' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'mat' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'MatInfo' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'frame' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'FrameInfo' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
    ...PrintInfoFragmentDoc.definitions,
    ...MatInfoFragmentDoc.definitions,
    ...FrameInfoFragmentDoc.definitions,
  ],
};
export const UpdateProductDocument: DocumentNode<
  UpdateProductMutation,
  UpdateProductMutationVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateProduct' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateProductInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateProduct' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'updatedProduct' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalRetailPrice' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'photo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'PhotoInfo' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'print' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'PrintInfo' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'mat' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'MatInfo' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'frame' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'FrameInfo' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
    ...PrintInfoFragmentDoc.definitions,
    ...MatInfoFragmentDoc.definitions,
    ...FrameInfoFragmentDoc.definitions,
  ],
};
export const DeleteProductDocument: DocumentNode<
  DeleteProductMutation,
  DeleteProductMutationVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'deleteProduct' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteProduct' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const AllPhotosOfSubjectDocument: DocumentNode<
  AllPhotosOfSubjectQuery,
  AllPhotosOfSubjectQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'allPhotosOfSubject' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AllPhotosOfSubjectInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allPhotosOfSubject' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'subjectInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'photos' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PhotoInfo' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
  ],
};
export const AllPhotosWithTagDocument: DocumentNode<
  AllPhotosWithTagQuery,
  AllPhotosWithTagQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'allPhotosWithTag' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AllPhotosWithTagInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allPhotosWithTag' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tagInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'photos' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PhotoInfo' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
  ],
};
export const GetApiTokenDocument: DocumentNode<
  GetApiTokenMutation,
  GetApiTokenMutationVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'getApiToken' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'GetApiTokenInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getApiToken' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
};
export const AddPhotoToFavoritesDocument: DocumentNode<
  AddPhotoToFavoritesMutation,
  AddPhotoToFavoritesMutationVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'addPhotoToFavorites' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'photoId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addPhotoToFavorites' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'photoId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'photoId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'addedPhotoWithId' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const RemovePhotoFromFavoritesDocument: DocumentNode<
  RemovePhotoFromFavoritesMutation,
  RemovePhotoFromFavoritesMutationVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'removePhotoFromFavorites' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'photoId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removePhotoFromFavorites' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'photoId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'photoId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'removedPhotoWithId' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const FavoritesDocument: DocumentNode<
  FavoritesQuery,
  FavoritesQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'favorites' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'favorites' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'photoList' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PhotoInfo' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
  ],
};
export const ShoppingBagItemsDocument: DocumentNode<
  ShoppingBagItemsQuery,
  ShoppingBagItemsQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'shoppingBagItems' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'shoppingBagItems' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'dataList' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalRetailPrice' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'productSummary' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'photo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'PhotoInfo' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'print' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'PrintInfo' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'mat' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'MatInfo' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'frame' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'FrameInfo' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
    ...PrintInfoFragmentDoc.definitions,
    ...MatInfoFragmentDoc.definitions,
    ...FrameInfoFragmentDoc.definitions,
  ],
};
export const AddProductToShoppingBagDocument: DocumentNode<
  AddProductToShoppingBagMutation,
  AddProductToShoppingBagMutationVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'addProductToShoppingBag' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'productId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addProductToShoppingBag' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'productId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'productId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'addedProduct' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalRetailPrice' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'photo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'PhotoInfo' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'print' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'PrintInfo' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'mat' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'MatInfo' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'frame' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'FrameInfo' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
    ...PrintInfoFragmentDoc.definitions,
    ...MatInfoFragmentDoc.definitions,
    ...FrameInfoFragmentDoc.definitions,
  ],
};
export const RemoveProductFromShoppingBagDocument: DocumentNode<
  RemoveProductFromShoppingBagMutation,
  RemoveProductFromShoppingBagMutationVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'removeProductFromShoppingBag' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'productId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removeProductFromShoppingBag' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'productId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'productId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const GetUserPreferencesDocument: DocumentNode<
  GetUserPreferencesQuery,
  GetUserPreferencesQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getUserPreferences' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getUserPreferences' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'favorites' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'photo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'PhotoInfo' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'shoppingBagItems' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'photo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'PhotoInfo' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PhotoInfoFragmentDoc.definitions,
  ],
};
