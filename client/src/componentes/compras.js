import React from 'react'
import Card from './listadecompras'




function Productos() {
    
  return (
    <div>
        <div className='row'>
            <h4>LISTA DE PRODUCTOS SELECCIONADOS</h4>
        </div>
        <div className='row'>
            <div className='col'>
                <Card/>
            </div>
        </div>
    </div>
  )
}

export default Productos