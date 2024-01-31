import React, { useState } from "react";
import "./App.css";
import styled, { keyframes } from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";

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
  const [someState, setSomeState] = useState(null);

  return (
    <div>
      
        <Header />
        <Hero />
        <CustomCursor />
    </div>
  );
}

export default App;
