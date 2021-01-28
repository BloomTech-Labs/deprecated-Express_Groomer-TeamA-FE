import styled from 'styled-components';

const InnerSectionDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RightInnerSectionDiv = styled(InnerSectionDiv)`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HealthInfoDiv = styled.div`
  display: flex;
  margin-top: 10%;
  flex-direction: column;
`;

const AppointmentHistoryTopDiv = styled.div`
  padding: 5% 0 2% 0;
  @media only screen and (max-width: 1600px) {
    text-align: center;
  }
`;

const AppointmentHistoryBottomDiv = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  border-radius: 5px;
  margin: 5% 0 5% 0;
`;

export {
  InnerSectionDiv,
  RightInnerSectionDiv,
  HealthInfoDiv,
  AppointmentHistoryTopDiv,
  AppointmentHistoryBottomDiv,
  Image,
};
