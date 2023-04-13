import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const EventWrapper = styled.li`
  width: 100%;
  min-height: 70px;
  list-style: none;
`;

export const EventLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 70px;
  list-style: none;
  background: #e3e6d7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 10px 15px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #1b1b1b;
  text-decoration: none;
`;

export const EventHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
`;

export const EventContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Score = styled.div`
  font-size: 14px;
  line-height: 18px;
  position: absolute;
  text-align: center;
  width: calc(100% - 70px);
`;
