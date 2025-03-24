import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./Components/WatchPage";
import Maincontainer from "./Components/Maincontainer";
import SearchContainer from "./Components/SearchContainer";
import History from "./Components/History";

const appRouter =
  createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Maincontainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/search/watch",
          element: <WatchPage />,
        },
        {
          path: "/history/watch",
          element: <WatchPage />,
        },
        {
          path: "/search",
          element: <SearchContainer />,
        },
        {
          path: "/history",
          element: <History />,
        },
      ],
    }
  ]);

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <RouterProvider router={appRouter} ></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
