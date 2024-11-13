# SpaceX Website powered by NuxtJS

## Overview
This project is a website that utilizes the SpaceX API to provide users with information about SpaceX launches and rockets. The website is built using Nuxt.js, Vue, GraphQL, Pinia, and TypeScript, and aims to be optimized and user-friendly.

## Features/Objectives
- Filter launches by year
- Sort launches by launch date in ascending or descending order
- View detailed information about each rocket when clicking on a launch event
- Reusable components and layouts
- Global state management using Pinia for the "Favorite" page

## Challenges Encountered
1. **launch_site in SpaceX API throws null**
2. **No images to show on some Launch events**
3. **Rockets has no image**
4. **Favorite section does not save rockets after refresh because of Pinia limitation**
5. **Unexpected empty source while committing repository to GitHub**
6. **ID is not being passed while removing favorite, resulting in deleting all favorite Rockets**
7. **Sorting sometimes does not work, refresh needed**

## Additional Approaches
1. **Middleware for authentication**: Middleware where it authenticates back to home when there is no page to a certain destination.
2. **Light and Dark theme mode**
3. **Paginated Launch details for optimized loading times**

## Linters

The template has been pre-configured with state-of-the-art linters like eslint, stylelint, prettier, and commitizen to bolster code legibility and standardization

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
