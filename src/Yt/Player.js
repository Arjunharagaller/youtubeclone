import * as React from 'react';
import { styled, useTheme , alpha} from '@mui/material/styles';
import {Box,Toolbar,List,CssBaseline,Divider,IconButton,ListItem,ListItemButton,ListItemIcon,ListItemText, Avatar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import {House, SwitchVideo,SubscriptionsOutlined, AccountBoxOutlined,HistoryOutlined,OndemandVideoOutlined, QueryBuilderOutlined,ContentCutOutlined} from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import InputBase from '@mui/material/InputBase';
import MoreIcon from '@mui/icons-material/MoreVert';
import Homecontent from './Homecontent';
import Videocontent from './Videocontent';
import { useNavigate } from 'react-router-dom';

const menuId = 'primary-search-account-menu';
const drawerWidth = 240;
const mobileMenuId = 'primary-search-account-menu-mobile';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Home() {
  const navigate=useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color='inherit'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={!open?handleDrawerOpen:handleDrawerClose}
          >
            <MenuIcon />
          </IconButton>
           <img   alt='icon' src="https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg" width={150}/>
          <Search sx={{border:'1px solid grey', borderRadius:10}}>
            <SearchIconWrapper >
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
            sx={{width:'6in'}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* <AccountCircle sx={{fontSize:'40px'}} /> */}
              <Avatar src='https://static.vecteezy.com/system/resources/thumbnails/021/907/517/small/anime-boy-avatar-ai-generative-art-ai-generation-art-photo.jpg'
               alt='usericon'></Avatar>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{display:'flex', justifyContent:'center'}}>
        <img style={{opacity:0.2}} alt='icon' src="https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg" width={150}/>
        </DrawerHeader>
        <Divider />
        <List>
          
            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5,}}>
                <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                  <House onClick={()=>navigate('/')} titleAccess={open?'':'home'}></House>
                </ListItemIcon>
                <ListItemText primary='Home' sx={{ opacity: open ? 1 : 0 }}/>
              </ListItemButton>
              <ListItemButton sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5,}}>
                <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                   <SwitchVideo titleAccess={open?'':'Shorts'}></SwitchVideo>                  
                </ListItemIcon>
                <ListItemText primary='Shorts' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <ListItemButton sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5,}}>
                <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                  <SubscriptionsOutlined titleAccess={open?'':'Subscriptions'}></SubscriptionsOutlined>
                </ListItemIcon>
                <ListItemText primary='Subscription' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider sx={{ display:open?'':'none'}}/>
        <List sx={{ marginTop:open?'':'-15px'}}>
            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5,}}>
                <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                  <AccountBoxOutlined titleAccess={open?'':'Your Channel'}></AccountBoxOutlined>
                </ListItemIcon>
                <ListItemText primary='Your Channel' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <ListItemButton sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5,display:open?'':'none'}}>
                <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                  <HistoryOutlined></HistoryOutlined>
                </ListItemIcon>
                <ListItemText primary='History' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <ListItemButton sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5, display:open?'':'none'}}>
                <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                  <OndemandVideoOutlined></OndemandVideoOutlined>
                </ListItemIcon>
                <ListItemText primary='Your Videos' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <ListItemButton sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5, display:open?'':'none'}}>
                <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                  <QueryBuilderOutlined></QueryBuilderOutlined>
                </ListItemIcon>
                <ListItemText primary='Watch Later' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <ListItemButton sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5, display:open?'':'none'}}>
                <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                  <ContentCutOutlined></ContentCutOutlined>
                </ListItemIcon>
                <ListItemText primary='Your Clips' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Videocontent></Videocontent>
      </Box>
    </Box>
  );
}