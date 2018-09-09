// Description:
// Return the current ip

const os = require("os");
const ifaces = os.networkInterfaces();
let ip;

Object.keys(ifaces).forEach(function(ifname) {
  let alias = 0;
  ifaces[ifname].forEach(function(iface) {
    if ("IPv4" !== iface.family || iface.internal !== false) {
      return;
    }

    if (alias >= 1) {
      ip = iface.address;
    } else {
      ip = iface.address;
    }
    ++alias;
  });
});

module.exports = robot => {
  robot.respond(/ip/i, msg => {
    msg.send(`${ip}`);
  });
};
