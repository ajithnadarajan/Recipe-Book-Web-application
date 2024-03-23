import React from 'react';
import { MDBRow, MDBCol,  } from 'mdb-react-ui-kit';
import './Home.css';
import Footer from '../navfolder/Footer';
import { Link } from 'react-router-dom';
import Search from './Search';
import Back from './Back';


export default function App() {
       
  return (
     <div>
      <Back/>
    <div>
      <h1 className='brand'>  <span style={{color:'black'}}>C</span><span style={{color:'red'}}>OO</span><span style={{color:'black'}}>K</span> <span style={{color:'black'}}>B</span><span style={{color:'red'}}>OO</span><span style={{color:'black'}}>K</span> </h1>
      <Search/>
    <MDBRow>
      <MDBCol lg='4' md='6' className='mb-4'>
        <Link to='/dosa'><img src='itemimg\dosa.jpg' className='img-fluid rounded' alt=''  /></Link>
        
      </MDBCol>

      <MDBCol lg='4' md='6' className='mb-4'>
      <Link to='/idli' > <img src='itemimg\idli.jpg' className='img-fluid rounded'  alt=''/></Link> 
      </MDBCol>

      <MDBCol lg='4' md='6' className='mb-4'>
        <Link to='/sambar' > <img
          src='itemimg\sambar.jpg' className='img-fluid rounded' alt='' /></Link>
       
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol lg='4' md='6' className='mb-4'>
        <Link to='/kesari' >  <img src='itemimg\kesari.jpg' className='img-fluid rounded' alt='' /></Link>
      
      </MDBCol>

      <MDBCol lg='4' md='6' className='mb-4'>
        <Link to='/venpongal'>
        <img
          src='itemimg\venpongal.jpg' className='img-fluid rounded'
          alt=''
        />
        </Link>
      
      </MDBCol>

      <MDBCol lg='4' md='6' className='mb-4'>
        <Link to='/vada'>
        <img
          src='itemimg\vada.jpg' className='img-fluid rounded'
          alt=''
        /></Link>
        
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol lg='4' md='6' className='mb-4'>
        <Link to='/jelabi'> <img src='itemimg\jelabi.jpg' className='img-fluid rounded' alt='' /></Link>
       
      </MDBCol>

      <MDBCol lg='4' md='6' className='mb-4'>
        <Link to='/gulabjamun'>
        <img
          src='itemimg\gulabjamun.jpg' className='img-fluid rounded'
          alt=''
        /></Link>
       
      </MDBCol>

      <MDBCol lg='4' md='6' className='mb-4'>
        <Link to='/murukku'>
         <img
          src='itemimg\murukku.jpg' className='img-fluid rounded'
          alt=''
        /></Link>
       
      </MDBCol>
    </MDBRow>
    <Footer/>
    </div>
    </div>
  );
}