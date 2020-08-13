import styled from "styled-components/native";

export const Container = styled.View`
  max-height: 180px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  padding: 10px;
`;

export const Infos = styled.View`
  flex: 1;
  padding-right: 30px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Sprite = styled.Image`
  flex: 1;
  width: auto;

  height: 180px;
`;

export const Id = styled.Text`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  color: rgba(23, 23, 27, 0.6);
`;

export const Name = styled.Text`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 26px;
  line-height: 38px;

  color: #fff;
`;
