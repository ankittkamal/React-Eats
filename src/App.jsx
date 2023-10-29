import { Provider } from "react-redux";
import appStore from "./store";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./ui/Header";
import { Footer } from "./ui/Footer";
import Error from "./ui/Error";
import ContactUs from "./ui/ContactUs";
import About from "./ui/About";
import RestaurantMenu from "./features/menu/RestaurantMenu";
import Cart from "./features/cart/Cart";
import Body from "./ui/Body";
import Signin from "./ui/Signin";
import ThanksForOrder from "./ui/ThanksForOrder";

function AppLayout() {
  return (
    <div className="flex flex-col items-center h-screen justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      { path: "/signin", element: <Signin /> },
      { path: "/cart", element: <Cart /> },
      { path: "restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/order", element: <ThanksForOrder /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
