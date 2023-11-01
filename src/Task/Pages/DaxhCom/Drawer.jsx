import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom"; 

const pages = [<Link to="/analytics" style={{ textDecoration: 'none' }}>"Analytics"</Link>,
  <Link to="/datatable" style={{ textDecoration: 'none' }}>"Data"</Link>, ];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{  display: { sm: 'block',md:"none" },color: "white", marginRight: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
       

      >
        <MenuIcon color="white" />
      </IconButton>
        
        


    </React.Fragment>
  );
};

export default DrawerComp;
