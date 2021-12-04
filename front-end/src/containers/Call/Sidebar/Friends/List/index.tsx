import React, { Children } from 'react'
import { SList } from '../../Calls/List/styles'
import FriendItem from './FriendItem'

export default function FriendList() {
  return (
    <SList>
      {Children.toArray([1, 2, 3, 4, 5, 6, 7, 8]).map(() => (
        <FriendItem />
      ))}
    </SList>
  )
}
