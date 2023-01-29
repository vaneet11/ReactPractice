import { Navigate } from 'react-router-dom';
import Login from '../Component/Login';
import Dashboard from '../Pages/Dashboard/Dashboard';
import ProductDetail from '../Pages/Products/ProductDetail';
import Products from '../Pages/Products/Products';
import TodoDetails from '../Pages/Todo/TodoDetails';
import TodoList from '../Pages/Todo/TodoList';
import DashboardLayout from '../Layout/DashboardLayout';
import LoginLayout from '../Layout/LoginLayout';
import ProductLayout from '../Layout/ProductLayout';
import TodoLayout from '../Layout/TodoLayout';
import Cart from '../Pages/Products/Cart';

const router = [
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            { path: '/', element: <Navigate to='/login' /> },
            { path: 'login', element: <Login /> },
        ]
    },
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: '/dashboard', element: <Dashboard /> }
        ]
    },
    {
        path: '/todo',
        element: <TodoLayout />,
        children: [
            { path: '/todo', element: <TodoList /> },
            { path: '/todo/:id', element: <TodoDetails /> }
        ]
    },
    {
        path: '/products',
        element: <ProductLayout />,
        children: [
            { path: '/products', element: <Products /> },
            { path: '/products/:id', exact: true, element: <ProductDetail /> },
            { path: '/products/category/:category', element: <Products /> },
            { path: '/products/cart', element: <Cart /> }
        ]
    }

]

export default router;