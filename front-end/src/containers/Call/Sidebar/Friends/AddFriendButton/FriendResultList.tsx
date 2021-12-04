import React, { Children } from 'react'
import styled from 'styled-components'
import ResultItem from './FriendResultItem'

export default function FriendResultList() {
  return (
    <SList>
      {Children.toArray([1, 2, 3]).map((_, i) =>  (
        <ResultItem />
      ))}
    </SList>
  )
}

const SList = styled.div``