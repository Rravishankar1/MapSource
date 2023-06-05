# Disease Tracking Web Application

The Disease Tracking Web Application is a dynamic and interactive web application that visualizes disease data on a map. It allows users to track and monitor disease statistics in a specific region. This application is built using Three.js, Leaflet, Mapbox, Express, and MongoDB.

## Features

- Visualize disease data on an interactive map using Three.js, Leaflet, and Mapbox.
- Fetch data from respective domain and store it in MongoDB.
- Retrieve and display data from the MongoDB database using API endpoints.
- Update the database periodically to keep the data up to date.
- Easy-to-use interface for users to interact with the map and view disease statistics.

## Dependencies

This web application relies on the following dependencies:

- [Three.js](https://threejs.org/): JavaScript 3D library for rendering 3D graphics.
- [Leaflet](https://leafletjs.com/): JavaScript library for interactive maps.
- [Mapbox](https://www.mapbox.com/): Mapping platform for custom maps.
- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [Mongoose](https://mongoosejs.com/): Object Data Modeling (ODM) library for MongoDB.

## Installation

To run the Disease Tracking Web Application locally, follow these steps:

1. Clone this repository: `git clone <repository-url>`
2. Navigate to the `client/` directory: `cd client/`
3. Install the frontend dependencies: `npm install`
4. Start the frontend server: `npm start`
5. Open a new terminal window and navigate to the `server/` directory: `cd ../server/`
6. Install the backend dependencies: `npm install`
7. Start the backend server: `node app.js`

Once the servers are running, you can access the application by visiting `http://localhost:3000` in your web browser.

## Configuration

Before running the application, make sure to configure the MongoDB connection in the `server/app.js` and `server/database.js` files. Update the MongoDB connection URL with your MongoDB server details.

Additionally, you may need to modify the `fetchData.js` script in the `scripts/` directory to match the API endpoint and data structure of the Montgomery County website.

## Usage

- The web application will display an interactive map showing disease statistics.
- Use the map controls to zoom in/out and navigate the map.
- Disease data will be fetched from the Montgomery County website and displayed on the map.
- You can periodically update the data by running the `fetchData.js` script.
