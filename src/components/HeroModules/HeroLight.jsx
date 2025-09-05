import React from "react";

export default function HeroLight() {
  return (
    <>
      <spotLight
        position={[5, 4, 6]}
        angle={2}
        penumbra={4}
        intensity={800}
        color="white"
      />
    </>
  );
}
