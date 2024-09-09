# React Horizontal Calendar

A customizable horizontal scrollable calendar component built in React that allows users to select dates, scroll through weeks, and choose custom button colors. The component uses `dayjs` for date management and includes previous/next week navigation.

## Features

- **Horizontal Scrollable Calendar**: A clean, scrollable week-based calendar.
- **Customizable Colors**: Users can customize the color of the next/previous buttons.
- **Date Selection**: Click on a date to select it.
- **Min Date**: Users are restricted from selecting dates prior to the current date.
- **Previous/Next Week Navigation**: Scroll through weeks easily with the previous and next buttons.

## Installation

Install the package via npm:

```bash
npm install react-calender-horizontal
# Usage
Import the ScrollableCalendar component in your React project:

jsx
Copy code
import React from 'react';
import ScrollableCalendar from 'react-calender-horizontal';

const App = () => {
  const handleDateChange = (date) => {
    console.log("Selected date: ", date);
  };

  return (
    <div>
      <h1>My Calendar</h1>
      <ScrollableCalendar 
        onDateChange={handleDateChange} 
        buttonColor="#007bff"  // Customize button color
      />
    </div>
  );
};

export default App;
Props
Prop Name	Type	Description	Default
onDateChange	function	Callback function triggered when a date is selected. Returns the selected date.	null
buttonColor	string	Customize the color of the previous and next buttons. Accepts a hex or string color value.	#000
Example
Here’s a more detailed example of how to use this component in your project:

jsx
Copy code
import React, { useState } from 'react';
import ScrollableCalendar from 'react-calender-horizontal';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Selected Date: {selectedDate ? selectedDate.toString() : "None"}</h1>
      <ScrollableCalendar 
        onDateChange={handleDateChange} 
        buttonColor="#ff5722"  // Custom color
      />
    </div>
  );
};

export default App;
Get Deleted Date
To get the date that has been unselected or reset by the user, you can add logic to handle when a previously selected date is clicked again:

jsx
Copy code
import React, { useState } from 'react';
import ScrollableCalendar from 'react-calender-horizontal';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    if (selectedDate && selectedDate.getTime() === date.getTime()) {
      setSelectedDate(null); // Date deselection
      console.log("Date deselected: ", date);
    } else {
      setSelectedDate(date);
      console.log("Selected date: ", date);
    }
  };

  return (
    <div>
      <h1>Selected Date: {selectedDate ? selectedDate.toString() : "None"}</h1>
      <ScrollableCalendar 
        onDateChange={handleDateChange} 
        buttonColor="#4caf50"  // Custom button color
      />
    </div>
  );
};

export default App;
Development
Build
To build the component for production, run:

bash
Copy code
npm run build
This will transpile your source code from the src folder into a distributable format inside the lib folder.

Testing Locally
If you'd like to test the component locally before publishing:

Run the build command: npm run build
Link your package locally:
bash
Copy code
npm link
In your React project, run:
bash
Copy code
npm link react-calender-horizontal
License
This project is licensed under the ISC License.

Author
Created by Ravindra Kumar.


This `README.md` now contains:
- **Installation instructions** to guide users on how to install your package.
- **Usage examples** including a basic and a more detailed implementation.
- **Props documentation** for customizable aspects.
- **A method for getting the deselected date** when a user clicks the selected date again.
- **Build and development steps** for testing and building the package locally.

Feel free to add more information, such as contributing guidelines or FAQs, if necessary!