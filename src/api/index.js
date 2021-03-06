const { Router } = require('express');

const router = new Router();

router.get("/", (req, res) => {
   res.status(200).json({
      text: 'Hello world!',
      params: req.query
   });
});

router.use((req, res, next) => res.status(404).send({
   error: 'Not found!'
}));

module.exports = router;