import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CartHeader } from '../components/CartHeader';
import { ProductDetails } from '../components/ProductDetails';
import { useAppSelector } from '../hooks/useAppSelector';
import { getProduct } from '../redux/modules/products/actions';

export const ProductView = () => {
  const dispatch = useDispatch();
  const product = useAppSelector((state) => state.productsReducer.product);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (!product) return null;

  return (
    <main className="w-screen h-screen">
      <CartHeader />
      <ProductDetails details={product} />
    </main>
  );
};
