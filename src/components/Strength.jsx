import React from "react";

function Strength({ password }) {
  let strengthText = "Weak";
  let strengthColor = "red";

  if (password.length > 5 && password.length <= 8) {
    strengthText = "Normal";
    strengthColor = "yellow";
  } else if (password.length > 8) {
    strengthText = "Strong";
    strengthColor = "green";
  }

  const style = {
    color: strengthColor,
  };
  const indicatorStyle = {
    backgroundColor: strengthColor,
  };
  return (
    <div className="flex justify-center items-center gap-2 mt-5">
      <div className="h-10 w-10 rounded-full" style={indicatorStyle}></div>
      <p className="text-xl">
        Password Strength:{" "}
        <span className="font-extrabold text-xl">{strengthText}</span>{" "}
      </p>
    </div>
  );
}

export default Strength;
