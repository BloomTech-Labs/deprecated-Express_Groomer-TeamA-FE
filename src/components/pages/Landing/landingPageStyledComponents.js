import styled from 'styled-components';

export const HeaderImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MapImg = styled.img`
  padding-top: 1%;
  margin-left: 10%;
  width: 80%;
  padding-bottom: 2%;
`;

export const ParagraphOneFormater = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  text-align: center;
`;

export const ContentCard = styled.div`
  border: 1px solid gray;
  margin-left: 10%;
  padding: 3%;
  box-shadow: 20px 20px 60px #b9b9b9, -20px -20px 60px #fbfbfb;
  margin-bottom: 4%;
  width: 80%;

  @media only screen and (max-width: 1500px) {
    width: 90%;
    margin: 3% 0 3% 0;
    font-size: large;

  @media only screen and (max-width: 760px) {
    box-shadow: none;
    width: 100%;
  }
`;

export const ResizingBreakPoint = styled.div`
  margin-left: 25%;
  margin-right: 5%;
  width: 50%;
  border: 5px solid orange;
  background-color: teal;
`;

export const ReviewContainer = styled.div`
   display: flex
   justify-content: space-evenly;
`;

export const ButtonStyler = styled.div`
  text-align: center;
  margin-bottom: 2%;
`;

export const FirstParagraphContent = [
  `Explore our network of professional groomers! Our groomers are highly motivated and 
  certified professionals eager to meet and serve your and your pets. Come find a Groomer near you today!`,
];

export const SecondParagraphContent = [
  `Let our app make the process of booking appointments for your pets easy. Our applications features 
  will streamline the processs of booking a groomer for your pet, and will send you text message updates
  about the status of your pet and appointment. 
  `,
];

export const FirstReviewBlurb = [
  `Tim Rogers says: Wow! I've really liked the service I recieved from my Groomer Jake for my dog Bubbus. 
Bubbus is a very small and temparmental dog, and doesn't take to others very easily, 
but I was very pleased to see how quickly he took to Jake. Jake cleaned Bubbus up good 
as new! I highly recommend him(Jake) and the app!`,
];

export const SecondReviewBlurb = [
  `Jojo Jackson says: My cat Minnie is outside very often, and as working cat Mom I find it difficult to keep her coat as clean I know it can be. It's such a shame when she's dirty; she's a goregous dog!
Anyway, I came across this app Pet-Xpress, and was very intrigued. I found the app incredibly user friendly and I was able to find someone to groom Minnie very quickly!
5/5 stars, highly recommended!`,
];

export const ThirdReviewBlurb = [
  `Alexander Sheffield says: I'm a busy guy with a great dog. I make time to play with Rick everyday, but after working all day, it's hard to
always clean Rick as much as I would like to. Using Pet-Xpress I'm able to have someone come out and groom my dog so his coat is nice, and it's nice to have professionals
a couple of button clicks away to be able to groom my dog.`,
];
