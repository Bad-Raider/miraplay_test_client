import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {

    const { auth } = useSelector(state => state);

    return !auth.isLoggedIn ? children : <Navigate to='/games' />;
};

export default PublicRoute;