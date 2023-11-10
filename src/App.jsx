import SharedLayout from 'components/SharedLayout/SharedLayout';
import CatalogPage from 'pages/Catalog';
import ErrorPage from 'pages/Error';
import FavoritesPage from 'pages/Favorites';
import HomePage from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import { fetchCar } from 'redux/operation';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCar());
  }, [dispatch]);

  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;