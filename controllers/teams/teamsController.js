const Team = require("../../models/teams/teamsModels");

async function createTeam(req, res) {
  const { teamName, description } = req.body;
  if (!teamName) {
    return res.status(400).json({ error: 'Team name is required' });
  }
  try {
    const isExsist = await Team.findOne({ teamName: { $regex: new RegExp(teamName, 'i') } });
    if (isExsist) {
      res.status(400).json({ message: 'Team is already exsist!'});
    }else{
      const newTeam = new Team({ 
          teamName, 
          description
      });
      await newTeam.save();
      res.status(201).json({
        message: 'Teamm created successfully',
        result: newTeam
      });
    }
    
  } catch (error) {
    console.error("Error creating team:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function getAllTeams(req, res) {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    console.error("Error fetching team:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function getTeamByTeamName(req, res) {
  const { teamName } = req.query;
  if (!teamName || teamName.trim() === '') {
    return res.status(400).json({ error: 'TeamName is required' });
  }
  try {
    const team = await Team.findOne({ teamName: { $regex: new RegExp(teamName, 'i') } });
    if (team) {
      res.status(200).json(team);
    } else {
      res.status(404).json({ error: 'Team not found' });
    }
  } catch (error) {
    console.error("Error fetching team by team name:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function getTeamById(req,res) {
  try {
    const { id } = req.params
    const team = await Team.findById(id)
    if ( team ) {
      return res.status(200).json(team)
    } else {
      return res.status(404).json({ message: "No user found!"})
    }
  } catch (error) {
    console.error("Error fetching team by id:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
async function updateTeamById(req,res){
  try {
    const teamId = req.params.id
    const { ...updatedFields } = req.body;
    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({ error: "Team not found." });
    }
    Object.assign(team, updatedFields);
    await team.save();
    res.status(200).json(team);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
module.exports = {
  createTeam,
  getAllTeams,
  getTeamByTeamName,
  getTeamById,
  updateTeamById
};