import styled from 'styled-components'

export const EditableTextInputBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 600;
  color: #000000;
`

export const EditableTextInputButton = styled.button`
  border: 1px solid ${props => props.textColor};
  cursor: pointer;
  outline: none;
  color: ${props => props.textColor};
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
  font-size: 15px;
  font-weight: 500;
  padding-top: 6px;
  padding-left: 16px;
  padding-bottom: 6px;
  padding-right: 16px;
  border-radius: 11px;
  margin: 26px;
`

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  height: 320px;
  width: 290px;
  margin-top: 16px;
`
