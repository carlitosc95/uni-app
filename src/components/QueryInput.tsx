import { useState } from "react";
import { InputProps } from "../types";


function QueryInput({
  placeholder,
  onChangeCallback,
  name
}: InputProps): JSX.Element {
  const [inputData, setInputData] = useState<string>("");
  return (
    <>
      <input
        className="input join-item"
        value={inputData}
        type="text"
        onChange={(e) => {
          setInputData(e.target.value.toLocaleLowerCase());
          onChangeCallback({
            data: e.target.value.toLocaleLowerCase(),
            key: name,
          });
        }}
        placeholder={placeholder}
      />
    </>
  );
}

export default QueryInput;
