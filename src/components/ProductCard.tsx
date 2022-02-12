import React, { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import {
  onChangeArgs,
  InitialValues,
  ProductContextProps,
  Product,
  ProductCardHandlers,
} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  // children?: React.ReactElement | React.ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  initialValues?: InitialValues;
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  style?: React.CSSProperties;
  value?: number;
}

export const ProductCard = ({
  className,
  children,
  initialValues,
  onChange,
  product,
  style,
  value,
}: Props) => {
  const {
    counter,
    increaseBy,
    isMaxCountReached,
    maxCount,
    reset,
  } = useProduct({ initialValues, onChange, product, value });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        maxCount,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
