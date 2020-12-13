import Head from 'next/head'
import { useEffect, useState } from 'react'
import Block from '../components/Block';

const elements = 3;
const elementW = (scrollbw) => `calc(100vw - ${scrollbw}px)`

export default function Home() {
  const [scrollbw, setScrollbw] = useState(0);

  useEffect( () => {
    require(['skrollr'], function(skrollr){
      skrollr.init();
    });
    //for scollbar cleanup
    const scrollbarWidth = window.innerWidth - document.querySelector("html>body").getBoundingClientRect().width;
    setScrollbw(scrollbarWidth)
  }, [])

  return <>
    <Head>
      <title>Horizontal Scroll Test</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <Block css={{overflow: "hidden", width: "100%"}}>
        Začátek
      </Block>
      <div css={{
        height:  (elements*1.2*100) + "vh",
        position: "relative"
      }} id="anchor">
        <div css={{ position: "sticky", width: "100%", height: "100vh", top: 0, overflow: "hidden" }} >
          <div 
            css={{ whiteSpace: "nowrap", width: `calc(${(elements-1)*100}vw)` }} 
            data-top="transform: translateX(0%);" 
            data-bottom="transform: translateX(-100%);" 
            data-anchor-target="#anchor"
          >
            <Block css={{ width: elementW(elementW) }}> Prvni </Block>
            <Block css={{ width: elementW(elementW) }}> Druhy </Block>
            <Block css={{ width: elementW(scrollbw) }}> Treti </Block>
          </div>
        </div>
      </div>
      <Block css={{overflow: "hidden", width: "100%"}}>
        Konec
      </Block>
    </div>
  </>
}
