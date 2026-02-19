// Assets
import logo from './assets/icons/logo.svg'
import layergroup from './assets/icons/layergroup.svg'
import grid from './assets/icons/grid.svg'
import Upload from './assets/icons/Upload.svg'
import usericon from './assets/icons/usericon.svg'
import cart from './assets/icons/cart.svg'
import shippingtruck from './assets/icons/shippingtruck.svg'
import creditcard from './assets/icons/creditcard.svg'
import Setting from './assets/icons/Setting.svg'
import Menu from './assets/icons/Menu.svg'
import notification from './assets/icons/notification.svg'
import avatar from './assets/images/avatar.png'



// Components

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Input from './components/Input';
import Button from './components/Button';

// Pages

import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from './pages/Dashboard/Products';
import Customers from './pages/Dashboard/Customers';
import Orders from './pages/Dashboard/Orders';
import Shippments from './pages/Dashboard/Shippments';
import Transactions from './pages/Dashboard/Transactions';
import Settings from './pages/Dashboard/Settings';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound';

// Layouts

import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";

// Contexts

import AuthContext from "./context/AuthContext/AuthContext";

// Routes

import AppRoutes from "./routes/AppRoutes";


export {
    // Assets
    logo,
    layergroup,
    grid,
    Upload,
    usericon,
    cart,
    shippingtruck,
    creditcard,
    Setting,
    Menu,
    notification,
    avatar,
    
    // Components
    NavBar,
    Footer,
    Input,
    Button,

    // Pages
    Login,
    SignUp,
    Dashboard,
    Products,
    Customers,
    Orders,
    Shippments,
    Transactions,
    Settings,
    ForgotPassword,
    NotFound,

    // Layouts
    AuthLayout,
    DashboardLayout,

    // Contexts
    AuthContext,

    // Routes
    AppRoutes
}

