import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import SideBar from './SideBar';
import Feed from './Feed';
import RightPanel from './RightPanel';
import HomeHeader from '../components/HomeHeader';
import ProfileHeader from '../components/ProfileHeader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    item: {
      width: "-webkit-fill-available",
    },
    item2: {
        width: "-webkit-fill-available",
        display: 'flex',
        justifyContent: 'flex-end'

    },
    page: {
        backgroundColor: "rgb(23,32,42)"
    }
  })
  
function Layout(props) {
    const classes = useStyles();
    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = 'auto';
    }, [])

    return(
        <>
            <Grid container className={classes.page}>
                <Grid item className={classes.item2} sm={4}><SideBar /></Grid>
                <Grid item className={classes.item} sm={4}>
                        {props.page === "home" ? <HomeHeader /> : <ProfileHeader />}
                        <Feed page={props.page} />
                </Grid>
                <Grid item className={classes.item} sm={4}><RightPanel /></Grid>
            </Grid>
        </>
    )
}

export default Layout;