<picture>
  <img alt="Futura logo" src="https://github.com/PartySoonXd/FuturaDesign/blob/master/app/public/images/Logo.svg">
</picture>

## Description
FuturaDesign it is the landing page for interior design studio that was made as a portfolio project. Here you can find interior design services for your home and consult about your future interior. This website is created for people who want cool and modern interior in their home. As a result of this project I am improved at working with **SSR on NextJS**, **SCSS**, **React-admin** and **couchDB**.
## Stack
### Frontend
- NextJS
- Axios
### Backend
- NextJS
### Admin 
- React-admin
- MUI
### Database
- CouchDB

## Run locally
1. Clone the project
```bash
git clone https://github.com/PartySoonXd/FuturaDesign.git
```
2. Go to the project directory
```bash
cd FuturaDesign
```
3. Install dependencies
```bash
npm install
```
4. Go to the app directory
```bash
cd app
```
5. Install dependencies
```bash
npm install
```
6. Rename .env.example to .env.local
7. Go to the admin directory
```bash
cd admin
```
8. Install dependencies
```bash
npm install
```
9. Rename .env.example to .env.local
10. Install [couchDB](https://couchdb.apache.org) on your PC.
  - In process of installation you need to set username(default: couch) and password(default: root) ***similar with values in app/.env.local***
11. Go to http://localhost:5984/_utils. Auth and create non-partitioned database with name(default: futura_db) ***similar with value in app/.env.local***
12. Run app from root directory
```bash
npm run dev
```
After this you can open apps in your browser
- Client - http://localhost:4000
- Admin - http://localhost:3000
## Run with docker
***You need to have docker on your computer***
1. Go to the admin directory
```bash
cd admin
```
2. Rename .env.example to .env.local
3. Go to the app directory
```bash
cd app
```
4. Rename .env.example to .env.local
5. In .env.local change value of ```COUCHDB_HOST``` variable into ```couch```
6. Run docker-compose from root directory
```bash
docker-compose up
```
7. When docker is running open http://localhost:5984/_utils. Auth using username(default: couch) and password(default: root) from app/.env.local
8. Create non-partitioned database with name(default: futura_db) from app/.env.local

After this you can open apps in your browser
- Client - http://localhost:4000
- Admin - http://localhost:3000

## Feeback
Vladislav Belomestnykh - vladislav.webdeveloper@gmail.com
