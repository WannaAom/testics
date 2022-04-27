import React, { useState } from "react";
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import logo from '../img/logo.png';
import './home.css';
import dataEx from '../json/example_data.json';
import Navnar from './Navbar'
import Information from "./information";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';

let today = new Date();
console.log("Day:", today.getDay());

const Home = () => {
    const [searchName, setSearchName] = useState('');
    const [selectCategories, setSelectCategories] = useState('');

    
    return(
        <>
        
        <div className="bgcolor">
            <Navnar/>

           <div className="main">
            
            <div class="row">
                <div class="col-md-6">
            <div className="textmain">
                <h4>Place List</h4> 
            </div>
            </div>
            <div class="col-md-6">
                <div class="row">
                  <div class="col-md-5">
                   <div className="textmain">
                      <select class="form-select"
                       onChange={(e) => {
                        setSelectCategories(e.target.value)
                      }}
                      >
                        <option selected value="">Open this select categories</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="bakery">Bakery</option>
                        <option value="cafe">Cafe</option>
                      </select>
                      </div>
                   </div>

                   <div class="col">
                   <div className="textmain">
                       <div class="input-group mb-3">
                          <input 
                             type="text" 
                             class="form-control" 
                             placeholder="Search name" 
                             onChange ={(event)=>{
                                 setSearchName(event.target.value);
                             }}
                             />
                       </div>
                    </div>
                   </div>
                   
                </div>
            </div>
            </div>
          
         {
             dataEx.filter((val,con)=> {
                 if(searchName == ""){
                     return val
                 } else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
                     return val
                 }
                 
              }
              ).map( dataex =>{
                 return(
                     <div key={dataex.id}>
            
            <div className="cardcss">
                
            <div class="card" style={{width: '28.5rem'}}>
             <div class="card-body">
               <div class="row">
                   <div class="col-md-2">
                      <img className="cardimg" src={dataex.profile_image_url}/>
                   </div>
                   <div class="col">
                      <h5 class="card-title">{dataex.name}</h5>
                      <div class="row">
                         <div class="col"> 
                         <p class="card-text"><AiIcons.AiTwotoneCalendar/> 10:00 AM - 20:00 PM  </p>
                       
                         {/* <p class="card-text">
                           {dataex.operation_time.map((datatime,i) =>{
                              return(
                                  <div>
                                   <AiIcons.AiTwotoneCalendar/> 
                                   {datatime.time_open} AM - {datatime.time_close} PM
                                  </div>
                              )
                           })}
                           </p> */}

                         </div>
                         <div class="col-md-3">
                           <p className="rate"><BsIcons.BsFillCircleFill/> {dataex.rating}</p>
                         </div>
                      </div>
                    </div>
                 </div> 
                <img className="cardimgex" src={dataex.images[0]}/>
                <img className="cardimgex1" src={dataex.images[1]}/>
                <img className="cardimgex2" src={dataex.images[2]}/>
             </div>
             </div>
       
         </div>
         <div className="cardcssmo">
             <div className="cardMo">
             <img className="cardimgMo" src={dataex.profile_image_url}/>
             <div class="row">
             <div class="col">
             <div className="ctMo">
                <h5 class="card-title">{dataex.name}</h5>
             </div>
             </div>
             <div class="col" >
                 
                      <p className="rate"><BsIcons.BsFillCircleFill/> {dataex.rating}</p>
               
             </div>
             <div className="ctMo">
                   <p class="card-text"><AiIcons.AiTwotoneCalendar/> 10:00 AM - 20:00 PM  </p>
             </div>
           
             </div>
             <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
             <div class="carousel-inner">
               <div class="carousel-item active">
                  <img className="cardimgex" src={dataex.images[0]}/>
                </div>
                <div class="carousel-item">
                   <img className="cardimgex1" src={dataex.images[1]}/>
                </div>
                <div class="carousel-item">
                   <img className="cardimgex2" src={dataex.images[2]}/>
                </div>
              </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                   <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                   <span class="carousel-control-next-icon" aria-hidden="true"></span>
                   <span class="visually-hidden">Next</span>
                </button>
              </div>
             </div>
         </div>
         
                     </div>
                 )
             })
         }
        </div>
        </div>
        </>
    )
}

export default Home;