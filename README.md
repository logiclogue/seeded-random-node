# seeded-random

Node module that allows you to generate seeded random numbers for your cli or web applications.

## Installing

### CLI

`npm install -g seeded-random`

### Node project

`npm install --save seeded-random`

## Examples

### CLI

**Generating a random decimal**

`$ seeded-random -d`

**Generating a random decimal from a seed**

`$ seeded-random -d -s thisisaseed`

`0.9044537395238876`

**Generating a number within a range from a seed**

`$ seeded-random -r 1..6 -s thisisaseed`

`2`
