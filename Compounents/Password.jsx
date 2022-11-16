import React from "react";

function Password(props) {
  const { name, type, change, value } = props;
  return (
    <div>
      <input
        type={type}
        className="container__box--input"
        placeholder="Password"
        onChange={change}
        value={value}
        name={name}
        required
      />
    </div>
  );
}

export default Password;
