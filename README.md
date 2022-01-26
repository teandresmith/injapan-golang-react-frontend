# InJapan

InJapan is a blog that provides raw and uncut information about
Japanese related topics from the personal experience of a foreigner.
These topics can range from anime to cultural expectations.
InJapan is designed for those who are intererested in learning
about Japan in raw media form.

## InJapan v3 (Version 3)

This is another complete revamp from the previous version
and can be referred to as InJapan v3 (version 3).
InJapan v1 and v2 are benefiting from the availability of
free hosting from Heroku. Because InJapan v1, v2 and v3 features
a completely different tech stack, each version has been
intentionally left viewable to the public to show the
growth and development of InJapan's architecture.
If interested in the growth and development, each version's
host site and repository link will be located just below.

### Note

_Due to the newest version of InJapan having two
separate repositories, this repository's README will serve as
the main source of details related to this project_

### InJapan Links

#### InJapan v3 (Newest & Most Current Version):

- Hosting Site: https://injapan.netlify.app/
- FE Repository: https://github.com/teandresmith/injapan-golang-react-frontend
- BE Repository: https://github.com/teandresmith/injapan-golang-react-backend

#### InJapan v2:

- Hosting Site: https://injapan.herokuapp.com/
- Repository: https://github.com/teandresmith/InJapan

#### InJapan v1:

- Hosting Site: https://injapanblog.herokuapp.com/
- Repository: https://github.com/teandresmith/InJapan_Blog

### Table Comparison of Tech Stacks

| "                 | InJapan v1             | InJapan v2                     | InJapan v3           |
| ----------------- | ---------------------- | ------------------------------ | -------------------- |
| Frontend          | Flask Jinja2 Templates | Express.js Handlebar Templates | React.js             |
| Styling Framework | Bootstrap              | Vanilla CSS + JS               | Vanilla CSS          |
| State Management  | None                   | None                           | Redux Toolkit        |
| Database          | PostgreSQL             | MongoDB                        | MongoDB              |
| ORM               | SQLAlchemy             | Mongoose                       | Mongo-driver/Mongo   |
| Web Server        | Flask-Python           | Express.js                     | Go Gin-Gonic         |
| Deployment Env    | Heroku                 | Heroku                         | Netlify / GCP        |
| Auth              | email/password         | email/password                 | JWT + email/password |

## InJapan v3 - Under The Hood

The details of the underlying architecture can be found below.

### Technology Stack

- React.js
- Redux Toolkit + RTK Query
- Golang (Gin Framework)
- MongoDB

### Frontend Design & State Management

InJapan v3's user interface design looks relatively the same as
v2's, but the underlying architecture is completely different.

InJapan v3's frontend implements SPA (Single Page Application)
by using React.js. Unlike v2's Express.js server rendered html
templates, a React frontend only needs to load on the initial
request which provides a very natural, no need to wait experience.

Additionally, InJapan v3 uses the Redux Toolkit & RTK Query to
handle state management, API Requests, and caching.

### Backend Server Design & Authentication

In the previous version (v2), InJapan featured an Express.js
server written with Node.js, but with InJapan v3, the backend is
powered by Golang and a Gin web server framework. The database
used still remains the same which is MongoDB.

Also, no HTML is being served by the backend, instead InJapan v3
opted for more of a REST API design. This allows separate hosting
and portability should the API ever need to be used by any
other project.

Authentication is implemented with the help of JWT
(JSON Web Tokens). There is no actual login for users, but
there is a custom Content Management System (CMS) for admins
that allows for easy CRUD operations for each blog and
these routes can only be access with the use of a token.

### InJapan v3 Deployment

Both InJapan v1 and v2 used Heroku as their source of deployment,
but due to Heroku's lack of low costing options in the Asian region,
InJapan v3 went with other sources.

The React.js frontend is using Netlify as its hosting service.
Because Netlify is serverless, free and provides regional support
within Asia ( by the use of their CDN ), it was the perfect choice
for the frontend.

For the Golang API, it seemed only natural to make use of Google
Cloud's App Engine Standard. App Engine provides a serverless,
low-costing, and Golang supported hosting option.

## Additional Info

There is no set schedule for blog postings or updates to the
website, but InJapan v3 will continue to see improvements
as time allows.

## 🔗 Contact Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/teandre-smith/)
