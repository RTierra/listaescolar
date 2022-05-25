import Offcanvas from 'react-bootstrap/Offcanvas'
import { usePosts } from '../context/postConext'
import { Table } from 'react-bootstrap';

export function Example2() {
    
    const {show2, handleClose2, arraynum} = usePosts()
    return (
      <>
        <Offcanvas show={show2} onHide={handleClose2} placement={"end"}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Utiles</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Productos</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {arraynum.map((post, i) => (
          <tr key={i}>
            <td>{i+1}</td>
            <td>
              {post.nombre}
            </td>
            <td>
              {post.cantidad}
            </td>
            <td>
              {post.precio}
            </td>
            <td>
              {post.cantidad * post.precio}
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