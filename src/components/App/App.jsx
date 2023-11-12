import { Routes, Route } from 'react-router-dom';
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import SharedLayout from '../SharedLayout/SharedLayout';
import HomePage from '../../pages/HomePage';
import Games from '../../pages/GamesPage';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import ErrorPage from '../../pages/ErrorPage';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';
// import { refreshUser } from "redux/auth/operationsAuth";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../helpers/mateialUiFontFamila.js'
;
const App = () => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(refreshUser());
    // }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
        <Routes>
            <Route element={<SharedLayout />}>
                <Route index element={<HomePage />} />
                <Route
                    path="login"
                    element={
                        // <PublicRoute>
                            <LoginPage />
                        // </PublicRoute>
                    }
                />
                <Route
                    path="register"
                    element={
                        // <PublicRoute>
                            <RegisterPage />
                        // </PublicRoute>
                    }
                />
                <Route
                    path="games"
                    element={
                        // <PrivateRoute>
                            <Games />
                        // </PrivateRoute>
                    }
                />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
        </ThemeProvider>
    );
};

export default App;
