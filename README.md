# Redux Toolkit Radar App Project

## Description

This project is a radar application that uses Redux Toolkit for efficient state management and React Leaflet for interactive map displays. The application allows users to track flights and view detailed flight information using a third-party API.

## Features

- Display interactive map with flight information
- Search and filter flights
- View detailed flight information
- Track flight paths on the map
- Clear flight routes
- Responsive design using Bootstrap
- Pagination for large datasets

## Libraries

- **Axios**: For making HTTP requests.
- **React-redux**: For managing the application's state.
- **@reduxjs/toolkit**: For efficient Redux development.
- **React-Leaflet**: For rendering maps and map layers.
- **Leaflet**: For interactive maps.
- **Bootstrap**: For styling and responsive design.
- **Moment**: For handling date and time.
- **React-Paginate**: For pagination.

## API

The application uses the [Flight Radar API](https://rapidapi.com/apidojo/api/flight-radar1) to fetch flight data.

## Preview

![Preview Image](/src/assets/Radar-App.gif)

## Deployment

The project is deployed and can be accessed [here](https://sparkling-mandazi-aca5c4.netlify.app/).

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/KamilErdogmus/Radar-App.git
```

2. Navigate to the project directory:

```bash
cd your-repository
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start / npm run dev
```

5. Open your web browser and visit http://localhost:3000 to view the application.

## Usage

- Navigate to the main page to view all job listings.
- Use the "Add Job" button to add a new job listing.
- Click on any job listing to view details and options to edit or delete the listing.
- Use the search functionality to filter job listings based on keywords.
