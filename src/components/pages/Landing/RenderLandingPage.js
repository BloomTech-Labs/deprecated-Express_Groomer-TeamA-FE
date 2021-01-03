import React from 'react';
import husky from '../../../assets/husky.jpg';
import map from '../../../assets/sample-map.png';
import mediumdog from '../../../assets/mediumdog.jpg';
import NavBar from '../../Navigation/NavBar';
import { Card, Col, Row, Layout } from 'antd';
import {
  ImgSize,
  SecondImgDimension,
  data,
  data2,
  solid,
  MapFormater,
  SpaceAddition,
  ParagraphOneFormater,
  ParagraphTwoFormater,
  Word,
} from './landingPageStyledComponents';

function RenderLandingPage(props) {
  return (
    <Layout>
      <NavBar />
      <div>
        <div>
          <ImgSize>
            <img src={husky} />
          </ImgSize>
        </div>
        <Row>
          <Col span={6}>
            <SecondImgDimension>
              <img src={mediumdog} />
            </SecondImgDimension>
          </Col>
          <Col span={6}>
            <p>{data[0]}</p>
          </Col>
        </Row>
        <hr></hr>
        <Word>How it works</Word>
        <MapFormater>
          <img src={map} />
        </MapFormater>
        <ParagraphTwoFormater>
          <p>{data2[0]}</p>
        </ParagraphTwoFormater>
      </div>
    </Layout>
  );
}
export default RenderLandingPage;
