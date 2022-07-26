import { useMemo } from 'react';

import { useAppSelector } from '../hooks/useAppSelector';

export const CartDetails = () => {
  const { selections, product } = useAppSelector((state) => ({
    product: state.productsReducer.product,
    selections: state.cartsReducer.selections,
  }));
  const totalCount = useMemo(() => selections.S + selections.M + selections.L, [selections]);

  function renderContents() {
    const sizes = ['S', 'M', 'L'] as const;
    if (!product || totalCount === 0) return <span className="text-lg">Nothing selected!</span>;
    return sizes.map((size) => {
      if (selections[size] === 0) return null;
      return (
        <div key={size} className="flex h-48 mb-10 text-xs last:mb-0">
          <img src={product.imageURL} alt={product.title} />
          <div>
            <span>{product.title}</span>
            <div>
              <span className="mr-2">{selections[size]}x</span>
              <span className="font-bold">${product.price.toFixed(2)}</span>
            </div>
            <span>Size: {size}</span>
          </div>
        </div>
      );
    });
  }

  return (
    <section className="absolute top-12 md:right-24 w-96 bg-white outline outline-1 outline-shop-border-light p-8">
      {renderContents()}
    </section>
  );
};
