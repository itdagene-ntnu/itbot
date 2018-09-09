// Description:
// Test itbot

const time = new Date().getTime();

module.exports = robot => {
  robot.respond(/ping/i, msg => {
    msg.reply(`pong ${time}`);
  });
};
