const csv = require("csv-parser");
const fs = require("fs");
const { Parser } = require("json2csv");
const { convertStringTolist, hash } = require("./utils");

const createShaCsv = (filename) => {
  const dataArray = [];
  fs.createReadStream(filename)
    .pipe(csv())
    .on("data", function (data) {
      my_dict = {
        format: "CHIP-0007",
        name: data.Name,
        description: data.Description,
        minting_tool: "SuperMinter/2.5.2",
        sensitive_content: false,
        series_number: data["Series Number"],
        series_total: "1000",
        attributes: convertStringTolist(data.attributes),
        collection: {
          name: "Zuri NFT Tickets for Free Lunch",
          id: "b774f676-c1d5-422e-beed-00ef5510c64d",
          attributes: [
            {
              type: "description",
              value: "Rewards for accomplishments during HNGi9.",
            },
          ],
        },
      };
      const SHA = hash(JSON.stringify(my_dict));
      data.SHA = SHA;
      dataArray.push(data);
    })
    .on("end", function () {
      const json2csvParser = new Parser(Object.keys(dataArray[0]));
      const result = json2csvParser.parse(dataArray);
      fs.writeFileSync("./csv/filename.csv", result);
    });
};

createShaCsv("./csv/hngcsv.csv");
