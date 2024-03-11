import React from "react";
import "./App.css";
// import "./Component/contactUs/Form";
import "bootstrap/dist/css/bootstrap.min.css";
// import storeData from "./Component/card/CardData.jsx";
// import data from "./Component/card/CardData";

import {
  Blog,
  ContactUs,
  Feature,
  Footer,
  Header,
  Hero,
  Navbar,
  Newsletter,
  Plan,
  Review,
  Store,
  Title,
  Vendor,
  // Card,
} from "./Component";

const data = [
  {
    title: "Create Your Account",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry.",
    image: "./images/account.png",
  },
  {
    title: "Add Your Services",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry.",
    image: "./images/service.png",
  },
  {
    title: "Add Your Services",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry.",
    image: "./images/start4.png",
  },
];

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="gradiant__bg">
          <Navbar />
          <Hero />
        </div>
        <Title cardsData={data} />
        <Feature />
        <Plan />
        <Store />
        <Review />
        <Blog />
        <Vendor />
        <Newsletter />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
