// Description:
// Mention everybody

const members = require("../lib/members");

const createMention = username => `<@${username}>`;

module.exports = robot => {
  robot.hear(/@all/i, msg => {
    const mentions = members
      .map(person => createMention(person.slack))
      .join(", ");
    msg.send(`${mentions}`);
  });
};
