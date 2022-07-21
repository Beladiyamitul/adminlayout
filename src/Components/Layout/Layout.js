import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Doctor from '../../Container/Doctor/Doctor';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Medicines from '../../Container/Medicines/Medicines';
import { NavLink } from 'react-router-dom';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

const drawerWidth = 240;

export default function Layout({children}) {

  

let sidemenu=[
    {label:'Doctor', to:'/doctor' , icon:<LocalHospitalIcon/>},
    {label:'Medicines', to:'/medicines' , icon:<VaccinesIcon/>},
    {label:'Counter', to:'/counter' , icon:<HourglassTopIcon/>},
    {label:'Promises Example', to:'/promises_example' , icon:<HourglassTopIcon/>},
    {label:'Usememo Example', to:'/usememo_example' , icon:<HourglassTopIcon/>}

]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {sidemenu.map((d, i) => (
              <ListItem component={NavLink} to={d.to} exact key={i} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {d.icon}
                  </ListItemIcon>
                  <ListItemText primary={d.label} />
                </ListItemButton>
                
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
