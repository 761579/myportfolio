import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import NavBar from './NavBar'
import bg from '../assets/bg.jpg'

export default class Education extends Component {
    render() {
        return (
            <React.Fragment>
                <div
  
  >
                <div  className=''>
                
                    <div className='bg-gradient-to-br from-indigo-900 via-black  to-indigo-900    rounded-lg  shadow-2xl   mx-32  mt-10 '>
               <h1 className='text-white   text-center   rounded-lg  shadow-2xl'>Education </h1>
<div  className='text-white  mx-32  py-10'>
<Row>
<Col  xm={8 }  className='text-left' >
<h4  className='underline   '>Computer Programming </h4>
  <p>
      Lambton College, Toronto ,Canada
   </p>                                        
GPA: 3.4<br/>
Major Courses: C#, Java EE, Java SE, HTML, JavaScript, Python and Django, MySQL, Node JS, Bootstrap, CSS, MongoDB.</Col>
<Col xm={4}   className='text-center'>   09/2019 – 04/2021</Col>
</Row>
<br /><br/>
<Row>

<Col  xm={8 }  className='text-left' >
<h4  className='underline   '>Advanced Diploma in Computer Application      </h4>
  
<p>Dashmesh  Institute, India  </p>                                       
Grade: A <br/>
Major Courses: MICROSOFT OFFICE, WEB DESIGN</Col>
<Col xm={4}   className='text-center'>   08/2017 – 08/2018</Col>
</Row>
<br /><br/>
<Row>

<Col  xm={8 }  className='text-left' >
<h4  className='underline   '>Secondary Education    </h4>
  <p>Jawahar Navodaya Vidyalaya, Ropar ,India          </p>                             
  Percentage: 84% <br/>
Major Courses: Mathematics, Physics, Chemistry , English, Hindi</Col>
<Col xm={4}   className='text-center'>   03/2013 – 03/2017</Col>
</Row>
	
             

</div>
  </div>
  <br/>
  </div>
 
  </div>

            </React.Fragment>
        )
    }
}
