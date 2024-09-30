import { useState } from "react";
import Iprops from "../interface/interface";
import validateInput from "../utils/validator";

export default function Input(props: Iprops) {
  const [error, setError] = useState("");
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const errorText = validateInput(e.target.value, props.validationRule);
    setError(errorText);
    props.onChangeText(e.target.value, Boolean(errorText), props.name);
  };

  return (
    <div className="w-full flex flex-col justify-between items-start pt-1 min-h-[87px]">
      <input
        className="w-full bg-white border-b-4 border-b-gray-300 text-gray-400 p-4"
        type={props.type}
        placeholder={props.placeholder}
        onChange={onInputChange}
      />
      {error && <p className="text-md font-semibold text-red-700">{error}</p>}
    </div>
  );
}
