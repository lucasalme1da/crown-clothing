import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  height: 100%;
  width: 200px;
  padding: 25px;
  align-items: center;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  h1 {
      margin-left: 10px;
      font-size: 15px;
      line-height: 0;
      font-weight: 300;
      display: flex;
      align-items: center;
      margin-right: 20px;
      cursor: auto;
      p {
        margin-left: 20px;
      }
    }
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  padding: 10px 15px;
`;