import { Root } from "pages";
import React from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

async function renderApp(Component: React.FC) {
  const container = document.getElementById("app");

  if (container) {
    const root = createRoot(container);
    root.render(
      <BrowserRouter basename="/app">
        <title>React compiler demo</title>
        <Routes>
          <Route path="/*" element={<Component />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

renderApp(Root);
