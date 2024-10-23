<img alt="Futura logo" src="https://raw.githubusercontent.com/PartySoonXd/FuturaDesign/master/app/public/images/Logo.svg?token=GHSAT0AAAAAACUAU2JFYFROY3IBZWIZZQ76ZUXIWPQ">

## Description
It is the landing page for interior design studio that was made as a portfolio project. Here you can find interior design services for your home and consult about your future interior. This website is created for people who want cool and modern interior in their home. As a result of this project I am improved at working with **SSR on NextJS**, **SCSS**, **React-admin** and **couchDB**.

## Stack
### Frontend
- NextJS
- Axios
### Backend
- Express
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
4. Install dependencies for applications
```bash
npm run deps
```
5. Go to the `app` directory and rename **.env.example** to **.env.local**
6. Go to the `admin` directory and rename **.env.example** to **.env.local**
7. Go to the `server` directory and rename **.env.example** to **.env.local**
8. Go to the [configuration](#configuration)
9. Run app from root directory
```bash
npm run dev
```

After this you can open apps in your browser
- Client - http://localhost:4000
- Admin - http://localhost:3000

## Run with docker
**You need to have docker on your computer**
1. Clone the project
```bash
git clone https://github.com/PartySoonXd/FuturaDesign.git
```
2. Go to the `app` directory and rename **.env.example** to **.env.local**
3. Go to the `admin` directory and rename **.env.example** to **.env.local**
4. Go to the `server` directory and rename **.env.example** to **.env.local**
5. Go to the [configuration](#configuration)

After this you can open apps in your browser
- Client - http://localhost:4000
- Admin - http://localhost:3000

## Configuration
### Locally
1. Install [couchDB](https://couchdb.apache.org/) on your PC.
    - In process of installation you need to set username(default: couch) and password(default: root) ***similar with values in `server/.env.local`***
2. Init database from root directory
```bash
npm run db
```
### With docker
1. In `server/.env.local` change value of `COUCHDB_HOST` variable into `couch`
2. Run docker-compose from root directory
```bash
docker-compose up
```
3. When docker-compose is running open [http://localhost:5984/_utils](http://localhost:5984/_utils). Auth using username(default: couch) and password(default: root) from `server/.env.local`
4. Create ***non-partitioned*** database with name(default: futura_db) from `server/.env.local`

## Feeback
Vladislav Belomestnykh - vladislav.webdeveloper@gmail.com
