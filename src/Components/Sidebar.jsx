import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import DnsIcon from '@mui/icons-material/Dns';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';

export default function NestedList() {
const Navigate = useNavigate();
  const [open, setOpen] = React.useState(true);


  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 240, backgroundColor:'skyblue',boxShadow:'10px 10px 5px lightblue' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
     
    >
      <ListItemButton onClick={()=>{Navigate("/Dashboard")}}>
        <ListItemIcon >
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
     
      <Link to='/Employee' style={{textDecoration:'none',color:'black'}}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
      <ListItemText primary="Employee" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 ,fontSize:'10px'}} onClick={handleClick}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="All Employees" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => {Navigate("/Archemployees")}}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Archive Employees" />
          </ListItemButton>
        </List>
      </Collapse>
      </Link>
      
      <Link to='/Leave' style={{textDecoration:'none',color:'black'}}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Leave" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 ,fontSize:'10px'}} onClick={() => {Navigate("/Allemployees")}}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Employees leave" />
          </ListItemButton>
        </List>
      </Collapse>
      </Link>
     <Link to='/Administration' style={{textDecoration:'none',color:'black'}}>
     <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Administration" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
     </Link>
     
     
      <ListItemButton onClick={()=>{Navigate("/Lookup")}}>
        <ListItemIcon>
          <DnsIcon />
        </ListItemIcon>
        <ListItemText primary="Lookup" />
      </ListItemButton>
      <ListItemButton onClick={()=>{Navigate("/Setting")}}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
      <ListItemButton onClick={()=>{Navigate("/Leads")}}>
        <ListItemIcon>
          <LeaderboardIcon />
        </ListItemIcon>
        <ListItemText primary="Leads" />
      </ListItemButton >
      <ListItemButton onClick={()=>{Navigate("/Login")}}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
  );
}
