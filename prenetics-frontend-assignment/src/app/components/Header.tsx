import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles, Box, Typography } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import DialogSelect from './ModelOrganization';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
        color:"#000000"
        
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }
}))

const  Header: React.FC = () => {

    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" className={classes.root} elevation={1}  >
            <Toolbar>
                <Grid container
                    alignItems="center">
                    <Grid item>
                        {/* <InputBase
                            placeholder="Search topics"
                            className={classes.searchInput}
                            startAdornment={<SearchIcon fontSize="small" />}
                        /> */}
                        <Typography variant="h6" color="inherit" component="div">
                        Patient Management
          </Typography>
                        
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        {/* <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon fontSize="small" />
                            </Badge>
                        </IconButton> */}
                         {/* <Typography variant="h6" color="inherit" component="div">
                         Your Organization:Blacksheep 
          </Typography> */}
          <Typography variant="h6" color="inherit" >
                         <DialogSelect />
          </Typography>
                        
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        </Box>
    )
}

 export default Header;