const ftoc = function (f) {
  // parseFloat(f.toFixed(1))
  return parseFloat(((f - 32) / 1.8).toFixed(1))
};

const ctof = function (c) {
  return parseFloat(((c * 9 / 5) + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
