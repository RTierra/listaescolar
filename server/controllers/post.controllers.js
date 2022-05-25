import Post from '../models/Post.js'
import Ventas from '../models/Ventas.js'
import VentasLista from '../models/PostLista.js'


//Productos - get
export const getPost = async (req, res) => {
    try {
        const productos = await Post.find().lean()
        res.send(productos)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: error.message})
    }
}


//Ventas - Ventas
export const createPostList = async (req, res) => {
    try{
        const { nombre, cantidad } = req.body;
        const vendedor = "Susana, Yari";

        //Tiempo
        var tiempo = new Date();

        const dia = tiempo.getDate();
        const mes = tiempo.getMonth() + 1;
        const ano = tiempo.getFullYear();

        const minuto = tiempo.getMinutes();
        const hora = tiempo.getHours();

        const date_d = dia;
        const date_ma = mes + "/" + ano;

        const date = dia + '/' + mes + '/' + ano;
        const time = hora + ':' + minuto;

        const newVentas = new Ventas({nombre, cantidad, vendedor,  date, date_d, date_ma, time});
        const res  = await newVentas.save();
        console.log(res)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: error.message})
    }
}

export const deletePostList = async (req, res) => {
    const  postRemoved = await Ventas.findByIdAndDelete(req.params.id)
    if(!postRemoved) return res.sendStatus(404)
    return res.sendStatus(204)
}

//Lista de productos - Ventas LIsta
export const getPostListCliente = async (req, res) => {
    try {
        const ventasLista = await VentasLista.find().lean()
        res.send(ventasLista)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: error.message})
    }
}

export const createPostListCliente = async (req, res) => {

    try{
        const {objetos, cantidadTotal} =  req.body
    
        var tiempo = new Date();

        const cliente = 'user1'
        const dia = tiempo.getDate();
        const mes = tiempo.getMonth() + 1;
        const ano = tiempo.getFullYear();
    
        const minuto = tiempo.getMinutes();
        const hora = tiempo.getHours();
    
        const date_d = dia;
        const date_ma = mes + "/" + ano;
    
        const date = dia + '/' + mes + '/' + ano;
        const time = hora + ':' + minuto;

        const newVentasLista = new VentasLista({cliente, objetos, cantidadTotal, date, date_d, date_ma, time})
        await newVentasLista.save();
        return res.json(newVentasLista)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: error.message})
    }
}

export const deletePostListCliente = async (req, res) => {
    const postRemoved = await VentasLista.findByIdAndDelete(req.params.id)
    if(!postRemoved) return res.sendStatus(404)
    return res.sendStatus(204)
}
