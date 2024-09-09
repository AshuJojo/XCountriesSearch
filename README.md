# XCountries

Please view live application at [XCountriesSearch](https://x-countries-search-wine.vercel.app/).

## Demo 

Fork and run this application using below command: 

```npm run dev```

## Overview
 
It uses fetch API to fetch list of countries with their flag and name, and display them using Country Card which are reusable functional components. It uses react useState hook to manage state of application, and it passes each country information on CountryCard seprately.

It includes search functionality to search from countries data & filter the countries accordingly when user input text. It preserves the fetched data and then filter within that data, this reduces the number of API calls that is made while using Search functionality. 

## Tech Stack

* HTML5
* CSS3
* JavaScript
* React.js 18