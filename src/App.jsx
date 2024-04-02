import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import Home from "./componets/Home/Home";
import Products from "./componets/Products/Products";
import Shop from "./componets/shop/Shop";
import Contact from "./componets/Contact/Contact";
// import User from "./componets/user/User";

// import Enter from "./componets/Enter/enter";
// import Enter from "./componets/Enter/enter";

function App() {
  return (
    <div className="App">
      {/* <Enter /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/user" element={<User />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
