import React, { FC, useEffect } from 'react';
import { GlobalStyle, WrapContainer } from 'src/index.style';

const App: FC = () => {
  useEffect(() => {
    const iframe = document.querySelector('iframe') as HTMLIFrameElement;

    iframe.addEventListener('load', () => {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow!.document;
      const handleChildLoad = () => {
        console.log('子iframe 加载完成');
        const childIframeDoc = childIframe!.contentDocument || childIframe!.contentWindow!.document;
        childIframeDoc.addEventListener('scroll', onChildScroll);
      };
      const onChildScroll = () => {
        console.log('子iframe 内部滚动事件触发');
      };
      // 绑定滚动事件
      const childIframe = iframeDoc.querySelector('iframe') as HTMLIFrameElement;
      if (childIframe) {
        if (childIframe.contentDocument?.readyState === 'complete') {
          // 如果已经加载完成，直接执行
          handleChildLoad();
        } else {
          // 尚未加载，绑定 load 事件
          childIframe.addEventListener('load', handleChildLoad);
        }
      }
      iframeDoc.addEventListener('scroll', function () {
        console.log('父iframe 内部滚动事件触发');
      });
    });
  }, []);
  return (
    <>
      <GlobalStyle />
      <WrapContainer>
        <div>展开/收缩</div>
        <div className="container">
          <iframe src={'https://yanyunchangfeng.github.io/web-stts/'} width="100%"></iframe>
        </div>
      </WrapContainer>
    </>
  );
};

export default App;
