import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typewriter = () => {
  return (
    <div className="w-full font-montserrat h-[120px] md:h-[160px]"> {/* Fixed height container */}
      <TypeAnimation
        sequence={[
          "my name is Omotunde-Young Qudus.",
          200,
          "I'm a Digital Strategist.",
          200,
          "I'm a Social Media Strategist.",
          200,
          "I'm a Performance Marketer.",
          200,
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