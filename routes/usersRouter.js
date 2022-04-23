const express = require('express');
const UsersService = require('../services/UsersService');
const router = express.Router();
const service = new UsersService();
// router.get('/', (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset,
//     });
//   } else {
//     res.send('No hay parámetros');
//   }
// });


router.get('/', async (req, res, next) => {
    try {
      const users = await service.find();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;
