import React, { useEffect, useState } from 'react';
import './yt.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Avatar } from '@mui/material';

function Videocontent() {
 const param= useParams();
 const [datas,setDatas]=useState();
 useEffect(()=>{  axios.get(`http://localhost:8000/videoData?id=${param.id}`).then(res=>setDatas(res.data)).catch(err=>err);
 return ()=>{}
},[param])
  return (
    <>
      <div className='videocontent'>
        <div>
         {datas?.map((dat)=>{
          let srccdat;
          dat.videosrc.includes("live")?srccdat =`https://www.youtube.com/embed/${dat.videosrc.split("live")[1]}`:srccdat =`https://www.youtube.com/embed/${dat.videosrc.split("be")[1]}`
          return(<>
             <iframe width="1080" height="415" src={srccdat} 
             title={dat.videoName} frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             </>
         )})}
        </div>
        <div className='videochanneldetails'>
        {datas?.map((dat)=>{
          return(<>
             <div>
                    <Avatar sx={{border:'1px solid grey',height:'100px',width:'100%'}} alt={dat.channelName} src={dat.channelImg}></Avatar>
                    </div>
                    <div className='channelvideodata'>
                     <li className='channelvidname'>{dat.channelName}</li>
                     <li className='vidviewage'>{dat.views}</li>
                     <li className='vidviewage'>{dat.age}</li>
                  </div>
                  </>
         )})}
        </div>
      </div>
    </>
    
  )
}

export default Videocontent