import { fetcher } from "../../helpers/fetcher"
import { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import classes from './Photos.module.scss'
import { Loader } from '../../components/UI'

interface PhotosData{
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}



export const Photos = () => {

const [photos,setPhotos] = useState<PhotosData[]|[]>([])


const handleGetPhotos = async () => {
    const result = await fetcher ('photos')
    console.log(result)
    setPhotos(result)
}

useEffect(() => {
    handleGetPhotos()
}, [])


return(
    <>
    <Container>
            {
            photos.length > 0 ?
                <div className={classes.wrapper}>
                    {photos.map((item) => (
                    <img src={item.url} alt={item.title} />
                    ))}
                </div >
                : <div className={classes.loaderWrapper}>
                 <Loader />
                </div>
            }
            
    </Container>
    </>
);
};