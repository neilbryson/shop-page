import { type TypedUseSelectorHook, useSelector } from 'react-redux';

import type { RootState } from '../redux/configureStore';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
