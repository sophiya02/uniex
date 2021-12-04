
import React from 'react';
import { useState, useEffect } from 'react';
import Button from "../components/Button";
import Header from '../components/Header'
import './Gallery.css';
import Close from '@material-ui/icons/Close';
const apiKey = process.env.REACT_APP_NASA_KEY;

const Gallery = () => {
    let data=[
        {
            id:1,
            imgSrc: "https://picsum.photos/200/300"
        },
        {
            id:2,
            imgSrc: "https://picsum.photos/200/150"
        },
        {
            id:3,
            imgSrc: "https://picsum.photos/200/200"
        },
        {
            id:4,
            imgSrc: "https://picsum.photos/200/200"
        },
        {
            id:5,
            imgSrc: "https://picsum.photos/200/300"
        },
        {
            id:6,
            imgSrc: "https://picsum.photos/200/150"
        },
    ]
    const [photoData, setPhotoData] = useState(null);
    const [modal, setModal]= useState(false);
    const [tempImgSrc, setTempImgSrc]  = useState('');
    useEffect(() => {
        fetchPhoto();
        async function fetchPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            const data = await res.json();
            console.log(data);
            setPhotoData(data);
        }
    }, []);
    if (!photoData) return <div />;
    
    const getImg = (imgSrc)=>{
        setModal(true);
        setTempImgSrc(imgSrc);
    }
    return (
        <>
        
            <div className="main-container">
            <div className=" img-container">
            {photoData.media_type === "image" ?
                (<img className="img-cont" src={photoData.url} alt={photoData.title} />) : (
                        <iframe 
                            title="space-video"
                            src={photoData.url}
                            frameBorder="0"
                            gesture="media"
                            allow="encrypted-media"
                            allowFullScreen
                            className="photo"
                        />
                )}
                </div>
                <div className ="img-details">
                
                    <Header name={photoData.title}/>
                    <p className="img-date">{photoData.date}</p>
                    <p className="img-des">{photoData.explanation}</p>
                </div>
            </div>
            <Header name="Gallery"/>
            <div className={modal?"modal open":"modal"}>
                <img src={tempImgSrc}/>
                <Close className="svg" onClick={()=>setModal(false)}/>
            </div>
            <div className="gallery">
                {data.map((item, index)=>{
                    return(
                        <div className="pics" key={index} onClick={()=>{getImg(item.imgSrc)
                        }}>
                            <img src={item.imgSrc} className="pic"/>
                        </div>
                    )
                })}
            </div>
        </>
    );
}
export default Gallery;