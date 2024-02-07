# Rentex - car rental cost calculator

**Live demo: &nbsp; [https://rentex-car-rental-calculator.vercel.app/](https://rentex-car-rental-calculator.vercel.app/)**

<hr/>

## About

In this project user can select one of the cars from the list, and then submit the rental form to see the estimated rent price and price components.

The information we need from user to calculate the cost:

- Estimated number of kilometers to travel
- Driving license issue date
- Car pickup date and car return date

The rental form is validated with yup schema before submission.

Based on the driving license date of issue, the user's driving years of experience are calculated and based on this number we display:

- Warning - which informs user about the extra fee he will have to pay because of his little driving experience
- Error - which is displayed when user holds driving license for less than 3 years and is trying to rent car from Premium category

**When user submits the form, the data is saved in the Redux state which allows user to change selected car and compare total rental cost between different cars without a need to fill the form every time.**

Selected car data needed for calculation:

- number of available cars
- average fuel consumption
- car category

Because we display the list of different cars, to improve the user experience I decided to add filtering functionality, so the user can filter cars by **Category**, **Producer name** (e.g.: Fiat, Toyota etc.) and **Location**.

## Setup

Download or clone this repository.

Install dependencies:

```
npm install
```

Start a local web server by running:

```
npm run dev
```

Open http://localhost:5173 to view it in the browser.
