# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Question.destroy_all
Answer.destroy_all
Response.destroy_all
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

question1 = Question.create(body: "Can you read sheet music?")
question2 = Question.create(body: "How many years of experience do you have?")
question3 = Question.create(body: "Are you interested in playing live?")
question4 = Question.create(body: "Are you interested in recording the music you create?")
question5 = Question.create(body: "Is it a primary goal to be famous?")
question6 = Question.create(body: "Is it a primary goal to become a professional musician?")
question7 = Question.create(body: "I'm looking to collaborate:")


answer1 = Answer.create(body: "yes", question_id: question1.id)
answer2 = Answer.create(body: "no", question_id: question1.id)

answer3 = Answer.create(body: "0-1 years", question_id: question2.id)
answer4 = Answer.create(body: "1-3 years", question_id: question2.id)
answer5 = Answer.create(body: "3-5 years", question_id: question2.id)
answer6 = Answer.create(body: "5+ years", question_id: question2.id)

answer7 = Answer.create(body: "yes", question_id: question3.id)
answer8 = Answer.create(body: "no", question_id: question3.id)

answer9 = Answer.create(body: "yes", question_id: question4.id)
answer10 = Answer.create(body: "no", question_id: question4.id)

answer11 = Answer.create(body: "yes", question_id: question5.id)
answer12 = Answer.create(body: "no", question_id: question5.id)

answer13 = Answer.create(body: "yes", question_id: question6.id)
answer14 = Answer.create(body: "no", question_id: question6.id)

answer15 = Answer.create(body: "daily", question_id: question7.id)
answer16 = Answer.create(body: "weekly", question_id: question7.id)
answer16 = Answer.create(body: "monthly", question_id: question7.id)
answer16 = Answer.create(body: "let's play it by ear", question_id: question7.id)
answer17 = Answer.create(body: "once", question_id: question7.id)



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
#thom york responses
r1 = Response.create(answer_id: answer1.id, user_id: user1.id, importance: 1, accepted_answers:[1], explanation: "")
r2 = Response.create(answer_id: answer3.id, user_id: user1.id, importance: 5, accepted_answers:[3], explanation: "")
r3 = Response.create(answer_id: answer7.id, user_id: user1.id, importance: 5, accepted_answers:[7], explanation: "")
r4 = Response.create(answer_id: answer9.id, user_id: user1.id, importance: 5, accepted_answers:[9], explanation: "")
r5 = Response.create(answer_id: answer11.id, user_id: user1.id, importance: 5, accepted_answers:[11], explanation: "")
r6 = Response.create(answer_id: answer14.id, user_id: user1.id, importance: 5, accepted_answers:[14], explanation: "")
r7 = Response.create(answer_id: answer16.id, user_id: user1.id, importance: 5, accepted_answers:[16], explanation: "")

#johnny greenwood responses
r8 = Response.create(answer_id: answer4.id, user_id: user2.id, importance: 1, accepted_answers:[4], explanation: "")
r9 = Response.create(answer_id: answer8.id, user_id: user2.id, importance: 1, accepted_answers:[8], explanation: "")
r10 = Response.create(answer_id: answer2.id, user_id: user2.id, importance: 1, accepted_answers:[2], explanation: "")
r11 = Response.create(answer_id: answer10.id, user_id: user2.id, importance: 1, accepted_answers:[10], explanation: "")
r12 = Response.create(answer_id: answer14.id, user_id: user2.id, importance: 1, accepted_answers:[14], explanation: "")

#ed o'brien responses
r13 = Response.create(answer_id: answer3.id, user_id: user3.id, importance: 5, accepted_answers:[3], explanation: "")
r14 = Response.create(answer_id: answer7.id, user_id: user3.id, importance: 5, accepted_answers:[7], explanation: "")
r15 = Response.create(answer_id: answer9.id, user_id: user3.id, importance: 5, accepted_answers:[9], explanation: "")
r16 = Response.create(answer_id: answer14.id, user_id: user3.id, importance: 5, accepted_answers:[14], explanation: "")

