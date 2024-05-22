import Body from "./components/Body";
import { Provider } from "react-redux";
import AppStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./components/Browse";
import Login from "./components/Login";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body></Body>,
      children: [
        {
          path: "/",
          element: <Login></Login>,
        },
        {
          path: "browse",
          element: <Browse></Browse>,
        },
      ],
    },
  ]);
  return (
    <div>
      <Provider store={AppStore}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
