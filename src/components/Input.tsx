import React, { KeyboardEvent, ChangeEvent, ReactElement, FocusEvent } from 'react';

interface iProps {
  value?: number | string;
  maxLength?: number;
  type?: string;
  label?: string;
  autoComplete?: 'on' | 'off';
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  surfix?: ReactElement;
}

const Input: React.FC<iProps> = ({
  value = '',
  maxLength = 524,
  type = 'text',
  label,
  placeholder = '',
  autoComplete = 'on',
  onChange,
  onKeyDown,
  onBlur,
  onFocus,
  surfix,
}) => {
  return (
    <div className="card-input">
      {label && <label className="card-input__label">{label}</label>}
      <input
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type={type}
        placeholder={placeholder}
        className="card-input__input"
        autoComplete={autoComplete}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {surfix}
    </div>
  );
};

export default Input;
