import mongoose from 'mongoose'
const { Schema } = mongoose



const ProductosSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    tipo: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    date_d: {
        type: String,
        required: true
    },
    date_ma: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
});

export default mongoose.model('Productos', ProductosSchema)