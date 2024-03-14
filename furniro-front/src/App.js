import "./App.css";
import Cart from "./CartPage/Cart";
import Checkout from "./Checkoutpage/Checkout";
import Footer from "./Header-Footer/Footer";
import HeaderCom from "./Header-Footer/HeaderCom";
import Home from "./HomePage/HomeLayout/Home";
import ContactUs from "./ContactPage/ContactUs";


function App() {
  return (
    <div className="App" id="Appcontainer">
      <HeaderCom />
      {/* <Home /> */}
      {/* <Checkout /> */}
      {/* <Cart /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
