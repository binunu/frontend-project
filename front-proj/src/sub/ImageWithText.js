import React, { useState } from "react";

const imageContainerStyle = {
  position: "relative",
  display: "inline-block",
};

const imageStyle = {
  display: "block",
  width: "270px",
  height: "360px",
  borderRadius: "10px 10px 0px 0px",
  overflow: "hidden",
};

const textStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  width: "100%",
  height: "100%",
  color: "white",
  fontSize: "20px",
  borderRadius: "4px",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

function ImageWithText(props) {
  const { imageUrl, propsText } = props;
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="image-container"
      style={imageContainerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <div style={{backgroundImage:`${imageUrl}`, imageStyle}}></div> */}
      <img src={imageUrl} alt="이미지" className="image" style={imageStyle} />
      {isHovering && (
        <div className="text" style={textStyle}>
          {propsText}
        </div>
      )}
    </div>
  );
}

export default ImageWithText;
