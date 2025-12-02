import { Outlet } from "react-router";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header/>
      <h1>APP</h1>
      <Outlet/>
    </>
  );
}

export default App;
