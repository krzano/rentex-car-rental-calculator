# Rentex - car rental cost calculator

**Live demo: &nbsp; [https://rentex-car-rental-calculator.vercel.app/](https://rentex-car-rental-calculator.vercel.app/)**

<hr/>

## About

In this project user can select one of the cars from the list, and then submit the rental form to see the estimated rent price and price components.

Because we display the list of different cars, to improve the user experience I decided to add filtering functionality, so the user can filter cars by **Category**, **Producer name** (e.g.: Fiat, Toyota etc.) and **Location**.

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

### Calculation

- Based on the car category we calculate the multiplied rental price for one day, and we multiply it by the number of days for which user will rent the car
- Then we calculate the extra fees:
- - If the user has a driver's license for less than 5 years, we increase the cost by 20%
- - If the selected car's availability is less than 3 cars, we increase the cost by 15%.
- Then we calucalte the estimated fuel cost with the followng formula: _((estimated number of kilometers to travel) / 100) x (selected car's average fuel consumption per 100km) x (current fuel price)_
- Then we add the estimated fuel cost to the base rental price with extra fees and the result of the calculations is the Subtotal (net price)
- Finally we add 23% of tax and the final result is Total (gross price)

_All the variables needed for calcualtion (like: tax rate, fee rates, minimum number of driving experience years to not pay extra fee, etc.) are stored in one place in the data.ts file. This allowes us to easily change the data in one place if any of the requirements changes (for example if the limited car availability fee changes from 15% to 20%) without a need to searching the codebase to change every file which uses this value._

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
