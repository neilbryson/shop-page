import { useState } from 'react';

import { Size, SizeLabel } from '../redux/modules/products/types';

export type SizeSelectionProps = {
  sizes?: ReadonlyArray<Size>;
  onSelect?: (size: SizeLabel | null) => void;
};

export const SizeSelection = ({ sizes = [], onSelect }: SizeSelectionProps) => {
  const [selected, setSelected] = useState<SizeLabel | null>(null);

  function onClick(size: SizeLabel) {
    const nextSize = size === selected ? null : size;
    setSelected(nextSize);
    if (onSelect) onSelect(nextSize);
  }

  return (
    <div>
      {sizes.map((size) => (
        <button
          key={size.id}
          className={`${
            selected === size.label
              ? 'border-shop-border-dark text-shop-text-dark border-2'
              : 'border border-shop-border-light text-shop-text-light'
          } h-8 w-8 text-xs cursor-pointer mr-1`}
          onClick={() => onClick(size.label)}
        >
          {size.label}
        </button>
      ))}
    </div>
  );
};
