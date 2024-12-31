import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typewriter = () => {
  return (
    <div className="w-full font-montserrat h-[120px] md:h-[160px]"> {/* Fixed height container */}
      <TypeAnimation
        sequence={[
          "my name is Omotunde-Young Qudus.",
          5000,
          "a Digital Strategist.",
          5000,
          "a Social Media Strategist.",
          5000,
          "a Performance Marketer.",
          5000,
        ]}
        wrapper="div"
        speed={50}
        repeat={Infinity}
        className="text-4xl lg:text-6xl"
        cursor={true}
        style={{
          display: 'inline-block',
          width: '100%',
        }}
      />
    </div>
  );
};

export default Typewriter;