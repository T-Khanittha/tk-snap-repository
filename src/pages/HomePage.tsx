import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { CustomButton } from "../component/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import personImage from "../images/cat1.png";
const centerContentStyle: React.CSSProperties = {
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh", // This will make the content fill the full height of the viewport.
};

const initWelcomeText = "Welcome to TK Snap Repository";
const initDescText =
  "𝘙𝘰𝘴𝘦𝘴 𝘢𝘳𝘦 𝘳𝘦𝘥, 𝘝𝘪𝘰𝘭𝘦𝘵𝘴 𝘢𝘳𝘦 𝘣𝘭𝘶𝘦 𝘊𝘢𝘱𝘵𝘶𝘳𝘪𝘯𝘨 𝘮𝘦𝘮𝘰𝘳𝘪𝘦𝘴, 𝘰𝘯𝘦 𝘱𝘩𝘰𝘵𝘰 𝘢𝘵 𝘢 𝘵𝘪𝘮𝘦, 𝘪𝘵’𝘴 𝘵𝘳𝘶𝘦";
const typingSpeed = 50; // Adjust the typing speed (milliseconds per character)

function HomePage() {
  let navigate = useNavigate();
  const [welcomeText, setWelcomeText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [showAdditionalText, setShowAdditionalText] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (textIndex < initWelcomeText.length) {
        setWelcomeText((prevText) => prevText + initWelcomeText[textIndex]);
        setTextIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
        setShowAdditionalText(true);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [textIndex]);

  function navigateToGallery() {
    navigate("/gallery");
  }

  return (
    <div className="home-page" style={centerContentStyle}>
      {!showAdditionalText && (
        <Typography variant="h4" gutterBottom>
          {welcomeText}
        </Typography>
      )}
      {showAdditionalText && (
        <>
          <Typography variant="body1">{initDescText}</Typography>

          <img width="320" height="320" src={personImage} alt="Logo" />
          <CustomButton
            variant="outlined"
            onClick={navigateToGallery}
          >
            Click Me
          </CustomButton>
        </>
      )}
    </div>
  );
}

export default HomePage;
