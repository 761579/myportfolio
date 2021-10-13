import React, { Component } from 'react'
import { Navbar, Nav, Container, Col, Row, Image } from 'react-bootstrap'
import anjali from '../assets/anjali.jpeg'

import bg from '../assets/bg.jpg'
import Education from './Education'
import Experience from './Experience'
import { Element, Scroll } from 'react-scroll'




import Projects from './projects'
import Footer from './Footer'
import NavBar from './NavBar'


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                
       <div
    
    style={{
      backgroundImage: 'url('+bg+')',
      backgroundAttachment: "fixed",
       backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height:'screen-height'

  
    }}
  >
       
 <NavBar />

                   <br/>
                  
   
<div   className='  mx-32  mt-20   bg-black  opacity-90  text-white  '>
  <Row><Col   xs={4}>
<img   src={anjali}   className='w-52 h-52  rounded-full   mt-10  ml-20 '/></Col>
    
 <Col  xs={8}> 
    <p   className='text-7xl   text-left  mt-16  ml-10   pt-2 font-semibold    '>  Hello,</p>
     <p   className='text-4xl   text-left    ml-10  '> I   am Anjali Devi    
     </p>  
</Col>
     </Row>

    
<p  className='text-lg   text-white  text-left ml-10   bg-black   pt-20    px- 10  pb-8  italic  '> 
      I am a recent Computer programming graduate with fundamental knowledge of  Java SE,
       JavaEE, React, Python, HTML, CSS, Bootstrap, React-Bootstrap, SQL Server Management Studio,
        MangoDB, Django Framework, SQL Lite, Oracle Database and  My SQL Workbench. Currently
        working as a full-stack developer looking for more opportunities to learn and grow more. 
        <br/><br/>
         </p>
     
</div>
<div   id="education"><Education /></div>
<div   id="experience"><Experience /></div>
<div   id="project"><Projects /></div>
<Footer />






</div>



            </React.Fragment>
        )
    }
}
