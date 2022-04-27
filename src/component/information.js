import React from "react";
import Navbar from './Navbar'
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import './information.css'
import dataEx from '../json/example_data.json';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container,Tabs, Tab } from "react-bootstrap";

const information = () => {
    return(
        <>
        <Navbar/>
        <div className="inforD">
        <div className="main">
           <div className="textmain">
          <Link to="/">
           <button type="button" class="btn btn-primary" style = {{background:"#134B8A"}}><AiIcons.AiOutlineLeft/> Back</button>
            </Link>
            </div>

           <div className="mainin">
               .
              { dataEx.map( dataex => {
                   return(
                       <>
                       <div class="row">
                   <div class="col-md-6">
               <div className="cardbig">
                   <img className="imgcardbig" src={dataex.profile_image_url}/>
                
                <div class="row">
                    <div class="col">
                        <div className="cardbigna">
                          <h4>{dataex.name}</h4>
                        </div>
                    </div>
                    <div class="col-md-2">
                           <p className="rate1"><BsIcons.BsFillCircleFill/> {dataex.rating}</p>
                        </div>
               </div>

               <div class="row">
                    <div class="col-md-3">
                        <div className="cardbigte">
                          <h6>Address:</h6>
                        </div>
                    </div>
                    <div class="col">
                           <p>{dataex.address}</p>
                        </div>
               </div>
               <div class="row">
                    <div class="col-md-3">
                        <div className="cardbigte">
                          <h6>Opening Hour:</h6>
                        </div>
                    </div>
                    <div class="col">
                    <p class="card-text">
                           {dataex.operation_time.map((datatime,i) =>{
                              return(
                                  <div>
                                   {datatime.day}: {datatime.time_open} AM - {datatime.time_close} PM
                                  </div>
                              )
                           })}
                           </p>
                        </div>
               </div>
               </div>

                   </div>
                   <div class="col-md-1">
                       <div className="cardimgg">
                           <h5 className="textimgC">Images</h5>
                         <div className="cardimgg1">
                           <img className="imgCard" src={dataex.images[0]}/>
                           <img className="imgCard1" src={dataex.images[1]}/>
                           <img className="imgCard2" src={dataex.images[2]}/>
                         </div>
                       </div>
                   </div>
               </div>
               
               </>
                   )

               })}
           </div>
        </div>
        </div>

        <div className="inforM">
        <div className="textmain">
          <Link to="/">
           <button type="button" class="btn btn-primary" style = {{background:"#134B8A"}}><AiIcons.AiOutlineLeft/> Back</button>
            </Link>
            </div>
            <div className="aaa">
           
            <Tabs defaultActiveKey="information" id="uncontrolled-tab-example">
                <Tab eventKey="information" title="INFORMATION">
                    { dataEx.map( dataex => {
                   return(
                       <>
                        <div className="cardbig1">
                        <img className="imgcardbig" src={dataex.profile_image_url}/>
                        <div class="row">
                          <div class="col">
                             <div className="cardbigna">
                               <h4>{dataex.name}</h4>
                             </div>
                          </div>
                          <div class="col">
                             <p className="rate1"><BsIcons.BsFillCircleFill/> {dataex.rating}</p>
                          </div>
                         </div>
                         <div class="row">
                            <div class="col">
                              <div className="cardbigte">
                                <h6>Address:</h6>
                              </div>
                            </div>
                            <div class="col-md-3">
                               <p  className="cardbigte1">{dataex.address}</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-3">
                              <div className="cardbigte">
                                <h6>Opening Hour:</h6>
                              </div>
                            </div>
                           <div class="col">
                                <p class="card-text" className="cardbigte1">
                                {dataex.operation_time.map((datatime,i) =>{
                                     return(
                                        <div>
                                          {datatime.day}: {datatime.time_open} AM - {datatime.time_close} PM
                                        </div>
                                        )
                                    })}
                                 </p>
                            </div>
                           </div>
                        </div>
                       </>
                   )

               })}
                </Tab>
               <Tab eventKey="image" title="IMAGE">
               { dataEx.map( dataex => {
                   return(
                       <>
                       <div className="cardbig1">
                           <h5 className="textimgC">Images</h5>
                         <div className="cardimgg1">
                           <img className="imgCard" src={dataex.images[0]}/>
                           <img className="imgCard1" src={dataex.images[1]}/>
                           <img className="imgCard2" src={dataex.images[2]}/>
                         </div>
                         
                       </div>
                       </>
                   )

               })}
               </Tab>
             </Tabs>
             
             </div>
            </div>
            
        </>
    )
}

export default information;