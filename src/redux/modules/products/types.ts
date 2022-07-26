import type { Action } from '../../../types/Redux';

export type SizeLabel = 'S' | 'M' | 'L';

export type Size = {
  id: number;
  label: SizeLabel;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  imageURL: string;
  sizeOptions: Size[];
};

export type ProductReducerState = {
  product: Product | undefined;
};

export const SagaActions = {
  GET_PRODUCT_PENDING: '@product/GET_PRODUCT_PENDING',
  GET_PRODUCT_FULFILLED: '@product/GET_PRODUCT_FULFILLED',
  GET_PRODUCT_REJECTED: '@product/GET_PRODUCT_REJECTED',
} as const;

export type GetProductPending = Action<typeof SagaActions.GET_PRODUCT_PENDING>;
export type GetProductFulfilled = Action<typeof SagaActions.GET_PRODUCT_FULFILLED, Product>;
export type GetProductRejected = Action<typeof SagaActions.GET_PRODUCT_REJECTED>;

export type ProductActionTypes = GetProductPending | GetProductFulfilled | GetProductRejected;
