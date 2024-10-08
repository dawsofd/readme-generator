function renderLicenseSection(license) {
    if (license !== "None") {
        return (
            `## License
            
            Copyright @ ${license}.  All rights reserved.
            
            Licensed under the ${license} license.`
        )
    }
    return ""
}

// function to structure README markdown 
function generateMarkdown(data) {
    return `# ${data.title}

## Description 

${data.descriptionWhy}

${data.descriptionProblem}

${data.descriptionLearn}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Credits](#credits)

* [License](#license)

## Installation

To install dependencies, run these commands:

\`\`\`
${data.dependencies}
\`\`\`

To complete installing the project, follow these steps:
${((", "+(data.installation)).replaceAll(",","\n-"))}

## Usage
${((", "+(data.usage)).replaceAll(",","\n-"))}

## Credits 

${data.contributors}
    
${renderLicenseSection(data.license)}

## Contact Me 

For additional questions, you can contact me via: 

- Github: [${data.github}](https://github.com/${data.github}/)
- Email:  ${data.email}`;
}

module.exports = generateMarkdown;