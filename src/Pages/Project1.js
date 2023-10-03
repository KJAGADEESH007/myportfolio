import React, { useEffect, useState } from "react";

import pimg1 from "../assets/images/vetcare1.jpg";
import pimg2 from "../assets/images/vetcare2.jpg";

import "./Project1.scss";

const Project1 = () => {
  const CarosalData = [
    {
      image: pimg1,
    },

    {
      image: pimg2,
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
      <h1>Veterinary Healthcare Android Application</h1>
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
          
        
          {/* <a href="https://todo-list54.netlify.app/">SEE DEMO</a> */}
          <h3> Description</h3>
          <p>
          The project is focused on the veterinary field. 
          If a customer(pet owner) wants to purchase 
          a veterinary product or medicine,
          the person may to visit the shop without knowing the availability of the product in the shop.
            It mainly contains three sections Customer, Doctor, and Owner. The customer contains the modules like the doctor, customer, and admin. The admin 
module is responsible for managing doctors and products. The doctor module is to handle the appointments and availability status of a doctor.   The customer module will have functionalities to buy veterinary products and book appointments

          </p>
          <h3> Key Features:</h3>
          <p>
          If a customer wants to get treatment for their 
animal, the customer has to visit the clinic and might wait in the queue to get treatment. 
So, to overcome these problems software is proposed, 
an Android application that will 
make the process easier. 
          </p>
          <p>
            Task Sorting: Tasks can be sorted based on their priority or due
            date, allowing users to focus on what matters most.
          </p>
          <p>
            User-Friendly Interface: The user interface is clean and
            user-friendly, ensuring a smooth and efficient task management
            experience.
          </p>
          <p>
            Responsive Design: The application is responsive and works
            seamlessly on various devices, including desktops, tablets, and
            mobile phones.
          </p>
          <p>
            Task Management: Users can easily add, edit, and delete tasks. Each
            task can have a title, description, due date, priority level, and
            status.
          </p>
          <h3> Skills and Technologies Used:</h3>
          <p>
          Java libraries ,FireBase Google
          </p>
         

        
        </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
