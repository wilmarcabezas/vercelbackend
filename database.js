import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  connectionString: "postgres://default:9inh7VqxKsAu@ep-rapid-cake-a42er0m9.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
})

const conectar=()=>{
    pool.connect()
    .then(()=>{
        console.log('Conectado Satisfactoriamente!')
    })
    .catch((error)=>{
        console.log('Error al conectar', error)
    })
}

export default conectar;
export {pool}