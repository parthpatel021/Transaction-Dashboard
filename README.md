# Transaction Dashboard

Transaction Dashboard is a MERN stack project designed to manage and visualize product transactions. It includes backend APIs for data manipulation and retrieval, as well as a frontend interface for displaying transaction information through tables and charts.

## Table of Contents

- [Solution](#solution)
- [Technology Usage](#technology-usage)
- [Server Task Description](#server-task-description)
- [Frontend Task Description](#frontend-task-description)
- [Usage](#usage)

## Solution
- **Github Repo**: [Transaction Dashboard Repo](https://github.com/parthpatel021/Transaction-Dashboard)
- **Live App Link**: [Transaction Dashboard App](https://transaction-dashboard-302d.onrender.com/)
- **Live Server Link**: [Transaction Dashboard Server](https://transaction-dashboard-server.onrender.com)

## Technology Usage

### Server
- Node.js
- Express.js
- MongoDB
- Axios

### Client
- React.js
- TailwindCSS
- Material UI


## Server Task Description

The server side of the Transaction Dashboard project is responsible for handling data retrieval and manipulation using various APIs. Below are the APIs implemented for the server task:

1. **Initialize Database API:**
   - Endpoint: `GET /initialize-database`
   - Description: Initializes the database by fetching JSON data from a third-party API and populating the database with seed data.

2. **Transaction Listing API:**
   - Endpoint: `GET /transactions`
   - Description: Lists all transactions with support for search and pagination. Matches search text on product title/description/price and returns the product transactions based on the matching result.
   - Query parameters:
     - targetMonth (optional)
     - keyword (optional)
     - page (optional)
     - perPage (optional)

3. **Statistics API:**
   - Endpoint: `GET /statistics`
   - Description: Provides statistics such as total sale amount, total number of sold items, and total number of not sold items for the selected month.
   - Query parameter: targetMonth

4. **Bar Chart API:**
   - Endpoint: `GET /bar-chart`
   - Description: Generates data for a bar chart displaying the price range and the number of items in that range for the selected month regardless of the year.
   - Query parameter: targetMonth

5. **Pie Chart API:**
   - Endpoint: `GET /pie-chart`
   - Description: Generates data for a pie chart displaying unique categories and the number of items from each category for the selected month regardless of the year.
   - Query parameter: targetMonth

6. **Combined Data API:**
   - Endpoint: `GET /combined-data`
   - Description: Fetches data from all the above APIs, combines the responses, and sends a final response of the combined JSON.
   - Query parameter: targetMonth

These APIs collectively handle various aspects of data retrieval and analysis for the Transaction Dashboard application.

## Frontend Task Description

The client-side of the Transaction Dashboard project is responsible for presenting transaction data through tables and charts on a single page. Below are the components and functionalities implemented for the client task:

### Transactions Table
- Utilizes the transactions listing API to display transactions in a table format.
- Provides a dropdown to select the month, defaulting to March, for filtering transactions.
- Allows users to search for transactions by entering keywords in a search box.
- Supports pagination to navigate through the transaction data.
![image](https://github.com/parthpatel021/Transaction-Dashboard/assets/75678394/044681ec-caa7-4187-8d92-0e8704b6ff4b)


### Transactions Statistics
- Displays total sale amount, total sold items, and total not sold items for the selected month using the statistics API.
![image](https://github.com/parthpatel021/Transaction-Dashboard/assets/75678394/1f7a0aa5-d6ef-48cb-97c3-b510fb04c5ad)

### Transactions Bar Chart
- Generates a bar chart displaying the price range and the number of items in each range for the selected month using the bar chart API.
![image](https://github.com/parthpatel021/Transaction-Dashboard/assets/75678394/ee8c5cc8-1fb3-45d1-8ae1-aa91cd3126d3)

## Usage

To run the Transaction Dashboard application locally, follow the steps below:

1. Clone the repository
```bash
git clone https://github.com/parthpatel021/Transaction-Dashboard.git
```
2. Install dependencies for the client
```bash
cd Transaction-Dashboard/client
npm install
```
3. Install dependencies for the server
```bash
cd ../server
npm install
```
4. Run the client
```bash
cd ../client
npm start
```
5. Run the server
```bash
cd ../server
node server.js
```
The client-side application will be accessible at http://localhost:3000, and the server will be running on http://localhost:8080.
