const { check, body } = require("express-validator");

const validationsCreate = [ 
  check("category")
  .notEmpty()
  .withMessage('La categoría es obligatoria'),
  check("image")
  .notEmpty()
  .withMessage('La imagen es obligatoria'),
  check("name")
  .notEmpty()
  .withMessage('El nombre es obligatorio')
  .isLength({ min: 2 })
  .withMessage('Debe tener como mínimo dos caracteres')
  .bail()
  .matches(/^[a-zA-Z0-9]+$/)
  .withMessage('Solo se permiten letras y números'),
  check("brand")
  .notEmpty()
  .withMessage('La marca es obligatoria'),
  check("model")
  .notEmpty()
  .withMessage('El modelo es obligatorio')
  .isLength({ min: 3 })
  .withMessage('Debe tener como mínimo tres caracteres')
  .bail()
  .matches(/^[a-zA-Z0-9]+$/)
  .withMessage('Solo se permiten letras y números'),
  check('description')
  .notEmpty()
  .withMessage('La descripción es obligatoria')
  .isLength({ min: 10, max: 250 })
  .withMessage('Debe tener entre 10 y 250 caracteres'),
  check('price')
    .notEmpty()
    .withMessage('El precio es obligatorio')
    .isInt({ allow_leading_zeroes: false })
    .withMessage('Solo se permiten números enteros'),
];

module.exports = validationsCreate;
