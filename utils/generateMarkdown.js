// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  

  [![License](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)](LICENSE)

  ## DESCRIPTION
  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## INSTALLATION
  To set up the necessary dependencies, execute the following command:
  * ${data.installation}


  ## USAGE
  ${data.usage}

  ## LICENSE
  This project is subject to the ${data.license} licensing terms.

  ## CONTRIBUTING
  ${data.contribution}

  ## TESTS
  ${data.test}

  ## QUESTIONS
  Should you have any inquiries regarding this repository, feel free to raise an issue or reach out to me directly via [${data.email}](mailto:${data.email}). 
  Explore more of my work at [${data.username}](https://www.github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
