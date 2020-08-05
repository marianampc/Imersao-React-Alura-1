/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

//Colocamos os nomes trocado, no formato brasileiro com a escrita em inglês (meio confuso)
const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  {/*Essa tag abaixo está focada no Label.Text dentro da caixa do input, lemrando que começamos com o span.
    Também estamos programando o css à não aceitar mudanças quando for color*/}
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px); /*Essa é a animação do label mudar de tamanho*/
        }
      `;
  }
}
`;
/*const Input = styled.input`

`;Isso permite que possamos colocar o Input, assim fazendo funcionar o as="textarea".
  Depois foi substituido no início do doc.
*/
function FormField({
  label, type, name, value, onChange,
}) {
  const fieldID = `id_${name}`;
  
  const isTypeTextarea = type === 'textarea';
  const tag = isTypeTextarea ? 'textarea' : 'input';
  //Essa linha abaixo é a junção das duas acima.
  //const tag = type === 'textarea' ? 'textarea' : 'input';//Iremos colocar isso para que o input seja textarea somente quando a entrada também for.
  
  const hasValue = Boolean(value.length);
  
  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldID}
      >
        <Input
          as={tag}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
        />
        <Label.Text> {/*Essa teg foi colocada para ter uma facilidade na manutenção do estilo do texto, além de fazer aparecer a label dentro da caixa de escrita no início */}
          {label}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  types: 'text',
  valeu: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line max-len
  type: PropTypes.string, // Como esse comando não é obrigatório, significa que devemos estabelecer um valor deafault para ele.
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
