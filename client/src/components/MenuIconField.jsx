import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function MenuIconButton() {
  return (
    <IconButton size="large" color="inherit" edge="start" sx={{ mr: 0 }}>
      <MenuIcon />
    </IconButton>
  );
}

export default MenuIconButton;
