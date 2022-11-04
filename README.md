# Console APP to populate csv with SHA256

This is a console app take a `.csv`, and generate a CHIP-0007 compatible json, and then calculates the sha256 of the json file and append it to each line in the csv (as a filename.output.csv)

The `csv` used has been included in the `csv` folder as `hngscv.csv` folder since it needs to contain certain fields.
the generated `csv` is also saved in the `./csv` folder as `filename.output.csv`.

### Sample Reference

- [Chip-0007 JSON Schema Example](https://github.com/Chia-Network/chips/blob/main/assets/chip-0007/example.json)

### Important Notes

The default file used when this script is `hngscv.csv`. To add your own file, you need to manually include the file in the `csv folder` and add the filename as an optional parameter in the command line when running the app.

e.g

```js
node index.js filename
```

You can also optionally include the team name as a third argument in the command line. This name will be used to save the `csv` file.
e.g

```js
node index.js filename team-name
```

To run the script with default file, run


```js
node index.js
```


### Chip-0007 Sample JSON Schema

```json
{
  "format": "CHIP-0007",
  "name": "Pikachu",
  "description": "Electric-type Pokémon with stretchy cheeks",
  "minting_tool": "SuperMinter/2.5.2",
  "sensitive_content": false,
  "series_number": 22,
  "series_total": 1000,
  "attributes": [
    {
      "trait_type": "Species",
      "value": "Mouse"
    },
    {
      "trait_type": "Color",
      "value": "Yellow"
    },
    {
      "trait_type": "Friendship",
      "value": 50,
      "min_value": 0,
      "max_value": 255
    }
  ],
  "collection": {
    "name": "Example Pokémon Collection",
    "id": "e43fcfe6-1d5c-4d6e-82da-5de3aa8b3b57",
    "attributes": [
      {
        "type": "description",
        "value": "Example Pokémon Collection is the best Pokémon collection. Get yours today!"
      },
      {
        "type": "icon",
        "value": "https://examplepokemoncollection.com/image/icon.png"
      },
      {
        "type": "banner",
        "value": "https://examplepokemoncollection.com/image/banner.png"
      },
      {
        "type": "twitter",
        "value": "ExamplePokemonCollection"
      },
      {
        "type": "website",
        "value": "https://examplepokemoncollection.com/"
      }
    ]
  },
  "data": {
    "example_data": "VGhpcyBpcyBhbiBleGFtcGxlIG9mIGRhdGEgdGhhdCB5b3UgbWlnaHQgd2FudCB0byBzdG9yZSBpbiB0aGUgZGF0YSBvYmplY3QuIE5GVCBhdHRyaWJ1dGVzIHdoaWNoIGFyZSBub3QgaHVtYW4gcmVhZGFibGUgc2hvdWxkIGJlIHBsYWNlZCB3aXRoaW4gdGhpcyBvYmplY3QsIGFuZCB0aGUgYXR0cmlidXRlcyBhcnJheSB1c2VkIG9ubHkgZm9yIGluZm9ybWF0aW9uIHdoaWNoIGlzIGludGVuZGVkIHRvIGJlIHJlYWQgYnkgdGhlIHVzZXIu"
  }
}
```

## How to run the app

- Clone the repository
- `cd` into the root directory where the `index.js ` is present.
- Run `yarn install` to install all dependencies-
- Then finally start the app by running `node index.js filename team-name` in the terminal.
