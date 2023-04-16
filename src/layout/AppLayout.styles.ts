import styled from 'styled-components';
import logo from '@/assets/icons/logo.svg';
import { Link } from 'react-router-dom';

export const AppHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  background-color: #3c3333;
  color: #ccff00;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  h1 {
    font-size: 36px;
    line-height: 40px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #efffaf;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
  }
`;

export const AppMain = styled.main`
  padding: 20px;
`;

export const RootLink = styled(Link)`
  position: absolute;
  left: 20px;
  text-decoration: none;
`;

export const LogoImage = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${logo});
  background-repeat: no-repeat;
`;
