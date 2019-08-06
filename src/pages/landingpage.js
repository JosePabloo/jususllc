import React, { Component } from 'react'
import HideAppBar from '../components/header/bar'
import HeadingPicture from '../components/landing/SectionCarousel'
import { Container } from '@material-ui/core'
import ImgMediaCard from '../components/body/Card'
import { makeStyles } from '@material-ui/core/styles';
import FullWidthGrid from '../components/body/Full'


export default class LandingPage extends Component {
    
    render() {
        const divStyle = {
            padding: "10px",
            margin: "10px"
          
          };
      

      return (
        <div>
    

            <HideAppBar></HideAppBar>
            <HeadingPicture></HeadingPicture>
            <FullWidthGrid> </FullWidthGrid>
       
  
  
            
       
            
           
            
            
        </div>
      )
    }
  }

