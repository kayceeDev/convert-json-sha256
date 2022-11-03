const { createHash } = require("crypto");

const convertStringTolist = (obj) => {
    let newObj = obj.split(";");
    newObj = newObj.map((obj) => {
      obj = obj.split(":");
      const formattedObj = { trait_type: obj[0], value: obj[1] };
      return formattedObj;
    });
    return newObj;
  };
  
  function hash(string) {
    return createHash("sha256").update(string).digest("hex");
  }

   module.exports = {
    convertStringTolist,
    hash
  }