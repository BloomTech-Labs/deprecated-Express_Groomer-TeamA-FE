import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const ImgSize = styled(Content)`
  height: 400px;
  width: 100%;
  padding-bottom: 52%;
`;

export const MapFormater = styled(Content)`
  width: 100%;
  padding-bottom: 2%;
`;

export const SecondImgDimension = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40%;
  width: 50px;
  height: 50px;
  margin-right: 20%;
  padding-top: 18%;
`;

export const ParagraphOneFormater = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  text-align: center;
`;

export const Word = styled.div`
  font-size: 1.7rem;
  text-align: center;
`;

export const ParagraphTwoFormater = styled.div`
  font-size: 1.7rem;
  padding-bottom: 4%;
`;

export const solid = styled.div`
  border-top: 3px solid #bbb;
`;

export const data = [
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
];

export const data2 = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.`,
];
