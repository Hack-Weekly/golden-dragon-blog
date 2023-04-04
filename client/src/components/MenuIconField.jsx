import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link } from "react-router-dom"

function ConditionalMenuItem({name, show, popup_state, link}) {
  if (!show) return null;
  return <Link to={link}>
      <MenuItem
      onClick={popup_state.close}
      >
        {name}
      </MenuItem>
    </Link>
}

function MenuIconButton() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <IconButton size="large" color="inherit" edge="start" sx={{ mr: 0 }} {...bindTrigger(popupState)}>
            <MenuIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            <ConditionalMenuItem popup_state={popupState} name="Dashboard" link="/" show={true}/>
            <ConditionalMenuItem popup_state={popupState} name="Blogs" link="/blogs/" show={true}/>
            <ConditionalMenuItem popup_state={popupState} name="Profile" link="/profile/" show={true}/>
          </Menu>
        </>
      )}
    </PopupState>
  );
}

export default MenuIconButton;
