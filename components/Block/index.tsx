import styled from "@emotion/styled";
import { FC, ReactElement } from "react";

const InnerBlock = styled.div({
    background: "linear-gradient(to right, #c21500, #ffc500)",
    width: "70%",
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2em",
    fontWeight: 900,
})



const Block: FC = ({ children,...rest  }):ReactElement =>{

    return <>
        <div 
            css={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "100vh "
            }}
            {...rest}
        >
            <InnerBlock>
                {children}
            </InnerBlock>
        </div>
    </>;
}

export default Block;