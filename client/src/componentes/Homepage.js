
import Compras from './compras'
import Productos from './productos'
import Ratio from 'react-bootstrap/Ratio'
import { Example } from './offcanvas'

export function Homepage() {

    //https://i.imgur.com/28S7gN1.png aidipa
    //https://i.imgur.com/3IuovIE.jpg dilipa
    //https://i.imgur.com/CARLPmr.jpg abc

    return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <Ratio aspectRatio="auto" style={{ width: 400, height: 120 }}>
                            <embed type="image/png" src="https://i.imgur.com/CARLPmr.jpg"/>
                        </Ratio>
                    </div>
                    <div className='col-2 mt-2 mb-2'><Example/></div>
                </div>
                <div className='main row'>
                <div className='col-xxl-4 col-xl-4 col-lg-5 col-md-12 col-sm-12 col-xs-12'>
                    <Productos/>
                </div>
                <div className='col-xxl-8 col-xl-8 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                    <Compras/>
                </div>  
                </div>  
            </div>
    )
}

