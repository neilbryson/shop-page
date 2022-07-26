import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addToCart } from '../redux/modules/cart/actions';
import { Product, SizeLabel } from '../redux/modules/products/types';
import { SizeSelection } from './SizeSelection';

export type ProductDetailsProps = {
  details: Product;
};

export const ProductDetails = ({ details }: ProductDetailsProps) => {
  const [selectedSize, setSelectedSize] = useState<SizeLabel | null>(null);
  const dispatch = useDispatch();

  function onClickAdd() {
    if (!selectedSize) {
      alert('Please select size!');
      return;
    }
    dispatch(addToCart(selectedSize));
  }

  return (
    <section className="flex flex-col md:flex-row pl-4 pr-4 md:pl-24 md:pr-24">
      <img src={details.imageURL} alt={details.title} className="h-full md:h-[600px]" />
      <div className="flex flex-col">
        <span className="font-medium text-2xl">{details.title}</span>
        <span className="font-bold border-t border-b border-shop-border-light p-1 mt-4">
          ${details.price.toFixed(2)}
        </span>
        <span className="text-shop-text-light text-sm mt-4">{details.description}</span>
        <div className="mt-6">
          <div className="text-xs font-bold mb-4">
            <span className="text-shop-text-light">SIZE</span>
            <span className="text-shop-required">*</span>
            {selectedSize && <span className="ml-2">{selectedSize}</span>}
          </div>
          <SizeSelection sizes={details.sizeOptions} onSelect={setSelectedSize} />
        </div>
        <button
          onClick={onClickAdd}
          className="border-2 border-shop-border-dark pl-4 pr-4 pt-1 pb-1 flex-grow-0 self-start mt-4 font-medium duration-200 hover:bg-shop-border-dark hover:text-white"
        >
          ADD TO CART
        </button>
      </div>
    </section>
  );
};
