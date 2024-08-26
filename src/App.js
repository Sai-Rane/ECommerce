import "./App.css";
import ListingPage from "./Pages/ListingPage/components/ListingPage";
import DetailPage from "./Pages/DetailPage/components/DetailPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Pages/Error/Error";

// Define the router first
const appRouter = createBrowserRouter([
  { path: "/", element: <ListingPage />, errorElement: <Error /> },
  { path: "/detail/:prodId", element: <DetailPage /> },
]);

function App() {
  // Use the RouterProvider without additional components inside it
  return <RouterProvider router={appRouter} />;
}

export default App;
