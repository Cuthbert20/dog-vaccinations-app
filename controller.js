const members = require("./data/mockMembers");

module.exports = {
  getMembers: (req, res) => {
    res.json(members);
  }
};
