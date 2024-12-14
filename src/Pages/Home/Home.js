import React, { useState,useEffect } from "react";
import "./Home.css";
import Carousel from "../../Components/Carasoul/Carousel";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Group_1 from "../../Components/Images/Group_1.png";
import features1 from "../../Components/Images/features1.png";
import Usewr_1 from "../../Components/Images/Usewr_1.png"
import User_2 from "../../Components/Images/User_2.png"
import User_3 from "../../Components/Images/User_3.png"
// import Usewr_1 from "../../Components/Images/Usewr_1.png"
// import Usewr_1 from "../../Components/Images/Usewr_1.png"
// import Usewr_1 from "../../Components/Images/Usewr_1.png"

import FEATURES2 from "../../Components/Images/FEATURES2.png";
import features3 from "../../Components/Images/features3.png";
import features4 from "../../Components/Images/feature4.png";
import features5 from "../../Components/Images/Feature5.png";
import features6 from "../../Components/Images/feature6.png";
import Student from "../../Components/Images/Student.png";
import Destop from "../../Components/Images/Desktop.png";
import FaqComponent from "../../Components/Faq/Faq"; // Renamed to avoid conflict

function Home() {



  const slides = [
    {
      img: Usewr_1,
      testimonial: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      name: "Hellen Jummy",
      occupation: "Financial Counselor",
    },
    {
      testimonial: "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",

      img: User_2,
      name: "Ralph Edwards",
      occupation: "Math Teacher",
    },
    {
      testimonial: "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",

      img: User_3,
      name: "Hellena John",
      occupation: "Psychology Student",
    },
    {
      testimonial: "Sapien, sollicitudin et vitae id et laoreet sapien consectetur. Felis egestas egestas amet aliquam sit euismod. Pellentesque neque, sed ut volutpat. Ullamcorper in at nulla dignissim.",

      img: features4,
      name: "David Oshodi",
      occupation: "Manager",
    },
    {
      testimonial: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",

      img: features5,
      name: "Charolette Hanlin",
      occupation: "CEO",
    },

  ];
  const [position, setPosition] = useState(1);

  const handlePrev = () => {
    setPosition(prev => (prev === 1 ? slides.length : prev - 1));
  };

  const handleNext = () => {
    setPosition(prev => (prev === slides.length ? 1 : prev + 1));
  };


   // Auto-scroll logic

  //  useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPosition((prev) => (prev === slides.length ? 1 : prev + 1));
  //   }, 3000); 

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, [slides.length]);

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


  const features = [
    {
      img: features1,
      name: "Effortlessly monetize",
      occupation: "Your content by launching digital products like courses, webinars, and one-on-one sessions in no time.",
    },
    {

      img: FEATURES2,
      name: "Build and engage",
      occupation: "Your community through exclusive content and premium communication channels.",
    },
    {

      img: features3,
      name: "Gain valuable insights",
      occupation: "Into your revenue, engagement, and audience growth with real-time analytics.",
    },
    {

      img: features4,
      name: "Accept global payments",
      occupation: "With ease, enabling you to monetize your content from anywhere in the world.",
    },
    {

      img: features5,
      name: "Scale your success",
      occupation: "From a solo creator to a large community with flexible solutions that grow alongside you.",
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
        <Carousel position={position} slides={slides} onPrev={handlePrev} onNext={handleNext} />

      </div>

      {/* Features Section */}
      <div>
        <h1 className="Features">{featuresTitle.h1}</h1>
        <div className="grid-container">
          {features.map((slide, index) => (
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
