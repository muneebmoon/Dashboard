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
import ForgotPassword from './pages/ForgotPassword';

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
    ForgotPassword,

    // Layouts
    AuthLayout,
    DashboardLayout,

    // Contexts
    AuthContext,

    // Routes
    AppRoutes
}

