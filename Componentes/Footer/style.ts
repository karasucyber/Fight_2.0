import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: black;
  height: 100%;
  width: 100%;
`;

export const Column = styled.div`
  flex: 1;
  padding: 10px;
  
  font-size: 10px;
  color: white
`;