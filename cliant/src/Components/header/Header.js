import React from 'react'
import {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { navigate } from '@reach/router';
import Hero from '../Hero/Hero';
import './header.css'   
import Serchbar from './Serchbar';
import Card from '../../Card/Card';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
   
    title: {
      flexGrow: 1,
    },
  }));
const Header = () => {
    const classes = useStyles();
    // useEffect(()=>{
    //   navigate('/reg')
    // },[]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
    
        <div className="main-page">
        <AppBar style={{backgroundColor:"cadetblue",borderRadius:"10px"}} position="static">
          <Toolbar>
            <IconButton  edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              
            </IconButton> 
            <Typography variant="h6" className={classes.title}>
            <img src={process.env.PUBLIC_URL +"/Logo.png" } width="150px" height="80px" alt="Logo" style={{float:"left"}} />

            </Typography> 
            <Button >Login</Button>
            <Button color="inherit">Register</Button>

          </Toolbar>
          
        </AppBar> 
          
        <Hero/>

           
        
        
      </div>
      
      
      </>
    )
}

export default Header
