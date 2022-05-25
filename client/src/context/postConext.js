import { useState, createContext, useContext, useEffect} from "react"
import { getPostsRequests, getPostRequestB, createPostRequestA, createPostRequestB, deletePostRequestB } from "../api/post"

const postContext = createContext()

export const usePosts = () => {
    const context = useContext(postContext)
    return context
}


export const PostProvider = ({children}) => {

    //offcanvas
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [show2, setShow2] = useState(false)
    const handleClose2 = () => setShow2(false)
    //const handleShow2 = () => setShow2(true)

    const [arraynum, setarraynum] = useState([]) //Cambia el offset2

    //De los posts
    const [posts, setPosts] = useState([]) //productos provenientes de la db

    const [postsB, setPostsB] = useState([]) //productos lista de utiles
    
    const [listadecompras, setListadecompras] = useState([]) //productos seleccionados el stado

    //posts
    
    //Productos
    const getPosts = async () => {
        const res = await getPostsRequests()
        setPosts(res.data)
    }
    
    //Ventas
    const creatPostA= async (post) => {
        const res = await createPostRequestA(post)
        console.log(res) 
    }


    //Lista de utiles
    const getPostsB = async () => {
        const res = await getPostRequestB()
        setPostsB(res.data)
        console.log(res)
    }

    const creatPostB = async (post) => {
        const res = await createPostRequestB(post)
        setPostsB([...postsB, res.data])
 
    }

    const deletePostB= async (id) => {
        const res = await deletePostRequestB(id)
        console.log(res)
        if (res.status === 204){
        setPostsB(postsB.filter((post) => post._id !== id))
        }
    }

    useEffect(()=>{
        getPosts()
    }, [])

    useEffect(()=>{
        getPostsB()
    }, [])



    return <postContext.Provider value={{
        posts,
        postsB,
        listadecompras,
        setListadecompras,
        creatPostA,
        creatPostB,
        deletePostB,
        show,
        handleClose,
        handleShow,
        show2,
        handleClose2,
        setShow2,
        arraynum,
        setarraynum
    }}>
        {children}
    </postContext.Provider>
}