#colin greenwood responses
r17 = Response.create(answer_id: answer1.id, user_id: user4.id, importance: 10, accepted_answers:[1], explanation: "")
r18 = Response.create(answer_id: answer3.id, user_id: user4.id, importance: 10, accepted_answers:[3], explanation: "")
r19 = Response.create(answer_id: answer7.id, user_id: user4.id, importance: 10, accepted_answers:[7], explanation: "")
r20 = Response.create(answer_id: answer9.id, user_id: user4.id, importance: 10, accepted_answers:[9], explanation: "")
r21 = Response.create(answer_id: answer11.id, user_id: user4.id, importance: 10, accepted_answers:[11], explanation: "")
r22 = Response.create(answer_id: answer14.id, user_id: user4.id, importance: 10, accepted_answers:[14], explanation: "")
r23 = Response.create(answer_id: answer16.id, user_id: user4.id, importance: 10, accepted_answers:[16], explanation: "")

#Phil Selway responses
r24 = Response.create(answer_id: answer3.id, user_id: user5.id, importance: 5, accepted_answers:[3], explanation: "")
r25 = Response.create(answer_id: answer7.id, user_id: user5.id, importance: 5, accepted_answers:[7], explanation: "")
r26 = Response.create(answer_id: answer9.id, user_id: user5.id, importance: 5, accepted_answers:[9], explanation: "")
r27 = Response.create(answer_id: answer14.id, user_id: user5.id, importance: 5, accepted_answers:[14], explanation: "")

#James Murphy responses
r28 = Response.create(answer_id: answer4.id, user_id: user6.id, importance: 1, accepted_answers:[4], explanation: "")
r29 = Response.create(answer_id: answer8.id, user_id: user6.id, importance: 5, accepted_answers:[8], explanation: "")

#Nancy Whang responses
r30 = Response.create(answer_id: answer6.id, user_id: user7.id, importance: 1, accepted_answers:[6], explanation: "")

#Typer Pope has no responses

#Al Doyle responses
r31 = Response.create(answer_id: answer9.id, user_id: user9.id, importance: 5, accepted_answers:[9], explanation: "")
r32 = Response.create(answer_id: answer11.id, user_id: user9.id, importance: 10, accepted_answers:[11], explanation: "")
r33 = Response.create(answer_id: answer14.id, user_id: user9.id, importance: 1, accepted_answers:[14], explanation: "")

#RZA responses
r34 = Response.create(answer_id: answer4.id, user_id: user10.id, importance: 1, accepted_answers:[4], explanation: "")
r35 = Response.create(answer_id: answer8.id, user_id: user10.id, importance: 5, accepted_answers:[8], explanation: "")
r36 = Response.create(answer_id: answer2.id, user_id: user10.id, importance: 5, accepted_answers:[2], explanation: "")
r37 = Response.create(answer_id: answer10.id, user_id: user10.id, importance: 10, accepted_answers:[10], explanation: "")
r38 = Response.create(answer_id: answer14.id, user_id: user10.id, importance: 5, accepted_answers:[14], explanation: "")

#GZA responses
r39 = Response.create(answer_id: answer9.id, user_id: user11.id, importance: 1, accepted_answers:[9], explanation: "")
r40 = Response.create(answer_id: answer11.id, user_id: user11.id, importance: 5, accepted_answers:[11], explanation: "")
r41 = Response.create(answer_id: answer14.id, user_id: user11.id, importance: 10, accepted_answers:[14], explanation: "")

#MethodMan responses
r42 = Response.create(answer_id: answer4.id, user_id: user12.id, importance: 1, accepted_answers:[4], explanation: "")
r43= Response.create(answer_id: answer8.id, user_id: user12.id, importance: 5, accepted_answers:[8], explanation: "")
r44 = Response.create(answer_id: answer2.id, user_id: user12.id, importance: 10, accepted_answers:[2], explanation: "")

#guest has no responses
