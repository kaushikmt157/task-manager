const express = require("express");
const router = express.Router();
const controller = require("../controllers/tasksController");

router.get("/", controller.getTasks);
router.post("/", controller.addTask);
router.put("/:id/toggle", controller.toggleTask);
router.delete("/:id", controller.deleteTask);

module.exports = router;
