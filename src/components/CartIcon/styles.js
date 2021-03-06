import styled from 'styled-components';
import { ReactComponent as ShoppingIconSvg } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-user-select: none;         
  -moz-user-select: none; 
  -ms-user-select: none;
  user-select: none;
`;

export const ShoppingIcon = styled(ShoppingIconSvg)`
  width: 24px;
  height: 24px;
`;

export const ItemCount = styled.span`
  width: 17px;
  height: 17px;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 11px;
  font-weight: bold;
  
  left: 25px;
  top: 25px;
  bottom: 12px;

  color: white;
  background-color: rgb(71, 71, 71);
  border-radius: 50%;
  border: solid 1px white;
`;
