import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import defaultTheme from 'themes/default';
import Chatbutton  from 'components/chat';


const root = document.createElement('div');
// root 加上 id : 'chrome-extension-root'
root.id = 'chrome-extension-root';
// root 加上 style
root.style.position = 'fixed';
root.style.bottom = '10px';
root.style.right= '-15px';
root.style.zIndex = '9999';
root.style.width = '100px';
root.style.height = '100px';
const shadow = root.attachShadow({ mode: 'open' });

const styleContainer = document.createElement('div');
const appContainer = document.createElement('div');

shadow.appendChild(styleContainer);
shadow.appendChild(appContainer);

// 在 body 的最前面插入 root
document.body.insertBefore(root, document.body.firstChild);

const App = () => {
  console.log('App render');

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <StyleSheetManager target={styleContainer}>
          <div style={{
            padding: '20px',
           position:'absolute',
           button: '3rem',
           right: '0',
          }}>
            <Chatbutton />
          </div>
        </StyleSheetManager>
      </ThemeProvider>
    </>
  );
};

ReactDOM.render(<App />, appContainer);
