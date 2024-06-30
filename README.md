# Fuel_Tracker-fullstack-

## Install dependencies
  ```bash
  npm install
  ```
### Backend
- create .env file with:
  ```bash
  DATABASE_URL="postgresql://"your_database_login":"your_database_password"t@localhost:5432/"your_database_name"?schema=public"
  JWT_SECRET= YOUR_JWT_SECRET
  DOMAIN = localhost
  ```
- run server:
   ```bash
  npm run start:server
  ```
   
### Frontend
- create .env file with:
  ```bash
  SERVER_URL = http://localhost:4200/api
  CLIENT_DOMAIN = localhost
  ADMIN_ID = 'your_admin_id'
  ```
- open new terminale
  ```bash
  npm run start:client
  ```

### Using the app:
- register first user in Insomnia with endpoint (http://localhost:4200/api/auth);
- copy token, paste it in "Manage cookies" and login with this token (endpoint: http://localhost:4200/api/auth/login);
- change profile role to "ADMIN" (endpoint: http://localhost:4200/api/users/profile) and paste id into .env ADMIN_ID;
- login as admin (you can create, update and delete users and cars)
  
