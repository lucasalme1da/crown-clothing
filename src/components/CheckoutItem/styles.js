import styled, { css } from 'styled-components';

const SpansWidth = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.span`
  ${SpansWidth}
`;

export const Quantity = styled.span`
  padding-left: 25px;
  display: flex;
  ${SpansWidth}
`;

export const Arrow = styled.div`
  cursor: pointer;
  -webkit-user-select: none;         
  -moz-user-select: none; 
  -ms-user-select: none;
  user-select: none;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const Price = styled.span`
  margin-left: 30px;
  ${SpansWidth}
`;

export const RemoveButton = styled.div`
  cursor: pointer;
`;
