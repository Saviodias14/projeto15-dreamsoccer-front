import { useEffect, useRef } from "react";

export default function AudioPlayer({ audioSrc, hidden }) {
    const audioRef = useRef(null);
  
    useEffect(() =>{
        if(!hidden){
            audioRef.current.load()
            audioRef.current.play()
            setTimeout(()=>{
                audioRef.current.pause()
            },3000)
        }
    },[hidden])
  
    return (
      <div>
        <audio ref={audioRef} src={audioSrc} volume={0.5}/>
      </div>
    );
  }