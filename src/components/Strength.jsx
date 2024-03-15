import React from "react";

function Strength({ password }) {
  let strengthText;
  let strengthColor;
  let containerFill;
  let border = "1px solid white";
  if (password.length <= 5) {
    strengthText = "WEAK";
    strengthColor = "red";
    containerFill = "100%";
  } else if (password.length >= 6 && password.length <= 8) {
    strengthText = "MEDIUM";
    strengthColor = "yellow";
    containerFill = "100%";
  } else if (password.length > 8 && password.length <= 15) {
    strengthText = "STRONG";
    strengthColor = "lightgreen";
    containerFill = "100%";
  } else if (password.length > 15) {
    strengthText = "VERY STRONG";
    strengthColor = "green";
    containerFill = "100%";
  }

  const indicatorStyle = {
    backgroundColor: strengthColor,
    width: containerFill,
    border: border,
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-5 bg-gray-950 p-2 rounded max-w-80 min-w-80">
      <p className="text-lg text-slate-300">
        STRENGTH: <span className="font-extrabold text-xl">{strengthText}</span>{" "}
      </p>

      {password.length <= 5 && (
        <div className="h-10 w-10 flex justify-center gap-1 items-center  ">
          <div className="h-5 w-5" style={indicatorStyle}></div>
          <div className="h-5 w-6 border"></div>
          <div className="h-5 w-6 border"></div>
          <div className="h-5 w-6 border"></div>
        </div>
      )}
      {password.length >= 6 && password.length <= 8 && (
        <div className="h-10 w-10 flex  gap-1 justify-center items-center  ">
          <div className="h-5 w-5" style={indicatorStyle}></div>
          <div className="h-5 w-5" style={indicatorStyle}></div>
          <div className="h-5 w-8 border"></div>
          <div className="h-5 w-8 border"></div>
        </div>
      )}

      {password.length > 8 && password.length <= 15 && (
        <div className="h-10 w-10 flex gap-1 justify-center items-center ">
          <div className="w-6 h-5" style={indicatorStyle}></div>
          <div className="w-6 h-5" style={indicatorStyle}></div>
          <div className="w-6 h-5" style={indicatorStyle}></div>
          <div className="h-5 w-9 border"></div>
        </div>
      )}
      {password.length > 15 && (
        <div className="h-10 w-10 flex gap-1 justify-center items-center  ">
          <div className="w-6 h-5" style={indicatorStyle}></div>
          <div className="w-6 h-5" style={indicatorStyle}></div>
          <div className="w-6 h-5" style={indicatorStyle}></div>

          <div className="w-6 h-5" style={indicatorStyle}></div>
        </div>
      )}
    </div>
  );
}

export default Strength;
