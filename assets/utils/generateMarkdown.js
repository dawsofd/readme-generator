// functions for license 
function renderLicenseBadge(license) {
    if (license !== "None") {
        return `![Github License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
    }
    return ""
}

function renderLicenseLink(license) {
    if (license !== "None") {
        return (
            `* [License](#license)`   
        )
    }
    return ""
}

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
    ${renderLicenseBadge(data.license)}

    ## Description 

    ${data.descriptionWhy}

    ${data.descriptionProblem}

    ${data.descriptionLearn}

    ## Table of Contents 

    * [Installation](#installation)

    * [Usage](#usage)

    * [Credits](#contributors)

    * [License](#license)

    ## Installation

    To install dependencies, run these commands:

    \`\`\`
    ${data.dependencies}
    \`\`\`

    To complete installing the project, follow these steps:

    ${data.installation}

    ## Usage

    ${data.usage}

    ## Credits 

    ${data.contributors}

    ## License 
    
    ${renderLicenseSection(data.license)}

    ## Contact Me 

    For additional questions, you can contact me via: 

    - Github: [${data.github}](https://github.com/${data.github}/)
    - Email:  ${data.email}

`;
}

module.exports = generateMarkdown;