# Water Jug Challenge

The 'water bucket challenge' is a classic programming problem that involves simulating how a set of water buckets are filled and emptied.

## Features

#### OVERVIEW

Build an application that solves the Water Jug Riddle for dynamic inputs (X, Y, Z). The
simulation should have a UI (if SPA) to display state changes for each state for each jug
(Empty, Full or Partially Full).
You have an X-gallon and a Y-gallon jug that you can fill from a lake. (Assume lake has unlimited amount
of water.) By using only an X-gallon and Y-gallon jug (no third jug), measure Z gallons of water.

#### GOALS

- Measure Z gallons of water in the most efficient way.
- Build a UI where a user can enter any input for X, Y, Z and see the solution.
- If no solution, display “No Solution”.

#### LIMITATIONS

- Actions allowed: Fill, Empty, Transfer.

#### DELIVERABLES

The application source code should be on Github and a link should be provided. If this is not an
option, a public link to the application source code or a zip archive is also acceptable.

## Solution Approach

The water bucket problem, with only two buckets available, is a logical mathematician's problem. To determine if the problem has no solution, the conditions must be met:

- **Bucket capacities**: The capacities of the two buckets must be relatively close to each other. This means that the numbers representing the capacities of the cubes must not have any common factors except 1 and 2. In other words, the greatest common factor (GCD) of the capacities of the cubes must be 1 or 2. If the GCD does not is 1 or 2, the problem has no solution, since combinations cannot be created to measure certain quantities of water.

- **Target outside capacities**: The target liters of water you are trying to measure must be a number that is not greater than the capacity of the largest bucket and that is also divisible by the GCF of the buckets' capacities. If the objective does not meet these conditions, the problem has no solution.

In summary, if the capacities of the buckets are not relatively prime (their GCD is not 1 or 2) or the target does not meet the mentioned conditions, then the problem has no solution, and the desired amount of water cannot be measured using the two dice cubes. Therefore, before addressing the problem, it is important to check these conditions to determine if a solution can be found.

#### Project folder structure

    .
    ├── dist                   # Compiled files
    ├── docs                   # Documentation files
    ├── node_modules           # Compiled files
    ├── public                 # public resources and files
    ├── src                    # Source files
    ├── tests                  # Automated tests
    ├── .eslintrc.cjs          # Eslint configuration file
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── README.md
    ├── vite.config.js         # Vite configuration file
    └── ...

#### Source files

Automated tests are usually placed into the `test` or, less commonly, into the `spec` or `tests` folder.

    .
    ├── ...
    ├── src                    # Source files
    │   ├── assets             # Resources
    │   ├── components         # Reusable components
    │   ├── helpers            # Reusable util functions
    │   ├── hooks              # Custom hooks
    │   ├── styles             # CSS files
    │   ├── App.jsx            # Component startup file
    │   ├── main.jsx           # Application startup file
    │   └── ...
    └── ...

#### Automated tests

Automated tests are usually placed into the `test` or, less commonly, into the `spec` or `tests` folder.

    .
    ├── ...
    ├── test                        # Test files
    │   ├── App.test.jsx            # Load and stress tests
    │   └── ...
    └── ...

#### Documentation files

Often it is beneficial to include some reference data into the project, such as
Rich Text Format (RTF) documentation, which is usually stored into the `docs`
or, less commonly, into the `doc` folder.

    .
    ├── ...
    ├── docs                                                    # Documentation files
    │   ├── FE-Design-Chicks-Challenge-2022.pdf                 # Table of contents
    │   └── ...
    └── ...

## Installation and Run

Install with npm

```bash
  npm install
  npm run dev or npm dev
```

or

Install with yarn

```bash
  yarn install
  yarn dev
```

## Build

Install with npm

```bash
  npm run build or npm build
```

or

Install with yarn

```bash
  yarn build
```

## Running Tests

Test making with vitest, happy-dom, @testing-library/react and user-event
To run tests, run the following command

with npm

```bash
  npm run test
```

or with yarn

```bash
  yarn test
```

## Tech Stack

**Client:** React@18.2.0, vite@4.4.5, @vitejs/plugin-react, @vitejs/plugin-react-swc

## Authors

- [@Keydt6](https://github.com/Keydt6)
