import React, {useState} from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';


function Cards(props) {
    const [title, setTitle]= useState("card title")
  return (
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src={props.image} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle > {title}
        </MDBCardTitle>
        <MDBCardText>
        {props.text}
        </MDBCardText>
        <MDBBtn href='#' color={props.color} onClick={()=>setTitle(props.title)}>open card title</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}


export default Cards