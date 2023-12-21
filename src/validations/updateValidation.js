const {check}= require('express-validator');


 /*const validateImgFile = (value,{req})=>{
    if(!req.file){
        throw new Error('Debe tener un archivo Imagen')
    }
    const AcceptExtensions = ['jpg','jpeg','png'];

    const fileExtensions = req.file.originalname.split('.').pop().toLowerCase();

    if(!AcceptExtensions.includes(fileExtensions)){

        throw new Error('El archivo debe ser de tipo jpg, jpeg o png.')
    }
    return true;
}

const imageValidation = check('image').custom(validateImgFile);
 */
module.exports= [
    check('name')
    .not()
    .isEmpty()
    .withMessage('Ingresar un nombre de producto')
    .isLength({min:5})
    .withMessage('Debe tener al menos 5 caracteres'),

    check('description')
    .not()
    .isEmpty()
    .withMessage('Debe ingresar una descripcion')
    .isLength({min:20})
    .withMessage('Debe tener al menos 20 caracteres'),
    /* imageValidation */

]
    
