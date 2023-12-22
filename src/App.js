import { Route, Routes } from "react-router-dom";
import Misc from "./Components/Misc";
import Navigation from "./Components/Navigation";
import AboutPage from "./Pages/About";
import NewsPage from "./Pages/News";
import HomePage from "./Pages/Home";
import ClothesMalePage from "./Pages/ClothesMale";
import ClothesFemalePage from "./Pages/ClothesFemale";
import JewelryPage from "./Pages/Jewelry";

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/menswear" element={<ClothesMalePage />} />
        <Route path="/womenswear" element={<ClothesFemalePage />} />
        <Route path="/jewelry" element={<JewelryPage />} />
      </Routes>
      <Misc />
    </div>
  );
}

export default App;
