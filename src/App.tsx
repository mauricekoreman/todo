import { FC, createContext } from "react";
import { Route, Routes } from "react-router-dom";

import About from "./pages/about/about.component";
import Home from "./pages/home/home.component";

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "Maurice",
    age: 23,
    country: "Netherlands",
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;

