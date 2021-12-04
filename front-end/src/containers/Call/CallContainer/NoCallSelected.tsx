import React, { useContext } from 'react'
import { BsCameraVideo } from "react-icons/bs";
import styled, { ThemeContext } from 'styled-components'
import { SCallContainer } from './styles'

export default function NoCallSelected() {

  const { theme } = useContext(ThemeContext);

  return (
    <SNoCall>
      <span>Let's have a calling video !</span> <BsCameraVideo size={18} color={theme.text.main} />
    </SNoCall>
  )
}

const SNoCall = styled(SCallContainer)`
  justify-content: center;
  align-items: center;
  & > span {
    color: ${props => props.theme.theme.text.main};
    font-size: 16px;
    margin-right: 8px;
  }
`