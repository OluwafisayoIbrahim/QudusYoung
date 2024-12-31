import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typewriter = () => {
  return (
    <div className="w-full">
      <TypeAnimation
        sequence={[
          "my name is Omotunde-Young Qudus.",
          5000,
          "I am a Digital Strategist.",
          5000,
          "I am a Social Media Strategist.",
          5000,
          "I am a Performance Marketer.",
          5000,
        ]}
        wrapper="div"
        speed={50}
        repeat={Infinity}
        className="text-4xl lg:text-6xl"
        cursor={true}
        style={{
          display: 'inline-block',
          whiteSpace: 'pre-line',
          minHeight: '2.5em',
          width: '100%',
          fontFamily: "font-montserrat",
          marginTop: "7px",
        }}
      />
    </div>
  );
};

export default Typewriter;