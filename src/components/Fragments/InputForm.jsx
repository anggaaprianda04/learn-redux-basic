import React from "react";
import Label from "../Utilities/Label";
import Input from "../Utilities/Input";

const InputForm = ({
  label,
  name,
  placeholder,
  type,
  refs,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1 my-4">
      <Label htmlFor={name}>{label}</Label>
      <Input
        onChange={onChange}
        value={value}
        refs={refs}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default InputForm;
