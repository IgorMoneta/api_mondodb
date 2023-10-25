import { Schema, model, Document } from "mongoose";

interface Futebol extends Document {
    name: string;
    estadio: string;
    fundacao: number;
    titulos: number;

}

const FutebolSchema = new Schema<Futebol>({
    name: { type: String, required: true },
    estadio: { type: String, required: true },
    fundacao: { type: Number, required: true },
    titulos: { type: Number, required: true }, 

});

export default model<Futebol>('Futebol', FutebolSchema);
