# React Horizontal Calendar

A customizable horizontal scrollable calendar component built in React that allows users to select dates, scroll through weeks, and choose custom button colors. The component uses `dayjs` for date management and includes previous/next week navigation.

## Features

- **Horizontal Scrollable Calendar**: A clean, scrollable week-based calendar.
- **Customizable Colors**: Users can customize the color of the next/previous buttons.
- **Date Selection**: Click on a date to select it.
- **Min Date**: Users are restricted from selecting dates prior to the current date (if enabled).
- **Previous/Next Week Navigation**: Scroll through weeks easily with the previous and next buttons.

## Installation

Install the package via npm:

```bash
npm install react-calender-horizontal@latest

Usage

To use the calendar in your component, import and configure it like this:

import React from 'react';
import ScrollableCalendar from 'react-calender-horizontal/lib/ScrollableCalendar';

const Calendar = () => {
  return (
    <div>
      <ScrollableCalendar
        onDateSelect={(date) => console.log(date)}
        prevButtonColor="#ff5733"       // Custom previous button color
        nextButtonColor="#33c1ff"       // Custom next button color
        daysInWeek={14}                 // Number of days to display in a week strip
        canSelectPastDates={false}      // Disable selection of past dates
        maxWidth="900px"                // Set max width of the calendar strip
      />
    </div>
  );
};

export default Calendar;


Getting Selected Date
You can define a custom function to handle the selected date like this:


import React from 'react';
import ScrollableCalendar from 'react-calender-horizontal/lib/ScrollableCalendar';

const Calendar = () => {
  const handleDateSelect = (date) => {
    console.log(date); // Handle the selected date
  };

  return (
    <div>
      <ScrollableCalendar
        onDateSelect={handleDateSelect}
        prevButtonColor="#ff5733"
        nextButtonColor="#33c1ff"
        daysInWeek={14}
        canSelectPastDates={false}
        maxWidth="900px"
      />
    </div>
  );
};

export default Calendar;


Customizable Props
You can customize the following properties in the calendar component:

onDateSelect: Function to handle date selection.
prevButtonColor: Set the color of the previous button (e.g., #ff5733).
nextButtonColor: Set the color of the next button (e.g., #33c1ff).
daysInWeek: Number of days to display in the strip (default is 7, can be customized to 14).
canSelectPastDates: Boolean to allow/disallow selecting past dates (true or false).
maxWidth: Define the maximum width of the calendar strip (e.g., 900px, 90%).
Example:

<ScrollableCalendar
  onDateSelect={(date) => console.log(date)}
  prevButtonColor="#ff5733"
  nextButtonColor="#33c1ff"
  daysInWeek={14}
  canSelectPastDates={false}
  maxWidth="900px"
/>
Contributing
You can contribute to this project by forking the repository and submitting a pull request. Contributions are welcome!

GitHub Repository Link <a href="https://github.com/Ravindra9555/React-horizontal-calender" target="_blank"> Link </a>

License
This project is licensed under the ISC License.

Author
Created by Ravindra Kumar. <a href="https://ravindra.vercel.app" target="_blank">Profile </a>



### Key Improvements:
- Consistent headings and code block formatting.
- Detailed instructions on usage with comments to explain props.
- Added links and properly formatted sections for contributing, license, and author information.

Feel free to update it further based on your needs!