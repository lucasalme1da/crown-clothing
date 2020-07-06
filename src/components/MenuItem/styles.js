import styled from 'styled-components';

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.imageUrl});
  `;

export const ContentContainer = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
  `;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${props => props.size === 'large' ? '380px' : '240px'};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    ${BackgroundImageContainer} {
      transform: scale(1.1);
      filter: blur(3px);
      -webkit-filter: blur(3px);
      transition: 5s cubic-bezier(0.25,0.45,0.45,0.95);
    }

    ${ContentContainer} {
      opacity: 0.9;
      transition: .5s;
    }
  }
`;


export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  line-height: 10px;
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
