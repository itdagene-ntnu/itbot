// Description:
// Test itbot

module.exports = robot => {
  robot.respond(/ping/i, msg => {
    msg.reply(`pong ${new Date().getTime();
}`);
  });
};
