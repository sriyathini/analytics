
import Homesec from "../pages/Homesec";
import Login from "../pages/Login";
import Products from "../pages/Products";
import About from "./About";
import Pages from "./Pages";


function Home(){
  return(
    <div>
      <Homesec />
      <About />
      <Pages />
      <Products />
      <Login />
    </div>
    );

}
export default Home;