import React, { Component } from 'react'
import {MdEmail, MdPhone} from    'react-icons/md'
import { Col, Row } from 'react-bootstrap'

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="text-white bg-gradient-to-br from-purple-900 via-black  to-purple-900  py-4  opacity-95">

                <h4  className=" pl-20 underline">  Contact  Me</h4>
                 <div   className="grid grid-cols-5   grid-flow-col gap-4">

                 <div  className="text-right    text-2xl   pt-4  pl-48"><MdEmail /></div>
                <p  className="text-left   pt-4  col-span-4"> anjalimehra728@gmail.com</p></div>


                <div   className="grid grid-cols-5   grid-flow-col gap-4">

                 <div  className="text-right    text-2xl   pt-2  pl-48"><MdPhone /></div>
                <p  className="text-left   pt-2  col-span-4"> (437)-247-8892</p></div>
                
            
                
                
                
                
                
                </div>
               
            


              
                
            </React.Fragment>
        )
    }
}
