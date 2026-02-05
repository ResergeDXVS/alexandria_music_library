import styled from "styled-components";

const MessageViewStructure = styled.section`
    width: 100%;
    height: 100%;
    margin:5% 0;
    padding: 5% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2,p{
        color:${props => props.theme.colors.message};
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