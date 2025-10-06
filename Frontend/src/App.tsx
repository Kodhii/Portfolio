import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home"
import CV from "./pages/CV";
import Error from "./pages/404";
import Parcours from "./pages/Parcours";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="cv" element={<CV />} />
        <Route path="parcours" element={<Parcours/>}/>
      </Route>
    </Routes>
  );
}

export default App;