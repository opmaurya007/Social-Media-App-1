import React from "react";
import "./App.css";

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
  Store,
  Title,
  Vendor,
} from "./Component";

function App() {
  const data = [
    {
      title: "Create Your Account",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry.",
      imageUrl: "./images/account.png",
    },
    {
      title: "Add Your Services",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry.",
      imageUrl: "./images/service.png",
    },
    {
      title: "Add Your Services",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry.",
      imageUrl: "./images/start4.png",
    },
  ];

  const featureData = [
    {
      iconName: "coffee",
      title: "Powerful Admin & Vendor Dashboard",
      background: "",
      description:
        "Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of...",
    },
    {
      icon: "code",
      title: "Vendor Mobile Application",
      description:
        "Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of...",
    },
    {
      icon: "heart",
      title: "Subscription Plans",
      description:
        "Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of...",
    },
    {
      icon: "code",
      title: "Vendor Mobile Application",
      description:
        "Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of...",
    },
    {
      icon: "code",
      title: "Vendor Mobile Application",
      description:
        "Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of...",
    },
    {
      icon: "code",
      title: "Vendor Mobile Application",
      description:
        "Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of...",
    },
    {
      icon: "code",
      title: "Vendor Mobile Application",
      description:
        "Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of...",
    },
    {
      icon: "code",
      title: "Vendor Mobile Application",
      description:
        "Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of...",
    },
  ];

  const storeData = [
    {
      imageUrl: "../images/booking.png",
      title: "Create Your Account",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry.",
    },
    {
      title: "Add Your Services",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry.",
      imageUrl: "./images/sports.png",
    },
    {
      title: "Add Your Services",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry.",
      imageUrl: "./images/medical.png",
    },
    {
      title: "Add Your Services",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry.",
      imageUrl: "./images/public.png",
    },
    {
      title: "Add Your Services",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry.",
      imageUrl: "./images/events.png",
    },
  ];
  return (
    <>
      <div className="App">
        <Header />
        <div className="gradiant__bg">
          <Navbar />
          <Main />
        </div>
        <Title cardsData={data} />

        {/* <Feature feature1={featureData} /> */}

        <Store store1={storeData} />

        <Blog />

        <Plan />
        <Review />

        <Vendor />
        <Newsletter />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
