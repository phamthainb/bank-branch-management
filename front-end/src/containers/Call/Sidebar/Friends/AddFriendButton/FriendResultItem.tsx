import { Avatar } from 'antd';
import React, { useContext } from 'react'
import { FaCheck, FaUserPlus } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import { SResultItem } from './styles';

export default function ResultItem() {
  
  const {theme} = useContext(ThemeContext)

  return (
    <SResultItem>
      <Avatar src="/images/avt-placeholder.png" className="avt" />
      <div className="detail">
        <p className="name">Hoang Thai Son</p>
        <div className="group-icon">
          <div className="icon">
            <FaUserPlus size={12} color="#1890ff" />
          </div>
          <div className="icon">
            <FaCheck size={12} color={theme.green} />
          </div>
        </div>
      </div>
    </SResultItem>
  )
}
