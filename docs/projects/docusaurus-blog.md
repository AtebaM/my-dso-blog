# Docusaurus Blog Configuration

This document describes the steps I took to configure, personalize, and set up the initial Docusaurus template to serve as my personal portfolio and learning journal.

## Configuration Steps

### 1. Environment Variables
- Updated the `example.env` file to include a placeholder for the `GIT_REPOSITORY_URL`.
- Configured Docusaurus to read this environment variable to dynamically set repository links.

### 2. Personalizing `docusaurus.config.js`
- **Site Metadata**: Changed the `title` to "Portfolio" and updated the `tagline` with my name and a short description.
- **URLs**: Adjusted the main `url` to point to my personal GitHub Pages domain.
- **Edit URLs**: Updated the `editUrl` properties in both the `docs` and `blog` presets to point to my own GitHub repository instead of the starter template.

### 3. Layout adjustments (Navbar & Footer)
- **Navbar**: Changed the title to "Portfolio" and ensured the GitHub link points to my repository.
- **Footer**: 
  - Added a new link pointing to `/docs/projects` in the Docs column.
  - Removed the default "Community" column entirely to keep the footer clean.
  - Added a link to the original Docusaurus template in the "More" column to give proper credit.
  - Personalized the copyright message and added the required "extended from the developer-akademie-starter" snippet.

### 4. Cleanup and Deployment Documentation
- Cleaned up the main `README.md` file by removing outdated deployment methods (like SSH and NGINX).
- Replaced it with a short explanation that the project is automatically deployed using a GitHub Action workflow whenever a commit is pushed to the main branch.
- Removed the default "Contributing" section.