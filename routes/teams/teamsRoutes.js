const express = require("express");
const router = express.Router();
const teamController = require("../../controllers/teams/teamsController");

router.post("/teams", teamController.createTeam);
router.get("/teams", teamController.getAllTeams);
router.get("/teams", teamController.getTeamByTeamName);
router.get("/teams/:id", teamController.getTeamById);
router.put("/teams/:id", teamController.updateTeamById);

module.exports = router;
