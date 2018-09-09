// Description:
// Displays help information to the user

const help = [
  {
    command: "itbot help",
    description: "Reply with help overview"
  },
  {
    command: "itbot ping",
    desciption: "Check if itbot is live"
  },
  {
    command: "@noen",
    description: "Mention a random user"
  },
  {
    command: "@<role>",
    description: "Mention all users with that role"
  },
  {
    command: "@<role> some text @<anotherRole>",
    description: "Mention all users with these roles"
  },
  {
    command: "@roles",
    description: "Mention all roles in the current system"
  }
];

module.exports = robot => {
  robot.respond(/help/i, msg => {
    const response = help.map(cmd => {
      return `\nCommand: ${cmd.command} - ${cmd.description}`;
    });
    msg.reply(response);
  });
};
