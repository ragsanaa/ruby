This project use Django Rest Framework and was written in Python. First you should install python.
Then install Django and djangorestframework:
    python -m pip install django djangorestframework
Then you should install Djoser for authentication system.
    python -m pip install djoser
Then you should install corsheaders
    python -m pip install django-cors-headers
Also you should install PostgreSQL, than install psycopg2 module for python
    python -m pip install psycopg2
After that you should create database in PostgreSQL and create user for this database.

Before run the project start PostgreSQL server.
Change from settings.py database username and password to your database username and password.

You should install all dependencies:
    npm i axios
    npm i dayjs
    npm i react-router-dom
    npm i react-simple-star-rating

Then you should run migrations:
    python manage.py makemigrations
    python manage.py migrate

Then you should create superuser:
    python manage.py createsuperuser

Then you should run server:
    python manage.py runserver

Then you should run frontend:
    npm start

