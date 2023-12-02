import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function notificationsLabel(count) {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
  }
function ResponsiveAppBar() {
    const refreshPage = () => {
        window.location.reload();
    };


    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };



    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'whitesmoke' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src="icons2.png" alt="no img" style={{ marginLeft: '0px' }} />





                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Button  startIcon={<RefreshIcon />} style={{ backgroundColor: 'whitesmoke', color: 'black',marginLeft:'150px' }} onClick={refreshPage}>
                            Refresh!
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                    <IconButton aria-label={notificationsLabel(100)}  style={{marginRight:'25px'}}>
  <Badge badgeContent={100} color="secondary">
    <MailIcon />
  </Badge>
</IconButton>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Typography sx={{ marginRight: '20px' }}>
                                    <p>welcome<br />
                                        admin</p>
                                </Typography>
                                <Avatar alt="Remy Sharp" src="profile.webp" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
