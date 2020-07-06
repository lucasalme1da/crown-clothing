import styled, { css } from 'styled-components';

const colors = {
  subColor: 'grey',
  mainColor: 'black',
};

const shrinkLabel = css`
  top: -14px;
  font-size: 14px;
  color: ${colors.mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background-color: white;
  background: none;
  color: ${colors.subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${colors.subColor};
  margin: 25px 0;
  
  &:focus {
    outline: none;
  }
  
  &:focus ~ label {
    ${shrinkLabel}
  }
`;

export const FormInputLabel = styled.label`
    color: ${colors.subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
  
    &.shrink {
      ${shrinkLabel};
    }
`;
