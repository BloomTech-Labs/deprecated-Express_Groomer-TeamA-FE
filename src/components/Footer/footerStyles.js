import styled from 'styled-components';

const FooterContainer = styled.div`
    background-color: #006161;
    color: #FFFFFF;
    display: flex;
    width: 100%;
    height: 3%;
    bottom: 0;
    justify-content: space-between;
    align-self: flex-end;
    border-top: 2px solid #BABABA;

    img {
        width: 100px;
        height: 100px;
        margin-left: 1%;
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
            text-shadow: 0 0 2px gray;
            color: white;
            &:hover {
              color:orange;
            }
    }
`;

const FooterName = styled.p`
  margin-left: 25%;
  margin-top: 3%;
  font-size: 1.25rem;
`;

export { FooterContainer, FooterName };
