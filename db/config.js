const mongoose = require('mongoose');
<<<<<<< HEAD

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CNN, {});
        console.log('Base de datos conectada');
    }catch(e){
        throw new Error('Error al conectar a la base de datos ', e);
=======
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {});
        console.log("base de datos conectado exitosamente");
    } catch (error) {
        throw new Error("Error al conectar a la DB ", error);
>>>>>>> c52acb709b3eb06013654527bb25226375bc38c3
    }
};

module.exports = {
    dbConnection
}