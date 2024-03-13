import React, { useState } from "react";
import copy from "../images/copy.svg";
import tick from "../images/tick.svg";

import Strength from "./Strength";

function Password() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(true);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [copied, setCopied] = useState(false);
  const [tamilchar, setTamilchar] = useState(true);

  const [password, setPassword] = useState("PTx1f5DaFX");
  const [symbol, setSymbol] = useState(true);

  function generatePass() {
    setCopied(false);

    let charset = "";
    if (number) {
      charset += "0123456789";
    }
    if (upper) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lower) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (symbol) {
      charset += `!@#$%^&*()-=_+[]{}|;:'\,.<>?/"`;
    }
    if (tamilchar) {
      charset += "அஆஇஈஉஊஎஏஐஒஓகஃ";
    }
    let generatedPassword = "";

    for (let i = 1; i <= length; i++) {
      const random = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[random];
    }
    setPassword(generatedPassword);
  }
  if (password.length <= 0) {
    setPassword("enter value greater than 0 ");
  }

  const copytoclipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  return (
    <div className="flex bg-black justify-center h-screen flex-col items-center font-JetBrains ">
      <h1 className="text-xl text-slate-300 mb-2  top-0 md:top-3 lg:top-14 ">
        Password Generator
      </h1>{" "}
      <div
        className="bg-gray-600 flex  justify-center items-center px-3 p-2 
       text-2xl w-96 mb-2 "
      >
        {/* Search bar */}
        <div className=" ">
          <input
            className=" p-2 w-full text-white bg-gray-600
            "
            type="text"
            value={password}
            readOnly
          />
        </div>
        <div onClick={copytoclipboard} className="">
          <img src={copied ? tick : copy} alt="copy" />
        </div>
      </div>
      <div className="   bg-gray-600 flex flex-col justify-center items-center   p-3 w-96 ">
        {/* Check boxes */}
        <div className="mb-4 flex justify-between p-1 items-center w-full">
          <div>
            <label
              htmlFor="Num"
              className="block text-lg font-medium text-white"
            >
              Character Length{" "}
            </label>
          </div>
          <div>
            <input
              className="text-2xl font-bold p-2 mr-2 w-16 text-center rounded-sm text-green-300
              bg-transparent "
              type="number"
              value={length}
              onClick={() => setLength(Math.max(0))}
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className=" flex items-center  gap-3 justify-center   w-full">
          <input
            className=" w-full accent-green-500   "
            type="range"
            value={length}
            max={30}
            min={1}
            step={1}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className="w-72 flex text-slate-200  flex-col gap-2 mt-10 ">
          <div className="flex  ">
            <input
              className="   h-5 w-5 accent-green-600 scale-125 "
              id="uppercaseCheckbox"
              type="checkbox"
              checked={upper}
              onChange={(e) => setUpper(e.target.checked)}
            />
            <label htmlFor="uppercaseCheckbox" className="w-full ml-2">
              Include Uppercase Letters{" "}
            </label>
          </div>

          <div className="flex">
            <input
              className="  h-5 w-5 accent-green-600 scale-125 "
              id="Lowercase"
              type="checkbox"
              checked={lower}
              onChange={(e) => setLower(e.target.checked)}
            />
            <label htmlFor="Lowercase" className="w-full ml-2 font-bold">
              Include Lowercase Letters
            </label>
          </div>
          <div className="flex">
            <input
              id="numbercheckbox"
              type="checkbox"
              checked={number}
              className="  h-5 w-5 accent-green-600 scale-125 "
              onChange={(e) => setNumber(e.target.checked)}
            />
            <label htmlFor="numbercheckbox" className="w-full ml-2 font-bold">
              Include Numbers{" "}
            </label>
          </div>

          <div className="flex">
            <input
              className="  h-5 w-5 accent-green-600 scale-125 "
              id="symbol"
              type="checkbox"
              checked={symbol}
              onChange={(e) => setSymbol(e.target.checked)}
            />
            <label htmlFor="symbol" className="w-full ml-2 font-bold">
              Include Symbols{" "}
            </label>
          </div>
          <div className="flex">
            <input
              className="  h-5 w-5 accent-green-600 scale-125 "
              id="TamilLetter"
              type="checkbox"
              checked={tamilchar}
              onChange={(e) => setTamilchar(e.target.checked)}
            />
            <label htmlFor="TamilLetter" className="w-full ml-2 font-bold">
              Include Tamil Letters
            </label>
          </div>
        </div>

        <Strength password={password} />

        <button
          className="border-2 hover:bg-green-500 text-white hover:text-white border-green-700 px-4 py-2 rounded w-full mt-2"
          onClick={generatePass}
        >
          Generate -{">"}
        </button>
      </div>
    </div>
  );
}

export default Password;
