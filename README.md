# contact-manager-node

## Configuration
Before running the application, ensure you have set the following values in the environment file. (.env)
- **CONNECTION_STRING** : MongoDB connection String
- **ACCESS_TOKEN** : JWT access token


## Base URL
If the application is hosted locally in the port 5001, the base URL for all requests would be
```
http://localhost:5001/api
```

## API Routed - Users

### Register a new user
- Endpoint : **POST /users/register**
- Description: Register new user to the contact manager application.
- Access: Public

### Login an existing user
- Endpoint : **POST /users/login**
- Description: Login an existing user to the contact manager application.
- Access: Public

### Get current user information
- Endpoint : **GET /users/current**
- Description: Retrieve user information of the current logged in user. 
- Access: Private (User must be logged in)

## API Routed - Contacts

### Get all contacts
- Endpoint : **GET /contacts**
- Description: Retrieve all contacts related to the user.
- Access: Private (User must be logged in)

### Get contact details
- Endpoint : **GET /contacts/:id**
- Description: Retrieve details of the contact with the specified ID.
- Access: Private (User must be logged in)

### Create a new contact
- Endpoint : **POST /contacts**
- Description: Create a new contact with the provided information.
- Required Fields: "name", "email", "phone"
- Access: Private (User must be logged in)

### Update a contact
- Endpoint : **PUT /contacts/:id**
- Description: Update the contact with the specified ID with new information.
- Access: Private (User must be logged in)

### Delete a contact
- Endpoint : **DELETE /contacts/:id**
- Description: Delete the contact with the specified ID.
- Access: Private (User must be logged in)
