# User Endpoints

## Register User

**Endpoint:** `POST /register`

**Description:** Registers a new user.

**Request Body:**

- `email` (string): User's email address.
- `fullname.firstname` (string): User's first name (minimum 2 characters).
- `fullname.lastname` (string): User's last name.
- `password` (string): User's password (minimum 8 characters).

**Response:**

- `201 Created`: User registration successful.
- `400 Bad Request`: Validation errors.

## Login User

**Endpoint:** `POST /login`

**Description:** Logs in an existing user.

**Request Body:**

- `email` (string): User's email address.
- `password` (string): User's password (minimum 8 characters).

**Response:**

- `200 OK`: User login successful.
- `401 Unauthorized`: Invalid email or password.

## Get User Profile

**Endpoint:** `GET /profile`

**Description:** Retrieves the profile of the authenticated user.

**Response:**

- `200 OK`: User profile data.

## Logout User

**Endpoint:** `GET /logout`

**Description:** Logs out the authenticated user.

**Response:**

- `200 OK`: User logout successful.
