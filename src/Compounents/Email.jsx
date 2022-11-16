import React from "react";

function Email(props) {
  return (
    <div>
      <input
        name={props.name}
        type={props.type}
        className="container__box--input"
        placeholder="Email address or phone number"
        value={props.value}
        onChange={props.change}
        required
      />
    </div>
  );
}

export default Email;
