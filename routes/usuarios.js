const { Router } = require('express');
const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
} = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet
    // (req, res) => {
    //     // res.status(403).json({
    //     //     msg: 'get API'
    //     // });
    //     res.json({
    //         msg: 'get API'
    //     });
    // }
);
router.put('/:id', usuariosPut
    // (req, res) => {
    //     res.status(400).json({
    //         msg: 'put API'
    //     });
    //}
);
router.post('/', usuariosPost
    // (req, res) => {
    //     res.status(201).json({
    //         msg: 'post API'
    //     });
    // }
);
router.delete('/', usuariosDelete
    // (req, res) => {
    //     res.json({
    //         msg: 'delete API'
    //     });
    // }
);
router.patch('/', usuariosPatch
    // (req, res) => {
    //     res.json({
    //         msg: 'patch API'
    //     });
    // }
);


module.exports = router;