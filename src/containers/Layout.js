import React from 'react';
import Grid from '@material-ui/core/Grid'
import SideBar from '../components/SideBar';
import Feed from '../components/Feed';
import RightPanel from '../components/RightPanel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    item: {
      width: "-webkit-fill-available"
    },
    page: {
        backgroundColor: "rgb(23,32,42)"
    }
  })
  
function Layout(props) {
    const classes = useStyles();
    return(
        <>
            <Grid container className={classes.page}>
                <Grid item className={classes.item} sm={3}><SideBar /></Grid>
                <Grid item className={classes.item} sm={5}><Feed page={props.page} /></Grid>
                <Grid item className={classes.item} sm={4}><RightPanel /></Grid>
            </Grid>
        </>
    )
}

export default Layout;