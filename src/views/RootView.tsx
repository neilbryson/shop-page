import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useTheme } from '../hooks/useTheme';
import { store } from '../redux/configureStore';
import { NotFoundView } from './NotFoundView';
import { ProductView } from './ProductView';

export const RootView = () => {
  useTheme();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
