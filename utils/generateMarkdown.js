
function generateMarkdown(data) {

  return `
  # Project Title 
  ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)

  [Usage](#usage)

  [Collaborators](#collaborators)

  [Deployment](#deployment)
  
  [Repository](#repository)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Collaborators
  ${data.collaborators}

  ## Deployment
  ${data.deployment}

  * See below for a screenshot of the project:

![Screenshot of deployed project](assets/images/project-screenshot.png)

  ## Repository
  ${data.repository}

`;
}

module.exports = generateMarkdown;
