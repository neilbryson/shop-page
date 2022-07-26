import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useTheme } from '../hooks/useTheme';
import { NotFoundView } from './NotFoundView';

export const RootView = () => {
  useTheme();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="font-bold">Hello</div>} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
};
