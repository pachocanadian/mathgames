function getRandomInt(x) {
  // Make sure x is a positive integer
  if (x <= 1) return 1;

  // Generate a random integer between 1 and x (inclusive)
  return Math.floor(Math.random() * x) + 1;
}

function getRandomIntRange(min, max) {
  // Make sure max is a positive integer
  if (max <= 1) max = 1;

  // Make sure min is less than or equal to max
  if (min > max) {
    var temp = min;
    min = max;
    max = temp;
  }

  // Generate a random integer between min and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function how_many_success_graphics() {
  return 15;
}