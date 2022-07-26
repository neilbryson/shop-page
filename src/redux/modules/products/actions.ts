import { type GetProductPending, SagaActions } from './types';

export const getProduct = (): GetProductPending => ({
  type: SagaActions.GET_PRODUCT_PENDING,
});
