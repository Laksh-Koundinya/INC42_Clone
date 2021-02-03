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

const MenuPopupState = ({ label, data }) => {
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });
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
              {item}
            </MenuItem>
          ))}
      </Menu>
    </React.Fragment>
  );
};

export default MenuPopupState;
