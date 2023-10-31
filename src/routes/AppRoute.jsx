import Home from "../pages/Home/Home";
import { Routes, Route } from 'react-router-dom'
import Layout from "../components/Layout/Layout";



const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
