// import "./App.css";
// import ListingPage from "./Pages/ListingPage/components/ListingPage";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import DetailPage from "./Pages/DetailPage/components/DetailPage";

// const appRouter = createBrowserRouter([
//   { path: "/", element: <App /> },
//   { path: "/detail", element: <DetailPage /> },
// ]);
// function App() {
//   return (
//     <RouterProvider router={appRouter}>
//       <ListingPage />
//     </RouterProvider>
//   );
// }

// export default App;

import "./App.css";
import ListingPage from "./Pages/ListingPage/components/ListingPage";
import DetailPage from "./Pages/DetailPage/components/DetailPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Pages/Error/Error";

// Define the router first
const appRouter = createBrowserRouter([
  { path: "/", element: <ListingPage />, errorElement: <Error /> },
  { path: "/detail", element: <DetailPage /> },
]);

function App() {
  // Use the RouterProvider without additional components inside it
  return <RouterProvider router={appRouter} />;
}

export default App;
