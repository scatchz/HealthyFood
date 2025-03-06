import { useState } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
// import { Index } from "./pages/Index/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Index />} /> */}
          {/* <Route path="/About" element={<About />} /> */}
        </Route>
        <Route path="*" element={<div>404 Not found</div>} />
        {/* <Route path="/Test" element={<Test />} /> */}
      </Routes>
    </div>
  );
}

export default App;
