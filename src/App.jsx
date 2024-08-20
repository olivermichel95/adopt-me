import React from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PetDetails from "./PetDetails"; // default export
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import PopupMessage from "./components/PopupMessage";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
// import AppStudy from "./AppStudy";

// import Pet from "./Pet";

/**
 * Dynamic routing:
 *  lama ykoon 3andy page lyha style sabet bs el content bta3ha bya5talef 3ala 7asab el resource el ana ba3melo show
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const popupState = useSelector((state) => state.popup);

  return (
    <div>
      {popupState?.show && (
        <PopupMessage type={popupState.type} message={popupState.message} />
      )}
      <BrowserRouter>
        <ErrorBoundary>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/details/:petId" element={<PetDetails />} />
              {/* <Route path="/test" element={<Test />} /> */}
            </Routes>
          </QueryClientProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
