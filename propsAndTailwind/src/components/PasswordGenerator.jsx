import React, { useEffect } from "react";
import { useState, useCallback, useRef } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [isNumericAllowed, setisNumericAllowed] = useState(false);
  const [isCharAllowed, setisCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let special = "!@#$%^&*()_+";
    if (isCharAllowed) {
      str += special;
    }
    if (isNumericAllowed) {
      str += num;
    }
    for (let i = 0; i < length; i++) {
      password += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(password);
  }, [length, isNumericAllowed, isCharAllowed, setPassword]);

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(passwordRef.current.value);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumericAllowed, isCharAllowed, setPassword]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyToClipBoard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isNumericAllowed}
            id="numberInput"
            onChange={() => {
              setisNumericAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="characterInput"
            defaultChecked={isCharAllowed}
            onChange={() => {
              setisCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
