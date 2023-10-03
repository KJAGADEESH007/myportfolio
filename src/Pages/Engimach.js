import React, { useEffect, useState } from "react";
import valuturapk from "../assets/Vaultur_apk.apk";
import engimach1 from "../assets/images/engimach1.JPEG";
import engimach2 from "../assets/images/valutor2.JPEG";
import { Button } from "@mui/material";
import "./Project1.scss";

const Engimach = () => {
  const CarosalData = [
    {
      image: engimach1,
    },

    {
      image: engimach2,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex(
      activeIndex === 0 ? CarosalData.length - 1 : activeIndex - 1
    );
  };
  useEffect(() => {
    const nextSlideIntervalId = setInterval(() => {
      prevSlide();
    }, 3000);

    return () => clearInterval(nextSlideIntervalId);
  }, [activeIndex]);
  return (
    <div>
      <h1>VALUTR Trade Mobile Application</h1>
      <div className="pro1">
        <div className="pro01">
          <div className="caroasalImg2">
            <img
              src={CarosalData[activeIndex]?.image}
              alt="ecommerce"
              className="image"
            />
          </div>
        </div>
      </div>
      <div className="proc">
        <div className="proc1">
          <div className="proc01">
            <h2>SKILLS : Flutter Framework,Dart Language</h2>
            <a href={valuturapk} download="ValuturAPK">
            <Button>Downlaod Apk</Button>
          </a>
            <h3> Description</h3>
            <p>
            Android application and an IOS mobile Application which 
            is used for trade of Ethax coin and user friendly Application 
            for Crypto Trading. 
            </p>
            <h3> Key Features:</h3>
            <p>
            The proposed system is for an Android Mobile Application and IOS
            Mobile Application, for Trading Crypto coins like Ethax, Bitcoin, Vaultur coin, ADA coin,
            and integrated a user-friendly UI so that users can get quick enhance on the growth and
            downfall of the coin.

            User has access to know his Portfolio, Total Portfolio Value, Proper display of each Token 
            (Share, Change, Price, Amount)

           ● Wise Trade
           * Buy/Sell
           * Recurring Buy
           * Grid Bot

           ● Auto Trading
           1. Active Trading
           2. In-Active Trading

           User Exchange:
           ❖ Balance
           ❖ Total Profit
           ❖ USD/BTC

            ♦ Radar
            ♦ Fear And Greed Index
            ♦ Bisson Crypto Radar
            ♦ Strategy
            1. Algorithm
            2. Symbols

            ♦ Administration
            ♦ Token Variance
            ♦ Paper Trading Balance
            ♦ Settings
            ♦ Marketplace
            1. (I.e., Platinum, Gold, Bear Beater, Bronze, Super Scalper etc.
            </p>
            <p>
              Flutter Framework: Flutter is an open source framework by Google
               for building beautiful, natively compiled, multi-platform applications 
               from a single codebase.

            </p>
          
  
            <p>
              User Authentication and Authorization: Security was a critical
              aspect of the project. I worked on user authentication and
              authorization, ensuring that only authorized users could access
              specific features and data.{" "}
            </p>
            <h3> Challenges and Achievements:</h3>
            <p>
              During my internship, I encountered and successfully overcame
              various challenges, such as optimizing the application for
              performance, ensuring data security, and handling real-time
              updates effectively. My contributions to VALUTR played a pivotal
              role in delivering a high-quality product that met the company's
              requirements and exceeded client expectations.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Engimach;
