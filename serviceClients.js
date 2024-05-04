//pool: Objeto que ya esta conectado a la base de datos
import { pool } from "./database.js";

//Traen todos los clientes de la base de datos
const getClients = async()=>{
    const datos = await pool.query('SELECT * FROM DEMO_CLIENTE');
    return datos.rows;
}

//Trae el registro de acuerdo al Id
const getClientById=async(id)=>{
    const datos = await pool.query('SELECT * FROM DEMO_CLIENTE WHERE ID=$1',[id]);
    return datos.rows;
}

//Inserta un nuevo registro en la tabla DEMO_CLIENTE
//Recibe un objeto cliente que a su vez ya tiene nombre y edad
const postClient =async(cliente)=>{
    const query = 'INSERT INTO DEMO_CLIENTE (NOMBRE, EDAD) VALUES($1,$2)';
    const values = [cliente.nombre, cliente.edad];
    await pool.query(query, values);
    return 'Registro insertado satisfactoriamente';
}

//Actualiza un registro de la tabla DEMO_CLIENTE
//Recibir un objeto cliente que a su vez ya tiene nombre, edad, id
const updateClient = async(cliente)=>{   
    const query = 'UPDATE DEMO_CLIENTE SET NOMBRE=$1, EDAD=$2 WHERE ID=$3';
    const values = [cliente.nombre, cliente.edad, cliente.id];
    await pool.query(query, values);
}

//Eliminar un cliente de la tabla DEMO_CLIENTE, solo necesito el ID
const deleteClient = (id)=>{   
    const query = 'DELETE FROM DEMO_CLIENTE WHERE ID=$1';
    const values = [id];
    pool.query(query, values);
}

export default {getClients, getClientById, postClient, updateClient, deleteClient};
