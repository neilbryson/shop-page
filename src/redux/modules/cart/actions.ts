import { SizeLabel } from '../products/types';
import { AddToCart, LocalActions } from './types';

export const addToCart = (size: SizeLabel): AddToCart => ({
  type: LocalActions.ADD,
  payload: size,
});
