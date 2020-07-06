import styled from 'styled-components';

export const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  `;

export const CollectionItemContainer = styled.div`

  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  button {
    display: none;
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 256px;
  }

  &:hover {
    cursor: pointer;

    ${Image} {
      filter: opacity(0.8);
      transition: 0.3s;
    }

    button {
      display: inline;
    }
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;
