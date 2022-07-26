import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getProduct } from '../redux/modules/products/actions';

export const ProductView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return <div>Prod</div>;
};
