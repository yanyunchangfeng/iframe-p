import React, { FC, useEffect } from 'react';
import { GlobalStyle, WrapContainer } from 'src/index.style';

const App: FC = () => {
  useEffect(() => {
    const iframe = document.querySelector('iframe') as HTMLIFrameElement;
    const iframeWindow = iframe.contentWindow;
    iframeWindow?.addEventListener(
      'scroll',
      (e) => {
        console.log('scroll', e);
      },
      true
    );
  }, []);
  return (
    <>
      <GlobalStyle />
      <WrapContainer>
        <div>展开</div>
        <div className="container">
          <iframe src="https://yanyunchangfeng.github.io/web-stts/"></iframe>
        </div>
      </WrapContainer>
    </>
  );
};

export default App;
