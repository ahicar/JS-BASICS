
// speed limit = 70
// every 5 above -> 1 point
// use Math.floor() to round down
// 12 points -> suspended license

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit) {
    return "Ok";
  }
  const points = Math.ceil((speed - speedLimit) / kmPerPoint); // Calculate points based on speed above the limit
  if (points >= 12) return "License suspended";
  return `Points: ${points}`;
}

module.exports = { checkSpeed };