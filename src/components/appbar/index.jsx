import React, { useState, useCallback } from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    makeStyles,
    Drawer,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Badge,
    Avatar,
    ListSubheader
} from "@material-ui/core";
import {
    Menu as MenuIcon,
    AccountCircleOutlined as AccountIcon,
    VideoCallOutlined as VideoIcon,
    MoreVert as MoreIcon,
    AppsRounded as AppsIcon,
    Inbox as InboxIcon,
    Mail as MailIcon,
    NotificationsNoneOutlined as NotificationsIcon,
} from "@material-ui/icons";

import { Logo } from "../logoIcon";
import Button from "../button";

const useStyles = makeStyles(theme => ({
    appBar: {
        boxShadow: "none",
    },
    menuIcon: {
        marginRight: theme.spacing(2),
    },
    icons: {
        width: "30px",
        height: "30px",
        marginRight: theme.spacing(2),
    },
    grow: {
        flexGrow: 1
    },
    drawerContainer: {
    },
    listItem: {
        paddingTop: '4px',
        paddingBottom: '4px',
    },
    listSubheader: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    listItemIcon: {
        paddingRight: theme.spacing(2),
    },
}));

function LeftBar({ open, toggleDrawer }) {
    const classes = useStyles();

    return (
        <Drawer
            anchor={'lelft'}
            open={open}
            SlideProps={{
                direction: 'right',
            }}
            className={classes.drawerContainer}
            onClose={toggleDrawer(false)}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}

            >
                <ListSubheader classes={{ root: classes.listSubheader }} >
                    <IconButton classes={{ root: classes.listItemIcon }}>
                        <MenuIcon />
                    </IconButton>
                    <Logo />
                </ListSubheader>
                <List>
                    {['Inicio', 'Explorar', 'Shorts', 'Inscrições', 'Originais', 'YouTube Music'].map((text, index) => (
                        <ListItem button classes={{ root: classes.listItem }} key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Biblioteca', 'Historico', 'Seus vídeos', 'Assistir mais tarde', 'Download', 'Seus clipes'].map((text, index) => (
                        <ListItem button classes={{ root: classes.listItem }} key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}

export default function AppBarComponent({ children, ...props }) {
    const classes = useStyles();
    const [isOpen, setState] = useState(false);
    const [isAuth, setAuth] = useState(true);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };

    return (
        <>
            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={toggleDrawer(true)}
                        className={classes.menuIcon}
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <Logo />

                    <div className={classes.grow} />
                    {
                        isAuth &&
                        <IconButton color="inherit" className={classes.icons}>
                            <VideoIcon />
                        </IconButton>
                    }

                    <IconButton color="inherit" className={classes.icons}>
                        <AppsIcon />
                    </IconButton>

                    <IconButton color="inherit" className={classes.icons}>
                        {
                            isAuth ?
                                <Badge badgeContent={'7+'} color="error">
                                    <NotificationsIcon />
                                </Badge> :
                                <MoreIcon />
                        }
                    </IconButton>
                    {
                        isAuth ?
                            <IconButton color="inherit" className={classes.icons}>
                                <Avatar alt='Gabriel Santos Lima' src='/src/assets/avatar.jpeg' />
                            </IconButton> :
                            <Button startIcon={<AccountIcon />} variant="outlined" color="inherit">Fazer Login</Button>
                    }
                </Toolbar>
            </AppBar>
            <LeftBar open={isOpen} toggleDrawer={toggleDrawer} />
        </>
    )
}