import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";
import DetailsView from "./components/DetailsView";
import NotFound from "./components/NotFound";
import BookList from "./components/BookList";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/books">
          <Route index element={<BookList/>}/>
          <Route path=":bookId" element={<DetailsView/>}/>
        </Route>
        <Route path="/demo" element={<h1>Demo</h1>} />
        <Route path="/dynamic/:val" element={<DetailsView/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
);