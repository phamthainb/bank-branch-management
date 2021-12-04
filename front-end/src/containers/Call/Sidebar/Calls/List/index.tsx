import React, { Children } from 'react'
import CallItem from './CallItem'
import { SList } from './styles'

export default function CallList() {
  return (
    <SList>
      {Children.toArray([1, 2, 3, 4, 5, 6, 7, 8]).map((_, i) => (
        <CallItem id={i} />
      ))}
    </SList>
  )
}
