import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    const drawerWidth = 240;

    const navItems = [
        { label: 'Головна', path: '/' },
        { label: 'Вхід', path: '/login' },
        { label: 'Реєстрація', path: '/register' },
        { label: 'Ігри', path: '/games' },
    ];
    const filteredNavItems = isLoggedIn
    ? navItems
    : navItems.filter(item => item.label === 'Головна' || item.label === 'Вхід'|| item.label === 'Реєстрація' )

    const handleDrawerToggle = () => {
        setMobileOpen(prevState => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Меню
            </Typography>
            <Divider sx={{ borderColor: '#3f9c14' }} />
            <Divider sx={{ borderColor: '#3f9c14' }} />
            <List>
                {filteredNavItems.map(item => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: 'center' }}
                            component={Link}
                            to={item.path}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex', height: '64px', marginBottom: '50px' }}>
            <CssBaseline />
            <AppBar component="nav" style={{ background: '#1d1d1d' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' },
                            fontWeight: 800,
                            textTransform: 'uppercase',
                        }}
                    >
                        Miraplay
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {filteredNavItems.map(item => (
                            <Button
                                key={item.label}
                                sx={{ color: '#fff' }}
                                component={Link}
                                to={item.path}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            background: '#1d1d1d',
                            color: 'white',
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Typography></Typography>
            </Box>
        </Box>
    );
};

export default Header;
