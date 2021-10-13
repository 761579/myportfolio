import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import NavBar from './NavBar'
import bg from '../assets/bg.jpg'
export default class Experience extends Component {
    render() {
        return (
        
                  <React.Fragment>
                <div >
              
                   
                    <div className='bg-gradient-to-br from-blue-900 via-black to-blue-900       rounded-lg  shadow-2xl   mx-32  mt-10 '>
               <h1 className='text-white   rounded-lg  text-center shadow-2xl'>Experience</h1>
<div  className='text-white  mx-32  py-10'>
<Row>
<Col  xm={8 }  className='text-left' >
<h4  className='underline'> Full-Stack Developer </h4>
  <p>
  Humming Payment Technologiies, Toronto, Canada </p><p>
  <p className='underline'>  RESPONSIBILITIES: </p>    
  Creating prototypes and wireframes for website designs using Figma.<br/>
Working with front-end team to code the front-end part of the websites using React, React-Bootstrap, HTML, CSS.<br/>
Enhancing user experience and accomplishing webpage objectives.</p>
</Col>
<Col xm={4}   className='text-center'>  06/2021- Present</Col>
</Row>
<Row  className="pt-10 pb-10">
<Col  xm={8 }  className='text-left' >
<h4  className='underline'> Quality Assurance </h4>
  <p>
Club-Coffee, Etobicoke, Toronto, Canada
   </p>                                        
   <p className='underline'>  RESPONSIBILITIES: </p>    
   Quality tests of coffee pods in the lab and maintaining QA record.
</Col>
<Col xm={4}   className='text-center'> 09/2019 – 04/2021</Col>
</Row>



             

</div>
  </div>
  <br/>
  </div>
 
 

            </React.Fragment>
            
        )
    }
}
