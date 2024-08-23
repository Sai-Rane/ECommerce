import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ListingPage from "./Pages/ListingPage/components/ListingPage";

function App() {
  return (
    <BrowserRouter>
      <ListingPage />
    </BrowserRouter>
  );
}

export default App;
