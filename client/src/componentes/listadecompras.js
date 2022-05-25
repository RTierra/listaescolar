import React from 'react'
import { usePosts } from '../context/postConext'
import {Table} from 'react-bootstrap';

function Listadecompras() {
  
  const {listadecompras, setListadecompras, creatPostB} = usePosts()

  const precio = (x, y)=>{return x*y}

  return (
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio U.</th>
          <th>Precio</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        {listadecompras.map(listadecompra => (
          <tr key={listadecompra._id}>
            <td>
              {listadecompra.nombre}
            </td>
            <td>
              <button onClick={() => setListadecompras(listadecompras.map(function (li){if(li.nombre===listadecompra.nombre ){return{...li, cantidad: li.cantidad+1}}else {return {...li}}}))}>+1</button>
              <button onClick={() => setListadecompras(listadecompras.map(function (li){if(li.nombre===listadecompra.nombre & li.cantidad > 1){return{...li, cantidad: li.cantidad-1}}else {return {...li}}}))}>-1</button>
              {listadecompra.cantidad}
            </td>
            <td>
              {listadecompra.precio}             
            </td>
            <td>
              {precio(listadecompra.precio, listadecompra.cantidad)}
            </td>
            <td>
              <button onClick={() => setListadecompras(listadecompras.filter(lista => lista._id !== listadecompra._id))}>X</button>
            </td>
          </tr>
        ))}
        </tbody>
        <tfoot>
          <tr>
            <th>
              Precio total
            </th>
            <th>

            </th>
            <th>
              <button onClick={()=>{
                  //listadecompras.forEach(function(lista){creatPostA(lista)})
                  const objetos = listadecompras.map((student)=> ({identidad: student._id, nombre: student.nombre, precio: student.precio, cantidad: student.cantidad}))
                  const cantidadTotal = listadecompras.reduce(function (cant, list){return cant + precio(list.precio, list.cantidad)}, 0)   
                  creatPostB({objetos: objetos, cantidadTotal: cantidadTotal})
              }}>
                Guardar
              </button>
            </th>
            <th>
              {listadecompras.reduce(function (cant, list){return cant + precio(list.precio, list.cantidad)}, 0)}
            </th>
            <th>
              <button onClick={() => setListadecompras([])}>X</button>
            </th>
          </tr>
        </tfoot>
      </Table>
  )
}

export default Listadecompras