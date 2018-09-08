// Description:
//  Mention different groups based on users roles
// Commands
//  @<role> ... - Make itbot mention all users with that role
//  @<role> some text @<another role> ... - Make itbot mention multiple roles

const _ = require("lodash");

const members = require("../lib/members");

const createMention = username => `<@${username}>`;

module.exports = robot => {
  robot.hear(/@/i, msg => {
    const roles = msg.message.text
      .split(" ")
      .filter(word => word.includes("@"))
      .map(word => word.slice(1));
    const people = members.filter(member => roles.includes(member.role));
    const mentions = people
      .map(person => createMention(person.slack))
      .join(", ");
    msg.send(`${mentions}`);
  });
};
