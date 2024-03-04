import React from "react";
import "./App.css";
// import "./Component/contactUs/Form";
import "bootstrap/dist/css/bootstrap.min.css";
// import storeData from "./Component/card/CardData.jsx";

import {
  Blog,
  ContactUs,
  Feature,
  Footer,
  Header,
  Main,
  Navbar,
  Newsletter,
  Plan,
  Review,
  // Store,
  Title,
  Vendor,
  // Card,
} from "./Component";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="gradiant__bg">
          <Navbar />
          <Main />
        </div>
        <Title />

        {/* <Feature feature1={featureData} /> */}

        {/* <Store store1={storeData} /> */}

        {/* <Blog /> */}

        {/* <Plan /> */}
        {/* <Review /> */}

        <Vendor />
        <Newsletter />
        <ContactUs />
        {/* <form /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
