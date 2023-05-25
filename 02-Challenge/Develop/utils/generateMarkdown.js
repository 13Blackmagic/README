// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  } else if (license === "GPL") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (license === "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
  } else if (license === "None") {
    return "";
  }
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === "MIT") {
  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
}
if (license === "Apache") {
  return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
}
if (license === "GPL") {
  return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
}
if (license === "BSD") {
  return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
}
if (license === "None") {
  return "";
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === "MIT") {
  return "(https://opensource.org/licenses/MIT)";
}
if (license === "Apache") {
  return "(https://opensource.org/licenses/Apache-2.0)";
}
if (license === "GPL") {
  return "(https://www.gnu.org/licenses/gpl-3.0)";
}
if (license === "BSD") {
  return "(https://opensource.org/licenses/BSD-3-Clause)";
}
if (license === "None") {
  return "";
}
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
if (license === "MIT") {
  return "MIT License";
}
if (license === "Apache") {
  return "Apache License 2.0";
}
if (license === "GPL") {
  return "GNU General Public License v3.0";
}
if (license === "BSD") {
  return "BSD 3-Clause License";
}
if (license === "None") {
  return "";
}
}
// If there is no license, return an empty string
function renderLicenseSection(license) {}
if (license === "MIT") {
  return "MIT License";
}
if (license === "Apache") {
  return "Apache License 2.0";
}
if (license === "GPL") {
  return "GNU General Public License v3.0";
}
if (license === "BSD") {
  return "BSD 3-Clause License";
}
if (license === "None") {
  return "";
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  * [Contributing](#contributing)
  * [Badges](#badges)
  * [Features](#features)
  * [How to Contribute](#how-to-contribute)
  * [Authors](#authors)
  * [Project Title](#project-title)
  * [License](#license)
  * [Acknowledgements](#acknowledgements)
  * [Contact](#contact)
  * [Tests](#tests)
  * [FAQ](#faq)
  * [Support](#support)

`;
}

module.exports = generateMarkdown;
