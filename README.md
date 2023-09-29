# Next.js Authentication Assignment

This project implements user authentication using Next.js Auth. Users can Create New Account, log in, and log out with ease. Additionally, a protected profile page is available only to logged-in users. On the profile page, users can view their basic information and update their profile picture.

## Features

- User authentication: Create New Account, log in, and log out functionality.
- Profile page: Accessible only to logged-in users.
- Basic user information display: Shows username, username, phone number, company name, etc.
- Profile picture update: User-friendly UI for updating the profile picture.
- Proper feedback messages throughout the authentication process.

## Technologies Used

- Next.js: A React framework for building server-rendered applications.
- Next.js Auth: A library for handling authentication in Next.js applications.
- localstorage for db purpose.
- [Other technologies]: List any additional technologies or libraries used.

## Setup

1. Clone this repository to your local machine.

```bash
git clone https://github.com/ankitpanchal534/basic-user-login-with-localstorage-nextjs.git
```

2. Install the required dependencies.

```bash
cd basic-user-login-with-localstorage-nextjs
npm install
```

3. Configure your chosen database. (Provide instructions for database setup if necessary.)

- I am using localstorage to save new created users.
- localstorage is used to get all users and authenticate a user login.

4. Start the Next.js development server.

```bash
npm run dev
```

5. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).

## Usage

### Create New Account

1. Click on the "Create New Account".

2. Fill out the registration form with your details, including username, password, phone number, and company name.

3. Click the "Create New Account" button to create an account.

4. You will receive feedback on the registration process status (success or failure).

### Log In

1. Click on the "Log In".

2. Enter your username and password.

3. Click the "Log In" button.

### Profile Page

1. After a successful login, you will be redirected to the protected profile page.

2. Here, you can view your basic information, including username, age,phone number, and company name.

3. You can also update your profile picture .

### Log Out

1. To log out, click on the "Log Out".

2. You will be logged out and redirected to the home page.

### Handling Unauthorized Access

- If you attempt to access the profile page without being logged in, you will be redirected to the login page and shown a message indicating that you must be logged in to view the profile.

## Credits

- [Next.js](https://nextjs.org/)
- [Next.js Auth](https://github.com/nextauthjs/next-auth)
- [Other technologies or libraries used]

## License

This project is licensed under the [MIT License](LICENSE).

## Author

[Ankit Kumar]
