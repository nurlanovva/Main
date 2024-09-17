import { Container } from "../../components/UI"
import { fetcher } from "../../helpers/fetcher"
import { useState, useEffect } from "react"
import { Loader } from "../../components/UI"

interface AlbumData{
    userId: number
    id: number
    title: string
}

export const Albums = () => {

    const [albums, setAlbums] = useState<AlbumData[] | []>([])

    const handleGetAlbums = async () => {
        const result = await fetcher('albums')
        setAlbums(result)
    }

    useEffect(() => {
        handleGetAlbums()
    }, [])



    return(
        <Container>
            <h1>Albums</h1>
            {albums.length > 0 ?
                <div>
                    <ol>
                    {albums.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                    </ol>
                </div>
            : 
            <div>
                <Loader />
            </div>
            }
        </Container>
    )

}