import React from 'react';
import Grid from '@material-ui/core/Grid'
import SideBar from '../components/SideBar';
import Feed from '../components/Feed';
import RightPanel from '../components/RightPanel';

function Layout(props) {
    return(
        <>
            <Grid container>
                <Grid item sm={3}><SideBar /></Grid>
                <Grid item sm={5}><Feed page={props.page} /></Grid>
                <Grid item sm={4}><RightPanel /></Grid>
            </Grid>
        </>
    )
}

export default Layout;