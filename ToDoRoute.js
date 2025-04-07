const {Router} = require("express");
const {saveToDO, updateToDo, deleteToDo} = require("../controllers/ToDoController");
const {getToDo} = require("../controllers/ToDoController");


const router = Router()

router.get('/',getToDo)
router.post('/save', saveToDO)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)

module.exports = router;