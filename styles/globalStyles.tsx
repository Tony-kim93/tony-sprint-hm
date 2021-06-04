import styled, { css } from 'styled-components';

interface ButtonProps {
  searchBtn?: any;
  filterBtn?: any;
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
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
