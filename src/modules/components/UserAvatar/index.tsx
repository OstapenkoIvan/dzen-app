import { useState, useRef } from "react";
import { Avatar, Badge } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

function UserAvatar() {
  const [avatar, setAvatar] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.click();
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.files && setAvatar(URL.createObjectURL(event.target.files[0]));
  }
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={
        <button
          onClick={handleClick}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <SettingsIcon />
          <input
            ref={inputRef}
            accept="image/*"
            hidden
            type="file"
            onChange={handleInput}
          />
        </button>
      }
      sx={{ my: 6 }}
    >
      <Avatar alt="user avatar" src={avatar} sx={{ width: 80, height: 80 }} />
    </Badge>
  );
}

export default UserAvatar;
