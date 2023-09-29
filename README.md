# Next.js Authentication Assignment

This project implements user authentication using Next.js Auth. Users can sign up, log in, and log out with ease. Additionally, a protected profile page is available only to logged-in users. On the profile page, users can view their basic information and update their profile picture.

## Features

- User authentication: Sign up, log in, and log out functionality.
- Profile page: Accessible only to logged-in users.
- Basic user information display: Shows username, email, phone number, company name, etc.
- Profile picture update: User-friendly UI for updating the profile picture.
- Proper feedback messages throughout the authentication process.

## Technologies Used

- Next.js: A React framework for building server-rendered applications.
- Next.js Auth: A library for handling authentication in Next.js applications.
- [Database of your choice]: Store user information. (Specify the database used, e.g., MongoDB, PostgreSQL, etc.)
- [Other technologies]: List any additional technologies or libraries used.

## Setup

1. Clone this repository to your local machine.

```bash
git clone https://github.com/your-username/nextjs-authentication-assignment.git
```

2. Install the required dependencies.

```bash
cd nextjs-authentication-assignment
npm install
```

3. Configure your chosen database. (Provide instructions for database setup if necessary.)

4. Start the Next.js development server.

```bash
npm run dev
```

5. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).

## Usage

### Sign Up

1. Click on the "Sign Up" link in the navigation bar.

2. Fill out the registration form with your details, including username, email, password, phone number, and company name.

3. Click the "Sign Up" button to create an account.

4. You will receive feedback on the registration process status (success or failure).

### Log In

1. Click on the "Log In" link in the navigation bar.

2. Enter your email and password.

3. Click the "Log In" button.

4. You will receive feedback on the login process status (success or failure).

### Profile Page

1. After a successful login, you will be redirected to the protected profile page.

2. Here, you can view your basic information, including username, email, phone number, and company name.

3. You can also update your profile picture using the user-friendly UI provided.

### Log Out

1. To log out, click on the "Log Out" link in the navigation bar.

2. You will be logged out and redirected to the home page.

### Handling Unauthorized Access

- If you attempt to access the profile page without being logged in, you will be redirected to the login page and shown a message indicating that you must be logged in to view the profile.

## Database Configuration

Specify how to configure and connect your chosen database. Include any necessary environment variables and database setup scripts.

## Credits

- [Next.js](https://nextjs.org/)
- [Next.js Auth](https://github.com/nextauthjs/next-auth)
- [Other technologies or libraries used]

## License

This project is licensed under the [MIT License](LICENSE).

## Author

[Your Name]

Feel free to customize this README file further based on your project's specific requirements and technologies used.
