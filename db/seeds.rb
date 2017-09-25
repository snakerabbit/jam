# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
#
#
# user1 = User.create(username: "Alison",
#                     password: "123321",
#                     city:"Minneapolis",
#                     instrument:"piano",
#                     looking_for:"guitarist",
#                     image_url:"https://static.pexels.com/photos/60470/night-studio-color-minimalism-60470.jpeg",
#                     about_me:"I am a person.",
#                     fave_bands: "All the bands",
#                     fave_genres: "All the genres",
#                     purpose: "World Domination")
# user2 = User.create(username: "Wayne",
#                     password:"123321",
#                     city: "San Francisco",
#                     instrument:"guitar",
#                     looking_for:"drummer",
#                     image_url:"http://digitalpolyphony.webs.com/waynes-world_l.jpg",
#                     about_me: "I am super cool")
# user3 = User.create(username: "Garth",
#                     password:"123321",
#                     city: "San Francisco",
#                     instrument: "drums",
#                     looking_for:"vocalist",
#                     image_url:"http://filmgarb.com/wp-content/uploads/film-waynes_world-1992-garth_algar-dana_carvey-accessories-garth_glasses.jpg",
#                     about_me: "I am the greatest")
# user3 = User.create(username: "Tia",
#                     password:"123321",
#                     city: "San Francisco",
#                     instrument: "bass guitar",
#                     looking_for:"vocalist",
#                     image_url:"http://www.snakkle.com/wp-content/uploads/2012/02/tia-carrere-waynes-world-watn-red-carpet-movie-photo-GC.jpg",
#                     about_me: "Wut")
# guest = User.create(username: "guest",
#                     password:"password",
#                     about_me: "I am a guest user")
# user4 = User.create(username: "Bjork",
#                    password:"123321",
#                    city: "San Francisco",
#                    instrument: "voice",
#                    looking_for:"pianist",
#                    image_url:"https://vignette.wikia.nocookie.net/4chanmusic/images/0/08/Mai_wiafu.jpg/revision/latest?cb=20151031003036",
#                    about_me: "I am an Icelandic Singer")
user1 = User.create(username: "Thom Yorke",
                    password: "password",
                    city:"San Francisco",
                    instrument: "voice",
                    looking_for: "guitarist",
                    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Thom_Yorke_2016.jpg/440px-Thom_Yorke_2016.jpg",
                    about_me: "I am the singer of Radiohead",
                    fave_bands: "Radiohead",
                    fave_genres: "electronic, rock",
                    purpose:"Looking for people to jam with"
                    )
user2 = User.create(username: "Johnny Greenwood",
                    password: "password",
                    city:"San Francisco",
                    instrument: "guitar",
                    looking_for: "vocalist",
                    image_url: "https://upload.wikimedia.org/wikipedia/commons/4/47/Jonny_Greenwood_2016.jpg",
                    about_me: "I am the guitarist of Radiohead",
                    fave_bands: "Radiohead",
                    fave_genres: "electronic, rock",
                    purpose:"Looking for people to jam with"
                    )
user3 = User.create(username: "Ed O'Brien",
                    password: "password",
                    city:"San Francisco",
                    instrument: "guitar",
                    looking_for: "guitarist",
                    image_url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Ed_O%27brien_2017.jpeg",
                    about_me: "I am the secondary guitarist of Radiohead",
                    fave_bands: "Radiohead",
                    fave_genres: "electronic, rock",
                    purpose:"Looking for people to jam with"
                    )
user4 = User.create(username: "Colin Greenwood",
                    password: "password",
                    city:"San Francisco",
                    instrument: "bass guitar",
                    looking_for: "drummer",
                    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/CGreenwood2006-06Radiohead.jpg/1200px-CGreenwood2006-06Radiohead.jpg",
                    about_me: "I am the bassist of Radiohead",
                    fave_bands: "Radiohead",
                    fave_genres: "electronic, rock",
                    purpose:"Looking for people to jam with"
                    )
