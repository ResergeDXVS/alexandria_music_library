import styled from "styled-components";

const MessageViewStructure = styled.section<{$adjustMessage:string}>`
    width: 100%;
    height: 100%;
    margin:5% 0;
    padding: 5% 0;
    display: flex;
    flex-direction: ${({$adjustMessage}) => ($adjustMessage==="loading" ? "row" : "column")};
    justify-content: center;
    align-items: center;

    div{
        color:${props => props.theme.colors.message};
        width: 120px;
        height: 120px;
        font-size: 40px;
    }
    h2,p{
        color: ${({ $adjustMessage, theme }) =>
            $adjustMessage !== "error"
            ? theme.colors.message
            : theme.colors.error};


        margin: 0;
        text-align: center;
    }
    h2{
        font-size: 106px;
        font-weight: 400;
        line-height: 1.2;
    }
    p{
        font-size: 80px;
        font-weight: 200;
        line-height: 1.5;
    }
`;

export {
    MessageViewStructure,
};