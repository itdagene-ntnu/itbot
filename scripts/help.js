// Description:
// Displays help information to the user

const help = [
  {
    command: "@help",
    description: "Make itbot reply with help overview"
  },
  {
    command: "@noen",
    description: "Make itbot mention a random person"
  },
  {
    command: "@<role>",
    description: "Make itbot mention all users with that role"
  },
  {
    command: "@<role> some text @<anotherRole>",
    description: "Make itbot mention all users with that role"
  },
  {
    command: "@roles",
    description: "Make itbot tell you all roles in the current system"
  }
];

module.exports = robot => {
  robot.hear(/@help/i, msg => {
    const response = help.map(cmd => {
      return `\nCommand: ${cmd.command} - ${cmd.description}`;
    });
    msg.reply(response);
  });
};
