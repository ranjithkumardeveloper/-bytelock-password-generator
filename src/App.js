import React from "react";

// components
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import PasswordGenerate from "./component/PasswordGenerate";
import Strong from "./component/Strong";
import WhatIsStrongPassword from "./component/WhatIsStrongPassword";
import UniqueStrongPassword from "./component/UniqueStrongPassword";
import StrongPasswordHacked from "./component/StrongPasswordHacked";
import WhyUsePasswordGenerator from "./component/WhyUsePasswordGenerator";
import Footer from "./component/Footer";
import FAQSection from "./component/FAQSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PasswordGenerate />
      <Strong />
      <WhatIsStrongPassword />
      <UniqueStrongPassword />
      <StrongPasswordHacked />
      <WhyUsePasswordGenerator />
      <FAQSection />
      <Footer />
    </>
  );
}

export default App;
