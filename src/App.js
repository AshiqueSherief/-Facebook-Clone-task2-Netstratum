import { useState } from "react";
import "./App.css";

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const updatePassword = (e) => setPassword(e.target.value);
  console.table({ email, password });

  let EPattern = /(^\w[a-zA-Z0-9.]{3,}[@][a-zA-Z0-9.]+[.][a-zA-Z]{1,4}$)/g
  let PPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/gm
  let resultMail = email.match(EPattern)
  let resultPass = password.match(PPattern)
  const [result, setResult] = useState("")

  const [s, setS] = useState({})

  const Validate = () => {
    if (resultMail == null || resultPass == null) {
      setResult("Invalid Email or Invalid Password")
      setS({ color: "red", size: "30px" })
    }
    else {
      setResult("Login Successfull")
      setS({ color: "green", size: "30px" })
    }
  }

  const submit = (b) => {
    b.preventDefault()
  }
  return (
    <div className="container">
      <img src="/logo.svg" alt="fb logo" className="container__log" />
      <div className="container__box">
        <p className="container__box--title">Log in to Facebook</p>
        <form onSubmit={submit}>
          <input
            type="email"
            className="container__box--input"
            placeholder="Email address or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            className="container__box--input"
            placeholder="Password"
            onChange={updatePassword}
            value={password}
            required
          />
          <button type="submit" onClick={Validate} className="container__box--button">
            Log in
          </button>
        </form>
        <div className="links">
          <a
            className="container__box--titles"
            href="https://www.facebook.com/"
          >
            Forgotten account?
          </a>
          .
          <a
            className="container__box--titles"
            href="https://www.facebook.com/"
          >
            Sign up for Facebook
          </a>
        </div>
        <br></br><br></br>
        <p style={s}>{result}</p>
      </div>
    </div>
  );
}

export default App;