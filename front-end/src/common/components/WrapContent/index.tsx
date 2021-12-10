import React, { FC, useContext, useState } from 'react';
import { ProfileContext } from 'src/common/context/NavigatorContext';
import { WrapContentStyles } from './styles';

type WrapContentProps = {
  title: string
};

const WrapContent: FC<WrapContentProps> = ({ children, title }) => {
  const { data } = useContext(ProfileContext);
  console.log("data: ", data);

  return (
    <WrapContentStyles>
      <div className="welcom">Xin chào { }</div>
      <div className="title">{title}</div>
      {children}
    </WrapContentStyles>
  );
};

export default WrapContent;
