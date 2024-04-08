import mongoose from 'mongoose';

const schemaTime = new mongoose.Schema({
  nombre: String,
  email: String,
  tiempo: {
    years: {},
    meses: {
      enero: Number,
      febrero: Number,
      marzo: Number,
      abril: Number,
      mayo: Number,
      junio: Number,
      julio: Number,
      agosto: Number,
      septiembre: Number,
      octubre: Number,
      noviembre: Number,
      diciembre: Number
    }
  }
});

export default mongoose.models.Time || mongoose.model('Time', schemaTime);
