# uni-app

This is a simple React application that allows you to search for universities based on country and university name. It uses the React+daisy-ui, Query library for data fetching and caching.


## Installation

To run the application locally, follow these steps:

1. Clone the repository
2. Install dependencies by pnpm(or npm should work aswell) install 
3. run by pnpm run dev


## Usage

The application consists of two main sections: the query section and the universities section.

### Query Section

In the query section, you can enter a country name and a university name to search for universities. The input fields are provided for entering the country and university name respectively. Once you have entered the search criteria, click the "Search" button to initiate the search.

### Universities Section

The universities section displays the search results. It shows the number of records found and a table containing the university data. Each row in the table represents a university and includes information such as the university name, country, and other details.

### Record Size


You can select the number of records to be displayed per page using the "Size" dropdown. The available options are 5, 10, and 20.