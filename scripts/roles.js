// Description:
// Mention different groups based on users roles

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

  robot.hear(/@roles/i, msg => {
    const roles = Object.keys(
      members
        .map(member => member.role)
        .reduce((obj, a) => ({ [a]: true, ...obj }), {})
    )
      .map(role => `    - ${role}`)
      .sort()
      .join("\n");
    msg.send(
      `You can use @<role> to mention users.\nUsers in this workspace have these roles:\n${roles}`
    );
  });
};
