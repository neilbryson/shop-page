import type { Action } from '../../../types/Redux';
import { SizeLabel } from '../products/types';

export type CartEntry = {
  count: number;
  size: SizeLabel;
};

export type CartReducerState = {
  selections: Record<SizeLabel, number>;
};

export const LocalActions = {
  ADD: '@cart/ADD',
} as const;

export type AddToCart = Action<typeof LocalActions.ADD, SizeLabel>;

export type CartActionTypes = AddToCart;
