import { Button, Input, Modal } from "antd";
import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import IconButton from "src/common/components/IconButton";
import FriendResultList from './FriendResultList'

export default function AddFriendButton({ theme }: { theme: any }) {
  const [openModal, toggleModal] = useState(false);

  const handleCancel = () => {
    toggleModal(false)
  }

  const onSearch = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <IconButton
        onClick={() => toggleModal(true)}
        tooltipPosition="bottom"
        tooltipTitle="Add a new friend"
      >
        <FaUserPlus color={theme.icon.inactive} size={16} />
      </IconButton>
      <Modal
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
        title="Add a new friend"
        visible={openModal}
        onCancel={handleCancel}
      >
        <Input.Search
          name="username"
          enterButton
          onSearch={onSearch}
        />
        <FriendResultList />
      </Modal>
    </>
  );
}
