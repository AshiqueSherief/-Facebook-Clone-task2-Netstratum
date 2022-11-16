import { useState } from "react";
import Email from "../Compounents/Email";
import Password from "../Compounents/Password";
import "./App.css";

function App() {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const updatePassword = (e) => setPassword(e.target.value);
  // console.table({ email, password });

  const [data, setData] = useState({
    name: "",
    password: "",
  })

  let EPattern = /(^\w[a-zA-Z0-9.]{3,}[@][a-zA-Z0-9.]+[.][a-zA-Z]{1,4}$)/g
  let PPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/gm
  let resultMail = data.name.match(EPattern)
  let resultPass = data.password.match(PPattern)
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
  function update(e) {
    var temp = { ...data }
    temp[e.target.name] = e.target.value;
    setData(temp)
  }
  return (
    <div className="container">
      <img src="/logo.svg" alt="fb logo" className="container__log" />
      <div className="container__box">
        <p className="container__box--title">Log in to Facebook</p>
        <form onSubmit={submit}>

          {/* compounent Email */}
          <Email name="name" change={update} value={data.name} type="email" />
          <br />

          {/* compounent PAssword */}
          <Password name="password" change={update} value={data.password} />
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