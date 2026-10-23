import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-stack Engineer",
          "React · TypeScript · Laravel",
          "Healthcare & regulated platforms",
          "LLMs · AWS Bedrock · AI tooling",
          "APIs, cloud, and product ownership",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
