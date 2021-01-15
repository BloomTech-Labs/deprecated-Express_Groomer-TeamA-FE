import styled from "styled-components";

const FooterContainer = styled.div`
    background-color: #008080;
    color: #ffffff;
    display: flex;
    width: 100%;
    height: 5%;
    bottom: 0;
    justify-content: space-between;
    align-self: flex-end;

    img {
        widows: 100px;
        height: 100px;
      }
    
    .footer-icons {
        display: flex;
        justify-content: flex-end;
        margin-right:5%;
        width:30%;

        .footer-icon {
            margin-top: 35px;
            margin-left:7%;
            font-size: 2rem;
            &:hover {
              color:white;
            }
    }
`;

const FooterName = styled.p`
    margin-left:25%;
    margin-top:3%;
    font-size: 1.25rem;
`;

export {FooterContainer, FooterName};