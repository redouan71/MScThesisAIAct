# MScThesisAIAct

This repository contains the materials and prototype developed for my MSc thesis project on the EU AI Act. The project includes a web-based **EU AI Act Article Navigator**, experiment materials, survey documentation, and result files.

The repository is intended to make the thesis materials more transparent, reproducible, and easier to inspect.

## Repository contents

```text
MScThesisAIAct/
├── src/                    # Source code for the EU AI Act Article Navigator
├── experiment resources/    # Materials used to generate or support the experiment
├── surveys/                 # PDF versions of the surveys used in the study
├── results/                 # Result files from the expert survey and user studies
├── ATTRIBUTIONS.md          # Attribution information for generated/exported code/assets
├── index.html               # Main HTML entry point
├── package.json             # Project dependencies and scripts
├── vite.config.ts           # Vite configuration
├── postcss.config.mjs       # PostCSS configuration
└── README.md
```

## Web application

The `src/` folder contains the source code for the EU AI Act Article Navigator. The application was originally designed in Figma and exported as a code bundle. It uses TypeScript, React, Vite, and CSS styling files.

The purpose of the prototype is to provide a navigable interface for viewing and interacting with selected EU AI Act article content and their generated narratives.

## Experiment resources

The `experiment resources/` folder contains supporting materials used during the research process, including:

* generated narratives
* generated questions
* legal text summaries
* prompts used during the experiment preparation

These files document how the experiment materials were created and prepared.

## Surveys

The `surveys/` folder contains readable PDF versions of the surveys used in the study:

* full expert survey
* full user survey 1
* full user survey 2

These files are included so that the survey content can be inspected without needing access to Qualtrics.

## Results

The `results/` folder contains result files related to:

* expert survey
* user study 1
* user study 2

The results are organized by study phase to make it easier to trace which data belongs to which part of the research.

## Running the web application locally

You can run this web application online through the following link: https://letter-bear-43346891.figma.site. However, if you would like to run the prototype locally, first install the dependencies:

```bash
npm install
```

Then start the development server:

```bash
npm run dev
```

To create a production build, run:

```bash
npm run build
```

## Requirements

You need Node.js and npm installed on your computer.

Recommended:

```text
Node.js 18 or higher
npm 9 or higher
```

## Notes on data and privacy

This repository is intended to share thesis-related materials and prototype code. Personal or sensitive participant information should not be included unless it has been properly anonymized and is allowed to be shared.

## Original design

The web application was originally created from a Figma design and exported as a code bundle. The exported files were then included in this repository as part of the thesis project materials.
