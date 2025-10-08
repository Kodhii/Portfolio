import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Error from "./pages/404";
import Parcours from "./pages/Parcours";
import ProjectDetails from "./components/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop"; 

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="404" element={<Error />} />
          <Route path="*" element={<Error />} />
          <Route path="parcours" element={<Parcours />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
