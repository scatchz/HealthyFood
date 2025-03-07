import { useState } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
// import { Main } from "./components/Main";
// import { Index } from "./pages/Index/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Index />} /> */}
          {/* <Route path="/Main" element={<Main />} /> */}
        </Route>
        <Route path="*" element={<div>404 Not found</div>} />
        {/* <Route path="/Test" element={<Test />} /> */}
      </Routes>
    </div>
  );
}

export default App;
