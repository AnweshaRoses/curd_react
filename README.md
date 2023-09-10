# User Management Application

This is a CRUD (Create, Read, Update, Delete) application built using React to manage users. It uses a publicly available API, such as JSONPlaceholder, to fetch a list of users and perform various operations on them.

## Features

- **Fetch Users**: Fetch a list of users from a JSONPlaceholder API and display them in a user-friendly format, including basic information like name, email, and phone number.

- **Create User**: Create a new user by filling out a form. The user data is sent to the JSONPlaceholder API, simulating the creation of a new user.

- **Update User**: Edit user information by clicking the 'Edit' button. A form is displayed with the user's data pre-filled. After making changes, you can save the updates, which perform a PUT request to simulate updating the user data.

- **Delete User**: Each user has a 'Delete' button. Clicking this button sends a DELETE request to the JSONPlaceholder API to simulate deleting the user from the system.

## Additional Features

- **Responsive Design**: The application is designed to be responsive, ensuring it looks good and functions well on both desktop and mobile devices.

- **Error Handling**: Proper error handling is implemented throughout the application. Users are notified if there are any API request failures.

## Optional Advanced Features (Bonus Points)

- **Loading Spinner**: A loading spinner or skeleton screen is displayed while API requests are in progress to provide a better user experience.

- **React Router**: React Router is used to create different views within the application, such as a home view and a detailed view for each user.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/AnweshaRoses/curd_react.git
```

2. Install Dependencies: 
```bash 
npm install
```
3.Start the development server:
```bash 
npm run start
```
## Live Demo

You can access a live demo of this application hosted on Vercel by visiting the following URL:

[User Management App - Live Demo](https://your-verbatim-url-here)

Feel free to explore the live demo to see the application in action!

## Technologies Used

- **React**: The project is built using React, a popular JavaScript library for building user interfaces.

- **Axios**: Axios is used for making API requests to the JSONPlaceholder API. It's a promise-based HTTP client for the browser and Node.js.

- **React Router (optional)**: React Router is optionally used to create different views within the application, such as a home view and a detailed view for each user. This provides a smoother navigation experience.

- **HTML/CSS**: HTML and CSS are used for structuring and styling the application to make it visually appealing.

## Contributing

If you'd like to contribute to this project or report any issues, please feel free to create a pull request or open an issue. Your contributions and feedback are welcome and appreciated!