user5 = User.create(username: "Phil Selway",
                    password: "password",
                    city:"San Francisco",
                    instrument: "drums",
                    looking_for: "bass guitarist",
                    image_url: "http://diymag.com/media/img/Artists/P/Phil_Selway/_1500x1000_crop_center-center_75/phil_selway_2011_press_2048x1365.jpg",
                    about_me: "I am the drummer of Radiohead",
                    fave_bands: "Radiohead",
                    fave_genres: "electronic, rock",
                    purpose:"Looking for people to jam with"
                    )
user6 = User.create(username: "James Murphy",
                    password: "password",
                    city:"San Francisco",
                    instrument: "voice",
                    looking_for: "drummer",
                    image_url: "https://infectiousmagazine.com/wp-content/uploads/2013/05/james-murphy.jpg",
                    about_me: "I am the singer of LCD Soundsystem",
                    fave_bands: "LCD Soundsystem",
                    fave_genres: "electronic, rock, punk",
                    purpose:"Looking for people to jam with"
                    )
user7 = User.create(username: "Nancy Whang",
                    password: "password",
                    city:"San Francisco",
                    instrument: "piano",
                    looking_for: "guitarist",
                    image_url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Nancy_Whang.jpg",
                    about_me: "I am the keyboardist of LCD Soundsystem",
                    fave_bands: "LCD Soundsystem",
                    fave_genres: "electronic, rock",
                    purpose:"Looking for people to jam with"
                    )
user8 = User.create(username: "Tyler Pope",
                    password: "password",
                    city:"San Francisco",
                    instrument: "guitar",
                    looking_for: "guitarist",
                    image_url: "https://i1.sndcdn.com/artworks-000146926085-w1rgc2-t500x500.jpg",
                    about_me: "I am the guitarist of LCD Soundsystem",
                    fave_bands: "LCD Soundsystem",
                    fave_genres: "electronic, rock",
                    purpose:"Looking for people to jam with"
                    )
user9 = User.create(username: "Al Doyle",
                    password: "password",
                    city:"San Francisco",
                    instrument: "guitar",
                    looking_for: "guitarist",
                    image_url: "https://pbs.twimg.com/profile_images/549841879416578052/1DPK72YS.jpeg",
                    about_me: "I am the guitarist of LCD Soundsystem and Hot Chip",
                    fave_bands: "LCD Soundsystem, Hot Chip",
                    fave_genres: "electronic, rock",
                    purpose:"Looking for people to jam with"
                    )
user10 = User.create(username: "RZA",
                    password: "password",
                    city:"San Francisco",
                    instrument: "voice",
                    looking_for: "bass guitarist",
                    image_url: "https://upload.wikimedia.org/wikipedia/commons/0/0b/RZA_2009_%28cropped%29.jpg",
                    about_me: "I am an MC and producer of Wu Tang Clan",
                    fave_bands: "Wu Tang Clan",
                    fave_genres: "hip hop",
                    purpose:"Looking for people to jam with"
                    )
user11 = User.create(username: "GZA",
                    password: "password",
                    city:"San Francisco",
                    instrument: "voice",
                    looking_for: "guitarist",
                    image_url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Gza-01-mika.jpg",
                    about_me: "I am an MC and producer of Wu Tang Clan",
                    fave_bands: "Wu Tang Clan",
                    fave_genres: "hip hop",
                    purpose:"Looking for people to jam with"
                    )
user12 = User.create(username: "MethodMan",
                    password: "password",
                    city:"San Francisco",
                    instrument: "voice",
                    looking_for: "producer",
                    image_url: "http://hiphopgoldenage.com/wp-content/uploads/2015/07/Method-Man-1.jpg",
                    about_me: "I am an MC of Wu Tang Clan",
                    fave_bands: "Wu Tang Clan",
                    fave_genres: "hip hop",
                    purpose:"Looking for people to jam with"
                    )
user13 = User.create(username: "guest",
                     password: "password",
                     instrument: "voice",
                     looking_for: "producer",
                     image_url: "http://www.iconsdb.com/icons/preview/gray/guest-xxl.png",
                     )
