import React, { useEffect, useState } from 'react';
import './yt.css'
import { Avatar } from '@mui/material';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
const Homecontent = () => {
const navigate=useNavigate();
const [viddata,setViddata]=useState();
 useEffect(()=>{
 axios.get('http://localhost:8000/videoData').then(res=>setViddata(res.data)).catch(err=>err);
return ()=>{}
}
 ,[])

  return (
    <>
        <div className='contents'>
        {viddata?.map((dat)=>{
          return (
          <li key={dat.id}>
             <div className='vidrow'>
                <div className="vidimgsrc">
                  <img className="vidimg" alt={dat.videoName} src={dat.source} onClick={()=>navigate(`/player/${dat.id}`)}/>
                </div>
                <div className='detailrow'>
                  <div>
                    <Avatar sx={{border:'1px solid grey',height:'50px',width:'100%'}} alt={dat.channelName} src={dat.channelImg}></Avatar>
                    </div>
                    <div className='channeldata'>
                     <li className='channelname'>{dat.channelName}</li>
                     <li className='viewage'>{dat.views}</li>
                     <li className='viewage'>{dat.age}</li>
                  </div>
                </div>
             </div>
          </li>
         )})}</div>
    </>
  )
}

export default Homecontent