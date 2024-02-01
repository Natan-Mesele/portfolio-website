import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Create a styled component with the animation
const AnimatedBackground = styled.div`
height: 100vh;
background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
`;

function App() {
  return (
    <div>
      <AnimatedBackground>
        <Header />
        <Hero />
      </AnimatedBackground>
    </div>
  );
}

export default App;
