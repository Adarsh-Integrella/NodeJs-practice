const requiredDetails = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("Please provide age.");
  } else if (req.query.age < 18) {
    resp.send("You are not eligible to access the site.");
  } else {
    next();
  }
};

module.exports = requiredDetails;
