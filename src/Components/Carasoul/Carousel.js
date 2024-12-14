import React from "react";
import User_1 from"../Images/Usewr_1.png"
import User_2 from "../Images/User_2.png"
import User_3 from "../Images/User_3.png"
import "./Carousel.css";

const Carousel = ({ position }) => {
    const slides = [
        {
            img: User_1,
            name: "Hellen JUmmy",
            occupation: "Financial Counsoler",
            testimonial: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
        },
        {
            img: User_2,
            name: "Michael John",
            occupation: "Cybersecurity Engineer",
            testimonial: "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor..",
        },
        {
            img: User_3,
            name: "Mikayla Eddie",
            occupation: "Software Engineer",
            testimonial: "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
        },
        {
            img: "./images/4.jpg",
            name: "Eve Smith",
            occupation: "UI/UX Designer",
            testimonial: "Sapien, sollicitudin et vitae id et laoreet sapien consectetur. Felis egestas egestas amet aliquam sit euismod. Pellentesque neque, sed ut volutpat. Ullamcorper in at nulla dignissim.",
        },
        {
            img: "./images/5.jpg",
            name: "Luke Maxwell",
            occupation: "System Architect",
            testimonial: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam hvodrm okfdwlv onzaq laoreet aenean metus nibh eu scelerisque.",
        },
    ];

    return (
        <main id="carousel">
            {slides.map((slide, index) => {
                const r = position - (index + 1);
                const abs = Math.abs(r);
                return (
                    <div
                        key={index}
                        className="item"
                        style={{
                            transform: `rotateY(${r * 0}deg) translateX(${r * -380}px)`,
                            zIndex: slides.length - abs,
                            opacity: abs > 2 ? 0 : 1,
                            transition: "all 0.25s linear",
                        }}
                    >

                        <p className="testimonial">{slide.testimonial}</p>
                        <div className="user">
                            <img src={slide.img} />
                            <div className="user_inner" style={{ backgroundColor: "white" }}>
                                <p className="stp">{slide.name}</p>
                                <p className="ndp">{slide.occupation}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </main>
    );
};

export default Carousel;
