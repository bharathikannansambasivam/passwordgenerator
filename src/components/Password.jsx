import React, { useState } from "react";
import lock from "../images/password.png";

import Strength from "./Strength";

function Password() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(true);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [copied, setCopied] = useState(false);
  const [tamilchar, setTamilchar] = useState(true);

  const [password, setPassword] = useState("Password");
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
    setPassword("enter valid number ");
  }

  const copytoclipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  return (
    <div className="flex bg-slate-300 justify-center h-screen flex-col items-center">
      <h1 className="text-3xl font-bold mb-2"></h1>
      <div className=" relative bg-slate-400 flex flex-col justify-center items-center rounded-md sm:w-6/12 sm:h-4/5  h-4/5 p-5  ">
        <h1 className="text-3xl font-bold mb-2 absolute top-0 md:top-3 lg:top-14">
          Password Generator
        </h1>
        <div className="">
          {" "}
          <img className="h-20 mb-5" src={lock} alt="Lock" />
        </div>
        <div className="mb-4">
          <label
            htmlFor="Num"
            className="block text-md font-medium text-gray-800"
          >
            Password Length:
          </label>
          <div className="flex items-center gap-3 justify-center ">
            <button
              className="   border border-solid border-blue-400 bg-blue-500 text-white rounded px-3 py-1  text-md font-bold   hover:bg-blue-600 "
              onClick={() => setLength(Math.max(length - 1, 0))}
            >
              -
            </button>
            <input
              className="border p-2 mr-2 w-16 text-center rounded-sm "
              type="number"
              value={length}
              onClick={() => setLength(Math.max(0))}
              onChange={(e) => setLength(parseInt(e.target.value))}
            />

            <button
              className=" border border-solid border-blue-400 bg-blue-500 text-white rounded px-3 py-1  text-md font-bold   hover:bg-blue-600"
              onClick={() => setLength(length + 1)}
            >
              +{" "}
            </button>

            <button
              className="border-2 hover:bg-green-500 bg-green-700 text-white hover:text-white border-green-700 px-4 py-2 rounded"
              onClick={generatePass}
            >
              Generate
            </button>
          </div>
        </div>
        <div className="w-72 flex  flex-col gap-2  ">
          <div className="flex  text-sm font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-lg  py-3 px-2">
            <input
              id="numbercheckbox"
              type="checkbox"
              checked={number}
              className="h-5 w-10"
              onChange={(e) => setNumber(e.target.checked)}
            />
            <label htmlFor="numbercheckbox" className="w-full ml-2 font-bold">
              Include Number
            </label>
          </div>

          <div className="flex  text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg  py-3 px-2">
            <input
              className="h-5 w-10"
              id="uppercaseCheckbox"
              type="checkbox"
              checked={upper}
              onChange={(e) => setUpper(e.target.checked)}
            />
            <label
              htmlFor="uppercaseCheckbox"
              className="w-full ml-2 font-bold"
            >
              Include Uppercase
            </label>
          </div>

          <div className="flex  text-sm font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-lg  py-3 px-2">
            <input
              className="h-5 w-10"
              id="Lowercase"
              type="checkbox"
              checked={lower}
              onChange={(e) => setLower(e.target.checked)}
            />
            <label htmlFor="Lowercase" className="w-full ml-2 font-bold">
              Include Lowercase
            </label>
          </div>

          <div className="flex  text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg  py-3 px-2">
            <input
              className="h-5 w-10"
              id="TamilLetter"
              type="checkbox"
              checked={tamilchar}
              onChange={(e) => setTamilchar(e.target.checked)}
            />
            <label htmlFor="TamilLetter" className="w-full ml-2 font-bold">
              Include Tamil Letters
            </label>
          </div>

          <div className="flex  text-sm font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-lg  py-3 px-2">
            <input
              className="h-5 w-10"
              id="symbol"
              type="checkbox"
              checked={symbol}
              onChange={(e) => setSymbol(e.target.checked)}
            />
            <label htmlFor="symbol" className="w-full ml-2 font-bold">
              Include Symbol
            </label>
          </div>
        </div>
        <div className=" mt-4 flex">
          <input
            className="border rounded-bl-md rounded-tl-md p-2 w-full font-mono italic
            "
            type="text"
            value={password}
            readOnly
          />
          <button
            className={`px-4 py-2 ${
              copied ? "bg-green-500" : "bg-blue-500"
            } text-white rounded`}
            onClick={copytoclipboard}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <Strength password={password} />
      </div>
    </div>
  );
}

export default Password;
