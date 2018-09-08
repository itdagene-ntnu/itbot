// Description:
//  Mention different groups based on users roles
// Commands
//  @noen ... - itbot will mention a random user

const _ = require("lodash");

const members = require("../lib/members");

const prefixes = [
  "Get rekt",
  "Do stuff",
  "Move it",
  "R.I.P",
  "Boom, eid",
  "Bad luck",
  "You lose",
  "Rekt",
  "Loser",
  "The chosen one"
];

const createMention = username => `<@${username}>`;

module.exports = robot => {
  robot.hear(/@noen/i, msg => {
    const pick = _.sample(members);
    const mention = createMention(pick.slack);
    const prefix = _.sample(prefixes);
    msg.send(`${prefix} -> ${mention}`);
  });
};
