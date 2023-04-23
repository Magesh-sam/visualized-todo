import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import '../styles/sidebar.css'
import React, { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CategoryIcon from '@mui/icons-material/Category';

interface ISidebar {
    setquery: React.Dispatch<React.SetStateAction<string>>
  openDrawer: boolean;
  setopenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SideBar: FC<ISidebar> = ({ openDrawer, setopenDrawer,  setquery }) => {
  return (
    <Drawer PaperProps={{ sx: { width: '300px' } }} open={openDrawer}>
      <IconButton disableRipple
              sx={{ background:'red', color: "white", width: "50px", height: "50px",marginLeft:'auto',marginRight:'35px',marginTop:'30px' }}
        onClick={() => setopenDrawer(false)}
      >
        <CloseIcon />
      </IconButton>
      <List>
              <ListItem onClick={() => { setquery(''); setopenDrawer(false)}} className='listitem' >
          <ListItemIcon><CategoryIcon/></ListItemIcon>
          <ListItemText>All</ListItemText>
        </ListItem>
              <ListItem onClick={() => { setquery('home'); setopenDrawer(false)}}  className='listitem' >
          <ListItemIcon><HomeIcon/></ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
              <ListItem onClick={() => { setquery('school'); setopenDrawer(false)}} className='listitem' >
          <ListItemIcon><SchoolIcon/></ListItemIcon>
          <ListItemText>School</ListItemText>
        </ListItem>
              <ListItem onClick={() => { setquery('work'); setopenDrawer(false)}} className='listitem' >
          <ListItemIcon><WorkIcon/></ListItemIcon>
          <ListItemText>Work</ListItemText>
        </ListItem>
              <ListItem onClick={() => { setquery('personal'); setopenDrawer(false)}} className='listitem' >
          <ListItemIcon><PersonIcon/></ListItemIcon>
          <ListItemText>Personal</ListItemText>
        </ListItem>
              <ListItem onClick={() => { setquery('others'); setopenDrawer(false)}} className='listitem' >
          <ListItemIcon><MoreHorizIcon/></ListItemIcon>
          <ListItemText>Others</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};
