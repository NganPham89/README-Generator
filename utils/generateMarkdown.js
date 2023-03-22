function renderLicenseBadge(license) {
        if (license === "none") {
                return "";
        } else {
                return `https://img.shields.io/badge/license-${license}-blue.svg`;
        }
}
function generateMarkdown(response) {
        return `# README

# ${response.title}
![${response.license}](${renderLicenseBadge(response.license)})

## Description

${response.desc}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:
~~~
${response.install}
~~~
## Usage

${response.use}

## License

${response.license}

## Contributing

${response.cont}

## Tests

To run tests, run the following command:
~~~
${response.test}
~~~
## Questions

If you have any questions about the repo, open an issue or contact me directly at ${response.email}. You can find more of my works at [${response.name}](https://github.com/${response.name}).

`;
}

module.exports = generateMarkdown;