import React from "react";
import "./aboutus.css"; // Import the CSS file
import Footer from "../../component/footer/Footer";
import { useNavigate } from "react-router-dom";


const AboutUs = () => {

  const Navigation = useNavigate();

  return (
    <>
    <div className="about-banner1">
    {/* Text Section */}
    <div className="about-banner1-text">
      <h2>About Us</h2>
    </div>
  </div>

    <div className="about-container1">
      {/* Text Section */}
      <div className="about-text">
        <h2>Devcave</h2>
        <p>
          We SEE A BRIGHTER WAY <sup> SM </sup> forward for our clients, our people,
          our planet, and our communities. By combining innovative technology
          with world-renowned expertise, we’re unveiling opportunities that
          create a brighter future for all.
        </p>
      </div>
      <div className="about-image">
        <img
          src="https://jll-global-gdim-res.cloudinary.com/image/upload/t_olm-image-optimization/v1707395509/2024-02/jll-about-us-desktop-new.png"
          alt="About Us"
        />
      </div>       
      </div>

      <div className="container4">
      {/* Left: Embedded YouTube Video */}
      <div className="video-container4">
        <iframe
          width="560"
          height="315"
          src="https://youtu.be/OkpIoEC44kk?si=LcpBr68aqTCIdeDU" // Replace VIDEO_ID with your YouTube video ID
          title="See A Brighter Way"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="text-container4">
        <h1 className="title3">SEE A BRIGHTER WAY</h1>
        <p className="description3">
          There’s the conventional way of doing things. And then, there’s the
          Dev way. A more innovative, intelligent, and human way. Find out how
          you can <strong>SEE A BRIGHTER WAY</strong> with DevCave.
        </p>
      </div>
    </div>
    <div className="about-container3">
      <div className="about-content">
        <h2>About Devcave Homes:</h2>
        <p>
          Devcave Homes enable prospective home buyers to choose from an array of
          residential projects offered by eminent developers with luxurious
          amenities that cater to your requirement. At Devcave Homes, we focus on
          providing an exceptional experience to our prospective homebuyers. As
          a result, our highly qualified and seasoned professionals assist
          homebuyers where they identify their needs and provide research-backed
          advice making the home-buying process seamless and effortless by
          avoiding irrelevant information and multiple calls from multiple
          sources.
        </p>
        <button className="learn-more-btn" onClick={()=>{
        Navigation("/contact")
        }}>Learn more</button>
      </div>
      <div className="about-image3">
        <img src="https://jll-global-gdim-res.cloudinary.com/image/upload/t_olm-image-optimization/v1707290687/2024-02/jll-about-us-desktop.jpg" alt="JLL Homes Office" />
      </div>
    </div>
    
    <Footer/>
    </>
  );
};

export default AboutUs;
