import mongoose from 'mongoose'
const { Schema } = mongoose


const ListaSchema = new Schema({
    cliente: {
        type: String,
        required: true,
        trim: true
    },
    objetos: {
        type: Array,
        required: true
    },
    cantidadTotal: {
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

export default mongoose.model('Lista', ListaSchema)