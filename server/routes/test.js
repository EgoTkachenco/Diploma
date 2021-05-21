const express = require('express');
const router = express.Router();
const { createTest, getTests, updateTest, removeTest } = require('../controllers/test')

router.get('/', async (req, res) => {
    let tests = await getTests();
    res.status(200).send({ status: true, tests: tests });
})
router.post('/', async (req, res) => {
    let form = req.body;
    if (form && form.author_id && form.title && form.description && form.errors) {
        let test = await createTest({
            author_id: form.author_id,
            title: form.title,
            description: form.description,
            errors: form.errors
        })
        res.status(200).send({ status: true, test: test });
    } else {
        res.status(500).send({ status: false, message: 'author_id, title, errors and description required' });
    }
    
})
router.put('/', async (req, res) => {
    let form = req.body;
    if (form && form.id && form.title && form.description) {
        let test = await updateTest({ id: form.id, title: form.title, description: form.description })
        res.status(200).send({ status: true, test: test });
    } else {
        res.status(500).send({ status: false, message: 'id, title and description required' });
    }
})
router.delete('/', async (req, res) => {
    let form = req.body;
    if (form && form.id) {
        await removeTest({ id: form.id })
        res.status(200).send({ status: true });
    } else {
        res.status(500).send({ status: false, message: 'id required' });
    }
})

module.exports = router;