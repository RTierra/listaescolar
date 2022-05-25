import Offcanvas from 'react-bootstrap/Offcanvas'
import { usePosts } from '../context/postConext'
import { Button } from 'react-bootstrap';

import { Table } from 'react-bootstrap';
import { Example2 } from './offcanvas2';



export function Example() {
    const {show, handleClose, handleShow, postsB, deletePostB, setarraynum, setShow2} = usePosts()
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Usuario
        </Button>
  
        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>LISTA DE PEDIDOS</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Productos</th>
          <th>Precio total</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        {postsB.map((post, i) => (
            <tr key={post._id}>
                <td>
                    {i+1}
                </td>
                <td>
                <Button variant="primary" onClick={() => {setShow2(true);  setarraynum(post.objetos)}}>
                  Productos
                </Button>
                    <Example2/>
                </td>
                <td>
                {post.cantidadTotal}
                </td>
                <td>
                    <button onClick={() => deletePostB(post._id)}>X</button>
                </td>
            </tr>
        ))}
      </tbody>
      </Table>
                
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  