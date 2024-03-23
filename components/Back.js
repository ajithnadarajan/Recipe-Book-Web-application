import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,

} from 'mdb-react-ui-kit';

export default function Back() {
  return (
    <MDBNavbar expand='lg' >
      <MDBContainer fluid>
        <MDBNavbarNav className='d-flex flex-row'>
          <MDBNavbarItem className='me-3 me-lg-0'>
           
           <Link to='/' style={{color:'black'}}> <MDBIcon fas icon='home' /></Link>  
           
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
    
  );
}
