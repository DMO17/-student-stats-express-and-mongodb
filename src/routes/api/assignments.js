const { Router } = require("express");

const {
  createAssignment,
  getAllAssignment,
} = require("../../controller/api/assignments");

const router = Router();

router.post("/", createAssignment);
router.delete("/:assignmentId", getAllAssignment);

module.exports = router;
