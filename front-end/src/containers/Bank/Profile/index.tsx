import { Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React, { useContext, useState } from "react";
import { FaArrowLeft, FaCamera } from "react-icons/fa";
import { useHistory } from "react-router";
import { ThemeContext } from "styled-components";
import { SProfile } from "./styles";

export default function Profile() {
  const { theme } = useContext(ThemeContext);
  const history = useHistory();

  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const onChange = (e: any) => {
    console.log(e.target.files)
    const imgSrc = URL.createObjectURL(e.target.files[0]);
    setImgSrc(imgSrc);
  }

  return (
    <SProfile>
      <FaArrowLeft
        color={theme.icon.inactive}
        className="back"
        onClick={() => history.goBack()}
        size={30}
      />
      <label className="avt">
        <Avatar src={imgSrc || "/images/avt-placeholder.png"} size={80} />
        <FaCamera color={theme.icon.inactive} className="icon" size={20} />
        <input
          type="file"
          onChange={onChange}
          accept="image/png, image/jpeg"
          name="avt"
          style={{ display: "none" }}
        />
      </label>
      <div className="name">@sonht</div>
      <Button style={{ minWidth: "100px" }} type="primary">
        Save
      </Button>
    </SProfile>
  );
}
