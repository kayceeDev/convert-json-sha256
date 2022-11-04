# Console APP to populate csv with SHA256
This is a console app take a CSV, and generate a CHIP-0007 compatible json, and then calculates the sha256 of the json file and append it to each line in the csv (as a filename.output.csv)

The `CSV` used has been included in the `csv` folder since it needs to contain certain fields.
the generated `csv` is also saved in the `./csv` folder as  `filename.csv` 

## How to use the app
- Clone the repository
- `cd` into the root directory where the `index.js ` is present.
- Run `yarn install` to install all dependencies- 
- Then finally  start the app by running `node index.js` in the terminal.