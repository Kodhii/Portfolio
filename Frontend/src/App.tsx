import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home"
import CV from "./pages/CV";
import Error from "./pages/404";
import Parcours from "./pages/Parcours";
import ProjectDetails from "./components/ProjectDetails";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="cv" element={<CV />} />
        <Route path="parcours" element={<Parcours/>}/>
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Route>
    </Routes>
  );
}

export default App;