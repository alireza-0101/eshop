import Cart from "./pages/Cart/Cart"
import Categories from "./pages/Categories/Categories"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Product from "./pages/Product/Product"
import Register from "./pages/Register/Register"
import Shop from "./pages/Shop/Shop"

import Account from "./pages/Account/Main"
import AccountDashbord from "./pages/Account/Dashbord/Dashbord"
import SavedProducts from "./pages/Account/SavedProducts/SavedProducts"
import Chat from "./components/Chat/Chat"
import NowOrders from "./pages/Account/NowOrders/NowOrders"
import PreviousOrders from "./pages/Account/PreviousOrders/PreviousOrders"
import CanceledOrders from "./pages/Account/CanceledOrders/CanceledOrders"
import Settings from "./pages/Account/Settings/Settings"
import NotFound from "./pages/NotFound/NotFound"
import SuccessPay from "./pages/SuccessPay/SuccessPay"
import UnsuccessPay from "./pages/UnsuccessPay/UnsuccessPay"
import AboutUs from "./pages/AboutUs/AboutUs"

import Admin from "./pages/Admin/Main"
import AdminHome from "./pages/Admin/Home/Home"
import Products from "./pages/Admin/Products/Products"
import Orders from "./pages/Admin/Orders/Orders"
import Offs from "./pages/Admin/Offs/Offs"
import AdminCategories from "./pages/Admin/Categories/Categories"
import Support from "./pages/Admin/Support/Support"
import SupportChat from "./pages/Admin/SupportChat/SupportChat"
import Slider from "./pages/Admin/Slider/Slider"
import HeaderAlert from "./pages/Admin/HeaderAlert/HeaderAlert"
import Users from "./pages/Admin/Users/Users"
import AdminSettings from "./pages/Admin/Settings/Settings"

let routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/shop", element: <Shop /> },
  { path: "/cart", element: <Cart /> },
  { path: "/product/:link", element: <Product /> },
  { path: "/categories", element: <Categories /> },
  { path: "/you-pay-successfully", element: <SuccessPay /> },
  { path: "/you-pay-unsuccessfully", element: <UnsuccessPay /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "*", element: <NotFound /> },

  {
    path: "/account",
    element: <Account />,
    children: [
      { path: "", element: <AccountDashbord /> },
      { path: "saved-products", element: <SavedProducts /> },
      { path: "current-orders", element: <NowOrders /> },
      { path: "previous-orders", element: <PreviousOrders /> },
      { path: "canceled-orders", element: <CanceledOrders /> },
      { path: "support", element: <Chat /> },
      { path: "settings", element: <Settings /> },
    ],
  },

  {
    path: "/admin",
    element: <Admin />,
    children: [
      { path: "", element: <AdminHome /> },
      { path: "products", element: <Products /> },
      { path: "orders", element: <Orders /> },
      { path: "offs", element: <Offs /> },
      { path: "categories", element: <AdminCategories /> },
      { path: "support", element: <Support /> },
      { path: "support/:userID", element: <SupportChat /> },
      { path: "slider", element: <Slider /> },
      { path: "header-alert", element: <HeaderAlert /> },
      { path: "users", element: <Users /> },
      { path: "settings", element: <AdminSettings /> },
    ],
  },
]

export default routes
