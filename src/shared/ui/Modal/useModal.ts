import { createContext, useContext } from 'react';

import { ModalContextValue } from './types';

export const ModalContext = createContext<ModalContextValue | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      'Modal compound components must be used within Modal component'
    );
  }
  return context;
};