import React, { useState } from "react";
import "./Home.css";
import Carousel from "../../Components/Carasoul/Carousel";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Group_1 from "../../Components/Images/Group_1.png";
import features1 from "../../Components/Images/features1.png";
import FEATURES2 from "../../Components/Images/FEATURES2.png";
import features3 from "../../Components/Images/features3.png";
import features4 from "../../Components/Images/feature4.png";
import features5 from "../../Components/Images/Feature5.png";
import features6 from "../../Components/Images/feature6.png";
import Student from "../../Components/Images/Student.png";
import Destop from "../../Components/Images/Desktop.png";
import FaqComponent from "../../Components/Faq/Faq"; // Renamed to avoid conflict

function Home() {
  const [position, setPosition] = useState(2);

  const handlePrev = () => {
    setPosition((prev) => (prev === 1 ? 5 : prev - 1));
  };

  const handleNext = () => {
    setPosition((prev) => (prev === 5 ? 1 : prev + 1));
  };

  const content = {
    h1: "Manage & Monetize Your",
    p: "Launch your PAID SUBSCRIPTIONS, EVENTS, COURSES, PAYMENT PAGES, AND MANY MORE FOR YOUR AUDIENCE",
    p2: "name@email.com",
    btn: "Get notified",
  };

  const discover = {
    h5: "Discover",
    h1: "One App Technology: Your One-Stop Solution Platform",
    p: "One App Technology is a revolutionary platform that combines multiple functionalities into a single, user-friendly application, redefining convenience, efficiency, and accessibility.",
    p2: "Discover Ideas",
  };

  const about = {
    h5: "ABOUT",
    h1: "What is One App Technology?",
    p: "One App Technology is an all-in-one platform that integrates tools and services to streamline tasks for businesses, freelancers, and individuals.",
  };

  const feed = {
    h1: "What everyone says",
  };

  const featuresTitle = {
    h1: "The Features You Were Looking for",
  };

  const faqTitle = {
    h1: "Frequently Asked Questions",
  };

  const started = {
    h1: "Let's Get Started ...",
    p: "Walk a successful creator journey with OneApp. Like a pro! ✌",
    btn: "Get Started",
  };

  const slides = [
    {
      img: features1,
      name: "Integrated Services",
      occupation: "Manage tasks, invoicing, communication, and file sharing in one app for improved productivity.",
    },
    {
      img: FEATURES2,
      name: "Customizable Dashboards",
      occupation: "Personalize dashboards to prioritize tasks and stay focused.",
    },
    {
      img: features3,
      name: "Real-Time Collaboration",
      occupation: "Collaborate with teams via chat, file sharing, and project management tools.",
    },
    {
      img: features4,
      name: "Advanced Analytics",
      occupation: "Track progress, finances, and productivity with built-in analytics.",
    },
    {
      img: features5,
      name: "Secure Payment Processing",
      occupation: "Handle payments and invoicing securely within the app.",
    },
    {
      img: features6,
      name: "Mobile and Desktop Accessibility",
      occupation: "Access the app seamlessly on any device, anytime.",
    },
  ];

  return (
    <div>
      {/* Content Section */}
      <div className="Content">
        <div className="Content_Inner">
          <h1>
            {content.h1} <span className="org">Content</span>
          </h1>
          <p>{content.p}</p>
          <div className="Inner_Box">
            <p>{content.p2}</p>
            <div>{content.btn}</div>
          </div>
        </div>
        <div>
          <img className="Group_1" src={Group_1} alt="Group 1" />
        </div>
      </div>

      {/* Discover Section */}
      <div className="Discover">
        <div className="Discover_Inner">
          <h5 className="org dsc">{discover.h5}</h5>
          <h1>{discover.h1}</h1>
          <p>{discover.p}</p>
          <div className="Inner_Box_2">
            <p>{discover.p2}</p>
            <FaArrowRight />
          </div>
        </div>
        <div className="st_div">
          <img className="Student" src={Student} alt="Student" />
        </div>
      </div>

      {/* About Section */}
      <div className="About">
        <div className="About_Inner">
          <h5 className="org abt">{about.h5}</h5>
          <h1 className="abouth1">{about.h1}</h1>
          <p className="about_p">{about.p}</p>
        </div>
        <div>
          <img className="Destop" src={Destop} alt="Desktop" />
        </div>
      </div>

      {/* Feedback Section */}
      <div className="Feed">
        <div className="Feed_Inner">
          <h1>{feed.h1}</h1>
        </div>
        <div className="Controls">
          <FaArrowLeft className="Arrow" onClick={handlePrev} />
          <FaArrowRight className="Arrow" onClick={handleNext} />
        </div>
      </div>

      <div>
        <Carousel position={position} />
      </div>

      {/* Features Section */}
      <div>
        <h1 className="Features">{featuresTitle.h1}</h1>
        <div className="grid-container">
          {slides.map((slide, index) => (
            <div key={index} className="grid-item">
              <div className="feature">
                <img className="feature_img" src={slide.img} alt={slide.name} />
                <div className="usr_inner">
                  <h5 className="feature_name">{slide.name}</h5>
                  <p className="feature_p">{slide.occupation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <h1 className="faq_h1">{faqTitle.h1}</h1>
      <div className="Faq_outr">
        <FaqComponent />
      </div>

      {/* Get Started Section */}
      <div className="started">
        <div className="Started_main">
          <h1>{started.h1}</h1>
          <p>{started.p}</p>
          <div>{started.btn}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
