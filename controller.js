const members = require("./data/mockMembers");
const uuid = require("uuid");

module.exports = {
  getMembers: (req, res) => {
    res.json(members);
  },
  getMember: (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
      res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
      res
        .status(400)
        .json({ msg: `No member with the id of ${req.params.id}` });
    }
  },
  createMember: (req, res) => {
    const {
      firstName,
      lastName,
      email,
      phone,
      dogName,
      vaccinations,
      dogSize
    } = req.body;
    const newMember = {
      id: uuid.v4(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      dogName: dogName,
      vaccinations: vaccinations,
      dogSize: dogSize
    };
    console.log(newMember);
    if (!newMember.firstName) {
      return res.status(400).json({ msg: "Please include a First Name" });
    }
    members.push(newMember);
    res.json(members);
  }
};
