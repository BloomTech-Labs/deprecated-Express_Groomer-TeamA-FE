import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../Navigation/NavBar';
import husky from '../../../assets/husky.jpg';
import map from '../../../assets/sample-map.png';
import mediumdog from '../../../assets/mediumdog.jpg';
import NavBar from '../../Navigation/NavBar';
import { Layout } from 'antd';
import {
  HeaderImg,
  FirstParagraphContent,
  SecondParagraphContent,
  MapImg,
  ParagraphTwoFormater,
  HeaderDiv,
  BodyDiv,
  ContentDiv,
  ContentP,
} from './landingPageStyledComponents';

function RenderLandingPage() {
  return (
    <Layout>
      <NavBar />
      <div>
        <HeaderImg src={husky} />
        <ContentDiv>
          <BodyDiv src={mediumdog} />
          <ContentP>{FirstParagraphContent[0]}</ContentP>
        </ContentDiv>
        <hr></hr>
        <HeaderDiv>How it works</HeaderDiv>
        <MapImg src={map} />
        <ParagraphTwoFormater>{SecondParagraphContent[0]}</ParagraphTwoFormater>
      </div>
    </Layout>
  );
}
export default RenderLandingPage;
