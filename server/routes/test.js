const express = require('express');
const router = express.Router();
const { createTest, getTests } = require('../controllers/test')

router.get('/', async (req, res) => {
    let tests = await getTests();
    res.status(200).send({ status: true, tests: tests });
})
router.post('/', async (req, res) => {
    let test = await createTest({ author_id: 1, title: 'New test', description: 'Test description' })
    res.status(200).send({ status: true, test: test });
})
router.put('/', async (req, res) => {
    let test = await createTest({ author_id: 1, title: 'New test', description: 'Test description' })
    res.status(200).send({ status: true, test: test });
})

module.exports = router;