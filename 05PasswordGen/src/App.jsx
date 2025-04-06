import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gradient-to-br from-gray-900 to-black border border-gray-700 shadow-2xl rounded-2xl px-6 py-6 text-orange-400 font-sans">
        <h1 className="text-white text-3xl font-bold text-center mb-6">
          🔐 Password Generator
        </h1>

        <div className="flex items-center rounded-lg overflow-hidden shadow-md mb-6 bg-gray-800 border border-gray-700">
          <input
            type="text"
            value={password}
            className="flex-grow py-3 px-4 text-lg text-white bg-gray-800 outline-none placeholder-gray-400"
            placeholder="Your Secure Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-5 py-3 font-semibold transition-all duration-200"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-5 text-sm">
          <div className="flex items-center justify-between">
            <label className="text-white font-medium">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="w-1/2 accent-orange-500 cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="numberInput" className="text-white font-medium">
              Include Numbers
            </label>
            <input
              type="checkbox"
              id="numberInput"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="accent-orange-500 w-5 h-5"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="characterInput" className="text-white font-medium">
              Include Special Characters
            </label>
            <input
              type="checkbox"
              id="characterInput"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="accent-orange-500 w-5 h-5"
            />
          </div>
        </div>

        <p className="text-center text-gray-500 mt-6 text-xs">
          Built with 💙 using React & Tailwind CSS
        </p>
      </div>
    </div>
  )
}

export default App
