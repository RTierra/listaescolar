import React, { useState } from 'react'
import { usePosts } from '../context/postConext'
import {Table} from 'react-bootstrap';

function Productos() {

    const {posts} = usePosts()

    const {listadecompras, setListadecompras} = usePosts()
    const [searchTerm, setSearchTerm ] = useState('')

    return (
        <Table striped bordered hover>
         <thead>
            <tr>
            <th>PRODUCTOS DISPONIBLES</th>
            <th><a href="http://192.168.100.218:5000/inventario" role="button" className=''><h4>Inventario</h4></a></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                <input type="text" placeholder="Escribe aqui para buscar ..." onChange={(event) => setSearchTerm(event.target.value)}/>
                </td>
                <td>
                </td>
            </tr>
            {posts.filter((val)=>{
                if(searchTerm===""){
                    return ""
                } else if(val.nombre.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
                    else{return ''}
            }).map((post) => {
                return(
            <tr key={post._id}>
                <td>
                    {post.nombre}
                </td>
                <td>    

                
                {listadecompras.map((gg)=>{if(gg.nombre === post.nombre){return "agregada"}
                else{return ""}})}

                    <button onClick={() => {
                        setListadecompras([...listadecompras, {...post, cantidad: 1}])}
                }>☑</button>    
                </td>
            </tr>
            )})}
        </tbody> 
        </Table>
    )
}

export default Productos