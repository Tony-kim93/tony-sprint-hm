import styled, { css } from 'styled-components';

interface ButtonProps {
  searchBtn?: any;
  filterBtn?: any;
  comeBackBtn?: any;
  viewerBtn?: any;
  likeBtn?: any;
  type?: any;
}

interface ImgProps {
  enjoyImg?: any;
  type?: any;
}

export const ImgStyle = styled.img<ImgProps>`
  ${(props) =>
    props.type === 'previewImg' &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 500px;
      height: 500px;
      border: 1px solid black;
    `}
`;

export const MainEngineButton = styled.button<ButtonProps>`
  width: 100px;
  height: 40px;
  font-size: 15px;
  ${(props) =>
    props.type === 'searchBtn' &&
    css`
      background-color: #35c5f0;

      &:hover {
        background-color: #09addb;
      }
    `}

  ${(props) =>
    props.type === 'filterBtn' &&
    css`
      background-color: #19ce60;
      margin-left: 30px;

      &:hover {
        background-color: #17bd59;
      }
    `}

    ${(props) =>
    props.type === 'comeBackBtn' &&
    css`
      background-color: tomato;
      color: #fff;
      margin-right: 30px;

      &:hover {
        background-color: #b15140;
      }
    `}

    ${(props) =>
    props.type === 'viewerBtn' &&
    css`
      background-color: #19ce60;
      color: #fff;
      margin-right: 30px;

      &:hover {
        background-color: #17bd59;
      }
    `}

    ${(props) =>
    props.type === 'likeBtn' &&
    css`
      /* width: 40px; */
      background-color: #00f2f2;
      color: #fff;
      margin-right: 30px;

      &:hover {
        background-color: #22bbbb;
      }
    `}

    ${(props) =>
    props.type === 'exitBtn' &&
    css`
      /* width: 40px; */
      background-color: peru;
      color: #fff;
      margin-right: 30px;

      &:hover {
        background-color: #a46c34;
      }
    `}
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000080;
  z-index: 100000;

  .modalContent {
    background-color: #fff;
    position: absolute;
    width: 900px;
    margin: 0 auto;
    height: 900px;
    border-radius: 10px;
    text-align: center;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  .hoverImg {
    position: absolute;
    display: none;
  }
  &:hover {
    .hoverImg {
      display: block;
      top: 0;
      right: 0;
    }
  }
`;

export const GridMainCard = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: auto auto auto auto auto;
  margin-top: 77px;
`;

export const GridLikeCard = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: auto auto auto auto;
  margin-top: 25px;
`;

export const ProfileWrapper = styled.div`
  max-width: 850px;
  margin: 0 auto;
`;

export const RegisterWrapper = styled.div`
  max-width: 850px;
  margin: 0 auto;
`;
