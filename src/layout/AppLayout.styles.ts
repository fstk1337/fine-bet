import styled from 'styled-components';
import logo from '@/assets/icons/logo.svg';

export const AppHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  background-color: #1b1b1b;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: 20px center;
  color: #ccff00;
  h1 {
    font-size: 36px;
    line-height: 40px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #ccff00;
    color: transparent;
    background-clip: text;
  }
`;

export const AppMain = styled.main`
  padding: 20px;
`;