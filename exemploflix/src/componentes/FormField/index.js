import React from 'react';

function FormField({ label, type, name, value, onChange }) {
  const fieldID = `id_${name}`;
  return (
    <div>
      <label
        htmlFor={fieldID}
      >
        {label}: 
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange} //O onChage dentro da função do onChange é um componente não inteligente. Pois nesse componente ele não sabe a função que está entrando.
        />
      </label>
    </div>
  )
}

export default FormField;