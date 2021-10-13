import React, { Component } from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import PBG from '../assets/PBG.jpg'
import homemehra from '../assets/projects pic/homemehra.png'
import packags from '../assets/projects pic/packags.png'
import booking from '../assets/projects pic/booking.JPG'
import home from '../assets/projects pic/home.png'
import display from '../assets/projects pic/display.png'
import book_form from '../assets/projects pic/book_form.png'
import  update from '../assets/projects pic/update.png'
import about from '../assets/projects pic/about.JPG'
import { Document, Page } from 'react-pdf' 
import  pdf from '../assets/pdf.pdf'
import Footer from './Footer'


const scrollContainerStyle = { height: "400px" }

export default class Projects extends Component {
    render() {
        return (

          <React.Fragment>
            <div  className="bg-black   bg-fixed  bg-center  bg-no-repeat  bg-cover   pb-20">
            <h1    className='text-white  text-center  pt-10'>PROJECTS</h1>
            <p   className='ps-4  text-white pt-5  text-xl'> Objective:  Designing front-end of a website using only HTML and CSS          
            <a   href="https://github.com/761579/mehra-tour-and-travels.git "    className="text-right  pl-96 ">GitHub Link</a>

            
            
            </p>
           <p   className='ps-4  text-white  text-lg'>Programming Language: HTML, CSS</p>

            

            <p   className='ps-4 text-white  underline text-xl'> Description</p>
            <div  className="grid grid-cols-4  gap-4   pb-10  border-b-2 border-white">
          
         <div  className=" "  >
         <div    className="bg-opacity   mt-2   ml-4  py-4 rounded-xl">
            <p   className='text-left pl-5  text-white text-lg'> The Front-end part of a website has been designed(with wireframes and a working sample) 
             as a final project using only HTML and CSS for an imaginary company that offers trips. It is designed to provide 
             all information regarding available packages and offers. It also includes forms to contact the company and book packages online.</p>
             </div>


         </div>

       <div   className="col-span-3">
       <Carousel   className="m-1 border-8 border-indigo-600">   
           
           <Carousel.Item  className="scrollbar scrollbar-primary "  style={scrollContainerStyle}  >
             <img
               className="    mr-5"
               src={homemehra}
               alt="First slide"
             />
           
             
           </Carousel.Item>
           <Carousel.Item    className="scrollbar scrollbar-primary "  style={scrollContainerStyle}>
             <img
               className="     h-100   w-100 mr-5"
               src={about}
               alt="second slide"
         
             
             />
             
           </Carousel.Item>
           <Carousel.Item   className="scrollbar scrollbar-primary  "  style={scrollContainerStyle}>
             <img
               className="    mr-5"
               src={packags}
               alt="Second slide"
             />
         
            
           </Carousel.Item>
           <Carousel.Item    className="scrollbar scrollbar-primary "  style={scrollContainerStyle}>
             <img
               className="     h-100   w-100 mr-5"
               src={booking}
               alt="Third slide"
         
             
             />
         
           </Carousel.Item>
          
           
         </Carousel>
       </div>
          
           
            

            </div>
            <p   className='ps-4    pt-20 text-white  text-xl'>Objective:  Using Django framework, create a web application and include all  CRUD operations in it.     
            <a   href="https://github.com/761579/hospital.git "    className="text-right pl-52">GitHub Link</a>
          
            
            
            </p>
           

            
            <p   className='ps-4  text-white  text-lg'>Programming Language: Python, CSS, Bootstrap, Html</p>
            <p   className='ps-4 text-white  underline text-xl'> Description</p>
            <div    className="grid grid-cols-4  gap-4   pb-10  border-b-2 border-white" >

            
              <div    className="bg-op   mt-1   ml-2  py-4 rounded-xl">
            <p   className='text-left pl-5  text-white text-lg'> This project has been created in VS code using the Django framework. 
            This project aims to showcase all the crud(Create, Read, Update, Delete) operations. It is designed for hospital management to
             book appointments, view all booked appointments, delete and update existing appointments. 
             The data has been stored in SqlLite3, and phone no. is used as an id for patients.</p>

              </div>
              <div    className="col-span-3" >
              <Carousel   className="m-1 border-8 border-indigo-600">   
           
           <Carousel.Item  className="scrollbar scrollbar-primary "  style={scrollContainerStyle}  >
             <img
               className="    mr-5"
               src={home}
               alt="First slide"
             />
             
           </Carousel.Item>
           <Carousel.Item   className="scrollbar scrollbar-primary  "  style={scrollContainerStyle}>
             <img
               className="    mr-5"
               src={book_form}
               alt="Second slide"
             />
         
            
           </Carousel.Item>
           <Carousel.Item    className="scrollbar scrollbar-primary "  style={scrollContainerStyle}>
             <img
               className="     h-100   w-100 mr-5"
               src={display}
               alt="Third slide"
         
             
             />
           </Carousel.Item>
           <Carousel.Item    className="scrollbar scrollbar-primary "  style={scrollContainerStyle}>
             <img
               className="     h-100   w-100 mr-5"
               src={update}
               alt="Third slide"
         
             
             />
           </Carousel.Item>
           
         </Carousel>



              </div>


            </div>
            <p  className= 'ps-4  pt-10 text-white  text-2xl'>Objective:</p>
<p   className='ps-4  text-white  mx-24 text-xl'> Create a Database structure for any company or system, write 
all test cases to fulfill all the project requirements, and create a document (pdf) using LaTeX that includes a goal, 
requirements, UML diagrams,  traceability matrix, and all of these test cases.
    <br/>        
    </p>
    

<p   className='ps-4 text-white text-xl  underline  pt-2'> Description</p>
          
           
            <p   className='text-left pl-5    mx-24 text-white text-lg'>This project has been created using SQL Server Management studio. 
            
          The main goal of this project is to help the hostel management maintain their records of allotted rooms, empty rooms, 
          students fee deadlines and mess timings.The Database contains six tables students, hostels, rooms, payments, mess, visitors.
            </p>
            <a href={pdf}   className="pt-5    mx-24 ps-4">Click here to view LaTeX document of this project.</a>


            </div>
           
            </React.Fragment>
        )
    }
}
