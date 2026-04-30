import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";
import ProductDetail from "./pages/ProductDetail";
import { Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <>
    
       <Routes>
           <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
