import React from 'react';

function PasswordInput({ value, onChange }) {
  return (
    <div className="mb-4">
      <input
        type="password"
        placeholder="Password"
        value={value}
        onChange={onChange}
        className="w-full p-2 border"
      />
    </div>
  );
}

export default PasswordInput;
