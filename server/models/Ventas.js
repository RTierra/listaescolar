import mongoose from 'mongoose'
const { Schema } = mongoose



const VentasSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  cantidad: {
    type: Number,
    required: true
  },
  vendedor:{
    type: String,
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

export default mongoose.model('Ventas', VentasSchema);