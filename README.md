
# Book Recommendation System

A book recommendation web app that recommends books similar to the one you are reading.
Uses collaborative filtering recommendation algorithms.

## Backend

**Tech**: Python, Django, Django Rest Framework, Pandas, Numpy

**Database**: PostgreSQL

**Dataset**: [Book Recommendation Dataset
](https://www.kaggle.com/datasets/arashnic/book-recommendation-dataset)

## Frontend

**Tech**: Javascript, ReactJS, SCSS

## Containerisation

**Tech**: Docker

## Project Structure

-Backend\
&nbsp; &nbsp; &nbsp; &nbsp;|_ Dockerfile\
-Frontend\
&nbsp; &nbsp; &nbsp; &nbsp;|_ Dockerfile\
-nginx_backend_server\
&nbsp; &nbsp; &nbsp; &nbsp;|_ Dockerfile\
-docker-compose.yml

## Running Locally
1. Clone the project repository.

2. cd to the cloned directory.

3. Run `docker-compose up`.

4. When running the project for the first time, also run:
`docker-compose run backend python manage.py makemigrations`\
`docker-compose run backend python manage.py migrate`\
`docker-compose run backend python manage.py filldb`\
This will ready the database.

5. Once the container is running, open the web application on `127.0.0.1`.