import "./App.css";
import "./catagories.styles.scss";
import HomeComponent from "./components/routes/home/home.component";
import {Route, Routes} from "react-router";
import NavBarComponent from "./components/routes/nav-bar/nav-bar.component";
import AuthenticationComponent from "./components/routes/authentication/authentication.component";
import ShopComponent from "./components/routes/shop/shop.component";
import CheckoutComponent from "./components/checkout/checkout.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBarComponent/>}>
        <Route index element={<HomeComponent/>}/>
        <Route path="sign-in" element={<AuthenticationComponent/>}/>
        <Route path="shop" element={<ShopComponent/>}/>
        <Route path="checkout" element={<CheckoutComponent/>}/>
      </Route>
    </Routes>
  );
}

export default App;
