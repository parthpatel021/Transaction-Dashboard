# MERN Stack Coding Challenge Project

This project is a solution to the MERN stack coding challenge. It includes APIs to initialize the database, list transactions, calculate statistics, generate bar and pie charts, and a combined API to fetch data from all endpoints.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Endpoints](#endpoints)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Axios

## Endpoints
- **Initialize Database**
  - `GET /initialize-database`

- **List All Transactions**
  - `GET /transactions`
    - Query parameters: `month` (optional), `search` (optional), `page` (optional), `perPage` (optional)

- **Statistics**
  - `GET /statistics`
    - Query parameter: `month`

- **Bar Chart**
  - `GET /bar-chart`
    - Query parameter: `month`

- **Pie Chart**
  - `GET /pie-chart`
    - Query parameter: `month`

- **Combined API**
  - `GET /combined-data`
    - Query parameter: `month`


## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mern-coding-challenge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   MONGODB_URI=<mongodb://localhost:27017/your_database>
   ```

## Usage
1. Initialize the database with seed data:
   ```bash
   npm run initialize-db
   ```

2. Start the server:
   ```bash
   npm start
   ```