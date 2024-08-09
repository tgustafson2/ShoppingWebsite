import HomePage from "./Components/HomePage";
import ShoppingPage from "./Components/ShoppingPage";
import App from "./App.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/shopping",
        element: <ShoppingPage />,
      },
    ],
    errorElement: <ErrorPage/>
  },
];

export default routes;
