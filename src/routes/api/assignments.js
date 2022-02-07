const { Router } = require("express");

const {
  createAssignment,
  deleteAssignment,
} = require("../../controller/api/assignments");

const router = Router({ mergeParams: true });

router.post("/", createAssignment);
router.delete("/:assignmentId", deleteAssignment);

module.exports = router;
