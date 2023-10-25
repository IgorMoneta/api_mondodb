import { Request, Response } from "express";
import Futebol from '../models/futebol.models';

export const createFutebol = async (req: Request, res: Response) =>{
    try{
        const futebol = new Futebol(req.body);
        const savedFutebol = await futebol.save();
        res.status(201).json(savedFutebol);     
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o futebol'});    
    }
};
export const getFutebol = async (req: Request, res: Response) =>{
    try{
        const futebol = await Futebol.find();
        res.status(200).json(futebol);
    } catch (error) {
        res.status(500).json({error: 'Erro ao criar o futebol'});
    }
};
export const getFutebolID = async (req: Request, res: Response) =>{
    try{
        const futebol = await Futebol.findById(req.params.id);
        if ( !futebol) { 
            res.status(404).json({ error: 'Futebol não encontrado'});
        } else {
            res.status(200).json(futebol);
        }              
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar o futebol'})
        }
    };
export const putFutebol = async (req: Request, res: Response) =>{
    try{
        const futebol = await Futebol.findByIdAndUpdate(req.params.id, req.body , { new:true });
        if(!futebol) {
            res.status(404).json({ error: 'Futebol não encontrado'});
        } else {
            res.status(200).json(futebol);
        }
    }catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar futebol'});
    }
};

export const deleteFutebol = async (req: Request, res: Response) =>{
    try { 
        const futebol = await Futebol.findByIdAndDelete(req.params.id);
        if (!futebol) {
            res.status(404).json({ error: 'Futebol não encontrado'});
    } else {
        res.status(204).send();
    } 
    }catch (error) {
        res.status(500).json({ error: 'Erro ao deletar futebol'});
    }
};