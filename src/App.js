import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Services from "./Components/Services";

import "./Styles/header.scss";
import "./Styles/App.scss";
import "./Styles/home.scss";
import "./Styles/contact.scss";



function App() {
  return (
<Router>
  <Header />        {/* //header.jsx ka content */}
  
  <Routes>
    <Route path="/" element={<Home/>}/>  
    <Route path="/contact" element={<Contact/>}/>  
    <Route path="/services" element={<Services/>}/>  
  </Routes>

</Router>
    
  );
};

export default App;
