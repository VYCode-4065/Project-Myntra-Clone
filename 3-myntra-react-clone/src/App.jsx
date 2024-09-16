import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Fetch from "./components/Fetch";
import { useSelector } from "react-redux";
import LoadingSpinner from "./components/LoadingSpinner";
function App() {
  const fetchData = useSelector((store) => store.fetching);
  return (
    <>
      <Header />
      <Fetch />
      {fetchData.fetchingInit ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
