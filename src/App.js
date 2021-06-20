import "./styles.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Route from "./Route";
// import { Redirect, Route, Switch } from "react-router-dom";

export default function App() {
  //const fetchPathName = () => {
  // switch (window.location.pathname) {
  //   case "/":
  //     return <Home />;
  //   case "/about":
  //     return <About />;
  //   case "/service":
  //     return <Service />;
  //   case "/contact":
  //     return <Contact />;
  //   default:
  //     return <Home />;
  // }
  //};
  return (
    <>
      <Navbar />
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch> */}
      {/* {fetchPathName()} */}
      <Route pathname="/">
        <Home />
      </Route>
      <Route pathname="/service">
        <Service />
      </Route>
      <Route pathname="/about">
        <About />
      </Route>
      <Route pathname="/contact">
        <Contact />
      </Route>
      <Footer />
    </>
  );
}
