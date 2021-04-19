import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Slide,
  useScrollTrigger,
  Menu,
  MenuItem,
  Hidden,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import MovingLogo from './MovingLogo';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const HeaderComponent = (props) => {
  const [tabcolor, setTabcolor] = useState('transparent');

  useEffect(() => {
    setTimeout(() => {
      setTabcolor('#333');
    }, 0);
  }, []);
  const useStyles = makeStyles((theme) => ({
    '@keyframes moveDown': {
      '0%': {
        transform: 'translate3d(0, -3000px, 0)',
      },
      '60%': {
        transform: 'translate3d(0, 25px, 0)',
      },
      '75%': {
        transform: 'translate3d(0, -10px, 0)',
      },
      '90%': {
        transform: 'translate3d(0, 5px, 0)',
      },
    },
    header: {
      height: '10rem',
      zIndex: 0,
      [theme.breakpoints.up('lg')]: {
        animation: '$moveDown 2s',
      },
      [theme.breakpoints.down([1990])]: {
        height: '7rem',
      },

      [theme.breakpoints.down('md')]: {
        height: '8em',
        width: '100vw',
      },
      [theme.breakpoints.down('xs')]: {
        height: '7em',
      },
    },
    appbar: {
      zIndex: theme.zIndex.modal + 1,
      boxShadow: 'none',
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '12rem',

      [theme.breakpoints.down('sm')]: {
        alignItems: 'space-evenly',
        zIndex: 10,
      },
    },
    tabContainer: {
      '&:last-child': {
        marginRight: '2rem',
      },
    },
    tab: {
      color: tabcolor,
      ...theme.typography.tab,
      [theme.breakpoints.down('lg')]: {
        marginLeft: '1px',
        fontSize: '0.9rem',
      },
    },
    drawerIcon: {
      height: '40px',
      width: '60px;',
      color: theme.palette.secondary.main,
    },
    logo: {
      height: '4rem',
      paddingLeft: '4rem',
      [theme.breakpoints.down('lg')]: {
        height: '3em',
        paddingLeft: '4rem',
      },
      [theme.breakpoints.down('md')]: {
        height: '6em',
        paddingLeft: '1rem',
      },
      [theme.breakpoints.down('xs')]: {
        height: '3em',
        paddingLeft: '1rem',
      },
      [theme.breakpoints.down('md')]: {
        height: '3em',
      },
    },
    drawerIconContainer: {
      width: '1rem',
      margin: '0 2rem 0 2rem',
      '&:hover': {
        background: 'transparent',
      },
    },
    drawer: {
      background: theme.palette.secondary.main,
      width: '12rem',
    },
    drawerItem: {
      ...theme.typography.tab,
      color: '#eee',
      fontSize: '1rem',
      padding: '.7rem 0',
      fontStyle: 'italic',
    },
  }));
  const classes = useStyles();
  const themes = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(themes.breakpoints.down('md'));

  const [openDrawer, setOpenDrawer] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

  const changeActiveTab = (e, value) => {
    setActiveTab(value);
  };
  useEffect(() => {
    if (window.location.pathname === '/') {
      setTabcolor('white');
    } else if (window.location.pathname === '/bedrift') {
      setTabcolor('white');
    } else if (window.location.pathname === '/mobil') {
      setTabcolor('white');
    } else if (window.location.pathname === '/support') {
      setTabcolor('white');
    } else if (window.location.pathname === '/kontakt' && activeTab !== 4) {
      setActiveTab(4);
    } else if (window.location.pathname === '/stilling' && activeTab !== 5) {
      setActiveTab(5);
    } else if (
      window.location.pathname === '/salgsbetingelser' &&
      activeTab !== 5
    ) {
      setActiveTab(5);
    } else if (
      window.location.pathname === '/slipeservice' &&
      activeTab !== 5
    ) {
      setActiveTab(5);
    }
  }, [activeTab]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const tabs = (
    <Tabs
      value={activeTab}
      className={classes.tabContainer}
      onChange={changeActiveTab}
      indicatorColor="transparent"
    >
      <Link href="/">
        <MovingLogo />
      </Link>
      <Link href="/">
        <Tab className={classes.tab} label="hjem" />
      </Link>

      <Link href="/bedrift">
        <Tab className={classes.tab} label="bedrift" />
      </Link>
      <Link href="/mobil">
        <Tab className={classes.tab} label="mobil" />
      </Link>
      <Link href="/support">
        <Tab className={classes.tab} label="support" />
      </Link>
      <Link href="/kontakt">
        <Tab className={classes.tab} label="om oss" />
      </Link>

      {/* <Tab
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.tab}
        label="Aktuelt"
      /> */}

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ zIndex: 1500 }}
      >
        <Link href="/stilling">
          <MenuItem onClick={handleClose}>Jobbe hos oss</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Link href="/salgsbetingelser">
          <MenuItem onClick={handleClose}>Salgsbetingelser</MenuItem>
        </Link>
      </Menu>
    </Tabs>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
      >
        {/*  <div className={classes.toolbarContainer} /> */}
        <List disablePadding>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <Link href="/">
              <ListItemText className={classes.drawerItem} disableTypography>
                HJEM
              </ListItemText>
            </Link>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <Link href="/bedrift">
              <ListItemText className={classes.drawerItem} disableTypography>
                BEDRIFT
              </ListItemText>
            </Link>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <Link href="/mobil">
              <ListItemText className={classes.drawerItem} disableTypography>
                MOBIL
              </ListItemText>
            </Link>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <Link href="support">
              <ListItemText className={classes.drawerItem} disableTypography>
                SUPPORT
              </ListItemText>
            </Link>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <Link href="kontakt">
              <ListItemText className={classes.drawerItem} disableTypography>
                SUPPORT
              </ListItemText>
            </Link>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <ListItemText
              aria-controls="simple-menu"
              aria-haspopup="true"
              onMouseOver={handleClick}
              className={classes.drawerItem}
              disableTypography
            >
              AKTUELT
            </ListItemText>
          </ListItem>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{ zIndex: 1500 }}
          >
            <Link href="/stilling">
              <MenuItem onClick={handleClose}>Jobbe hos oss</MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <Link href="/salgsbetingelser">
              <MenuItem onClick={handleClose}>Salgsbetingelser</MenuItem>
            </Link>
          </Menu>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.header}>
            <Hidden lgUp>
              <MovingLogo />
            </Hidden>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default HeaderComponent;
