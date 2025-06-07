import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (charAllowed) str += "!@#$%^&*()_+=-{}[]~`";
    if (numberAllowed) str += "0123456789";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    password.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto bg-black text-white p-6 rounded-2xl shadow-2xl my-10">
      <h1 className="text-2xl font-bold text-center mb-6">
        Password Generator
      </h1>

      <div className="flex rounded-lg overflow-hidden mb-6 border border-gray-600">
        <input
          type="text"
          value={password}
          readOnly
          ref={passwordRef}
          className="flex-grow px-4 py-2 bg-black text-white outline-none"
          placeholder="Generated Password"
        />
        <button
          onClick={copyPasswordToClipBoard}
          className="bg-blue-600 hover:bg-blue-700 px-4 text-white transition"
        >
          Copy
        </button>
      </div>

      <div className="space-y-4 text-sm">
        <div className="flex items-center justify-between">
          <label htmlFor="lengthRange" className="font-medium">
            Length: {length}
          </label>
          <input
            id="lengthRange"
            type="range"
            min={6}
            max={100}
            value={length}
            className="w-2/3 accent-blue-500"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            id="numberInput"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="accent-blue-500"
          />
          <label htmlFor="numberInput" className="cursor-pointer">
            Include Numbers
          </label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            id="characterInput"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className="accent-blue-500"
          />
          <label htmlFor="characterInput" className="cursor-pointer">
            Include Special Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
