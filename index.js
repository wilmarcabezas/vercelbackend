import express from 'express';
import conectar from './database.js';
import serviceClients from './serviceClients.js';

const app = express();
//Middleware: json() permite que la app entienda .json
app.use(express.json());

app.get('/',async(request, response)=>{
    const data = await serviceClients.getClients();
    response.status(200).json({data: data});
})

app.get('/:id',async(req, res)=>{
    const data = await serviceClients.getClientById(req.params.id);
    res.status(200).json({data: data});
})

app.post('/',async(req,res)=>{
    await serviceClients.postClient(req.body);
    res.status(201).json({data:'Registro insertado satisfactoriamente'});
})

app.put('/',async(req, res)=>{
    serviceClients.updateClient(req.body);
    res.status(200).json({data:'Registro actualizado satisfactoriamente'});
})

app.delete('/:id',async(req,res)=>{
    serviceClients.deleteClient(req.params.id);
    res.status(200).json({data:'Registro Eliminado'})
})

const port = 4000;
conectar();

app.listen(port, () => {console.log(`Server is running on port ${port}`)});