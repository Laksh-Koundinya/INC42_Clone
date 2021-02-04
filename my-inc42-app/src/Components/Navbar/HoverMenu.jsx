import React from "react";
import Typography from "@material-ui/core/Typography";
import Menu from "material-ui-popup-state/HoverMenu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import { Link, useHistory } from "react-router-dom";

const MenuPopupState = ({ label, data }) => {
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });
  const history = useHistory()
  return (
    <React.Fragment>
      <Typography variant="button" {...bindHover(popupState)}>
        {label}
      </Typography>
      <Menu
        {...bindMenu(popupState)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {data &&
          data.map((item) => (
            <MenuItem onClick={popupState.close} key={item}>
             <Link to="/submitPost">{item}</Link> 
            </MenuItem>
          ))}
      </Menu>
    </React.Fragment>
  );
};

export default MenuPopupState;
