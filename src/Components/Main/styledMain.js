import styled from "styled-components";
import Usuario from "./Usuario/Usuario";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-height: 100%;
    background-color: #f1f4f7;
`


// export const EstiloInterlocutor = styled.div`
//     min-width: 80px;
//     max-width: 310px;
//     border-radius: 10px;
//     padding: 8px;
//     margin-bottom: 16px;

//     margin-left: ${(props) => props.mensagem === "Me" ? "auto": 0};

//     color: ${(props) => props.mensagem === "Me" ? "white" : "black"};

//     background-color: ${(props) => props.mensagem === "Me" ? "#61C554" : "#E8ECEF"};

//     h1 {
//         font-size: 16px;
//     };

//     p {
//         font-weight: 400;
//         font-size: 14px;
//         margin-top: 4px;
//         overflow-wrap: break-word;
//     };

//     div {
//         text-align: right;
//         span {
//             color: ${(props) => props.mensagem === "Me" ? "white" : "#727272"};
//             font-weight: 400;
//             font-size: 11px;
//         }
//         img {
//             margin-left: 4px;
//         }
//     };
    
// `