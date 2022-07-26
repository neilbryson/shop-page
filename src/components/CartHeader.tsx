import { useMemo, useState } from 'react';

import { useAppSelector } from '../hooks/useAppSelector';
import { CartDetails } from './CartDetails';

export const CartHeader = () => {
  const selections = useAppSelector((state) => state.cartsReducer.selections);
  const totalCount = useMemo(() => selections.S + selections.M + selections.L, [selections]);
  const [isOpen, setIsOpen] = useState(false);

  function toggleCartDetails() {
    setIsOpen((prevOpen) => !prevOpen);
  }

  return (
    <header className="bg-shop-header-bg w-screen h-8 mt-4 mb-8 pl-4 pr-4 md:pl-24 md:pr-24 flex justify-end text-xs">
      <button
        onClick={toggleCartDetails}
        className={`w-20 text-xs ${
          isOpen ? 'bg-white outline outline-1 outline-shop-border-light text-shop-text-dark' : 'text-shop-text-light'
        }`}
      >
        My Cart ( {totalCount} )
      </button>
      {isOpen && <CartDetails />}
    </header>
  );
};
