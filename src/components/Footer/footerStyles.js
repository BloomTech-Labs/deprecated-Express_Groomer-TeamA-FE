import styled from 'styled-components';

const FooterContainer = styled.div`
    background-color: #006161;
    color: #FFFFFF;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid #BABABA;

    @media (max-width: 768px){
      flex-flow: column nowrap;
      justify-content: center;
    } 

    img {
        width: 100px;
        height: 100px;
        padding-left: 0.25rem;
      }
    
    .footer-icon {
        padding: 0 0.5rem;
        font-size: 2rem;
        text-shadow: 0 0 2px gray;
        color: white;
        &:hover {
          color:orange;
        }
`;

const FooterName = styled.p`
<<<<<<< HEAD
<<<<<<< HEAD
    font-size: 1.25rem;
=======
  font-size: 1.25rem;
>>>>>>> e184cfca2bc3600d9d08652214eb3b5df68f0926
=======
  font-size: 1.25rem;
>>>>>>> eb1b22165b09c4e26d0165b9ae6e89eeb8a137d3
`;

export { FooterContainer, FooterName };
