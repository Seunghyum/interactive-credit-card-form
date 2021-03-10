import React, { ChangeEvent } from 'react';

interface iProps {
  options: { label: string | number; value: string | number }[];
  defaultValue?: string | number;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<iProps> = ({ options = [], placeholder = '', defaultValue, onChange }) => {
  return (
    <select value={defaultValue} className="card-input__input -select" onChange={onChange}>
      {placeholder && (
        <option value={defaultValue} disabled selected>
          {placeholder}
        </option>
      )}
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
