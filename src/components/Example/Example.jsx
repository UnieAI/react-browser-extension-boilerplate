import React from 'react';
import styled from 'styled-components';
import Box from 'components/Box';
import Logo from 'assets/img/icon-128x128.png'

const Example = styled.div`
  color: ${props => props.theme.palette.primary};
  font-size: 20px;
  text-align: center;
`;

export default () => {
  // const greeting = chrome.i18n.getMessage('greeting');

  return (
    <Example>
      <Box display="flex" alignItems="center">
        {/* <img src={Logo} alt="logo" /> */}
        HealthcareGPT
      </Box>
    </Example>
  );
};
