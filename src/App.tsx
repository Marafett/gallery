import React from "react";
import { Navbar } from "./components/Navbar";
import { GalleryPage } from "./pages/GalleryPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PicsumState } from "./context/PicsumState";

const App: React.FC = () => {
  return (
    <PicsumState>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route component={GalleryPage} path="/" exact />
            <Route component={FavoritesPage} path="/favorites" />
          </Switch>
        </div>
      </BrowserRouter>
    </PicsumState>
  );
};

export default App;
