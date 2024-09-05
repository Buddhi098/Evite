import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { useMediaQuery } from '@mui/system';
import Section1 from './Section1';
import { useParams } from 'react-router';
import Topbar from '../home/Topbar';
import Footer from '../home/Footer';
import { theme } from '../Theme';

const AllEvents = () => {
    const {title} = useParams();
    const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={theme}>
        <Topbar/>
        <Section1 title={title}/>
        <Footer/>
    </ThemeProvider>
  )
}

export default AllEvents
