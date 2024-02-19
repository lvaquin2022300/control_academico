const jwt = require('jsonwebtoken')

const generarJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(
            payload,
            process.env.SECRETORPRIVATEKEY,
            {
                expiresIn: '1h',
            },
<<<<<<< HEAD
        (err, token) =>{
            err ? (console.log(err),reject('Nose pudo generar token')) : resolve(token)
        }   
=======
            (err, token) => {
                err ? (console.log(err), reject('Nose pudo generar token')) : resolve(token)
            }
>>>>>>> c52acb709b3eb06013654527bb25226375bc38c3
        )
    })
}

<<<<<<< HEAD
module.exports ={
=======
module.exports = {
>>>>>>> c52acb709b3eb06013654527bb25226375bc38c3
    generarJWT
}