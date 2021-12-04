import React from 'react'
import CallContainer from './CallContainer'
import Navigator from './Navigator'
import Sidebar from './Sidebar'
import { SCall } from './styles'

export default function Call() {
  return (
    <SCall>
      <Navigator />
      <Sidebar />
      <CallContainer />
    </SCall>
  )
}
