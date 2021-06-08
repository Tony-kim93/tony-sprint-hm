import styled, { css } from 'styled-components';

interface ButtonProps {
  searchBtn?: any;
  filterBtn?: any;
  comeBackBtn?: any;
}

export const MainEngineButton = styled.button<ButtonProps>`
  width: 100px;
  height: 40px;
  font-size: 15px;
  ${(props) =>
    props.searchBtn &&
    css`
      background-color: #35c5f0;

      &:hover {
        background-color: #09addb;
      }
    `}

  ${(props) =>
    props.filterBtn &&
    css`
      background-color: #19ce60;

      &:hover {
        background-color: #17bd59;
      }
    `}

    ${(props) =>
    props.comeBackBtn &&
    css`
      background-color: tomato;
      color: #fff;

      &:hover {
        background-color: #b15140;
      }
    `}
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const GridMainCard = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: auto auto auto auto auto;
  margin-top: 77px;
`;
