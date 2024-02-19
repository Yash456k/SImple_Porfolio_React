import { useState } from "react";
import "./App.css";
import Explore from "./Explore";
import Feature from "./Feature";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Technology from "./Technology";
import Sidebar from "./Sidebar";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Sidebar open={open} />
      <Header setOpen={setOpen} />
      <Hero />
      <Feature />
      <Technology />
      <Explore />

      <Footer />
    </div>
  );
}

export default App;
