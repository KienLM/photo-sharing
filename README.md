# Photo Sharing - Lab 1, Problem 1

A simple React + Material-UI photo-sharing application, completed from the provided `photo-sharing-v1` starter project.

## Run locally

In the project directory (the folder with `package.json`):

```bash
npm install
npm start
```

Open http://localhost:3000.

## Pages

- `/users` - user list (also available in the left sidebar)
- `/users/:userId` - user information, with a link to that user's photos
- `/photos/:userId` - all the user's photos, dates, and comments; comment authors link to their user details

## Where to make edits

- `src/components/TopBar/index.jsx` - student name, header text
- `src/components/UserList/index.jsx` - clickable user list
- `src/components/UserDetail/index.jsx` - user information
- `src/components/UserPhotos/index.jsx` - photos and comments, time formatting
- `src/components/*/styles.css` - component styles
- `src/modelData/models.js` - example data
- `public/images/` - image files referenced by `file_name` in the example data
- `src/App.js` - routing and layout

This version covers **Problem 1 only**, using the supplied model data. Problem 2 (fetching data from a server) and Extra Credit are not implemented.
