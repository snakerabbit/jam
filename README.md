# jam

[jam][jam] is a full-stack web application that provides a forum for musicians to find other musicians to work with. Inspired by OKCupid, it matches users with similar music-related goals and allows them to communicate through a messaging channel. It uses a PostgreSQL database, a Ruby on Rails backend, and React/Flux frontend framework.


![Front Page](https://image.ibb.co/m1M8Tw/Screen_Shot_2017_09_29_at_10_26_00_AM.png)

## Features

- User accounts with secure authentication
- User profile pages
- Browse other users by the instrument they play
- Message other users
- Compatibility questions to determine match percentage
- View other user profiles

![UserProfile](https://image.ibb.co/iqsnMG/Screen_Shot_2017_09_29_at_10_35_10_AM.png)


![Messages](https://image.ibb.co/hwvDvb/Screen_Shot_2017_09_29_at_10_33_25_AM.png)




Like OKCupid, users can answer questions which pertain to their personalities and goals, which is then used to generate a compatibility match percentage with each other user which is loosely based on the [OKCupid Match Algorithm][OKCupidAlgorithm].







![UserBrowse](https://image.ibb.co/cAxwgG/Screen_Shot_2017_09_29_at_10_40_05_AM.png)


![Questions](https://image.ibb.co/mCGHow/Screen_Shot_2017_09_29_at_10_36_11_AM.png)

Users can also browse other user profiles with a filter based on which instrument the other users play.  This provides the users with the ability to search for specific types of musicians to reach out to.

![Filter](https://image.ibb.co/gMe3Tw/Screen_Shot_2017_09_29_at_10_42_16_AM.png)

## Technology

### Backend

jam is hosted on Heroku and runs on Ruby on Rails. The user and site data is stored in the PostgreSQL database with the use of BCrypt for user authentication and for encrypting sensitive data.  The backend provides RESTful route APIs and respond with JSON data.

### Frontend

jam utilizes the React.js framework and Flux structure to create the frontend framework to provide a single-page application.  Node package manager (npm) is used to install any dependencies for the frontend, and webpack is used to efficiently bundle all frontend files for deployment to Heroku.  

All of the React components, action creators, API utilities, dispatchers, and stores are located in the frontend directory.


## Future direction
At this time, jam can be considered a minimum viable product.  To transform it into a fully functional and user-friendly web application, I would like to implement the following:

- Push notifications for messaging through a real-time messaging websocket
- Editing profile information and upload images through Cloudinary
- Filter users by geolocation
- SearchBar to search users by profile attributes (i.e. favorite music genres, etc)
- User profiles with embedded SoundCloud Players to showcase their work


[OKCupidAlgorithm]: http://ed.ted.com/lessons/inside-okcupid-the-math-of-online-dating-christian-rudder
[jam]: https://jam-webapp.herokuapp.com/#/
