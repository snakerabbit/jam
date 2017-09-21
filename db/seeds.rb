# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "Alison", password: "123321", city:"Minneapolis", instrument:"piano", looking_for:"guitarist", image_url:"https://static.pexels.com/photos/60470/night-studio-color-minimalism-60470.jpeg")
user2 = User.create(username: "Wayne", password:"123321", city: "San Francisco", instrument:"guitar", looking_for:"drummer", image_url:"http://digitalpolyphony.webs.com/waynes-world_l.jpg")
user3 = User.create(username: "Garth", password:"123321", city: "San Francisco", instrument: "drums", looking_for:"vocalist", image_url:"http://filmgarb.com/wp-content/uploads/film-waynes_world-1992-garth_algar-dana_carvey-accessories-garth_glasses.jpg")
user3 = User.create(username: "Tia", password:"123321", city: "San Francisco", instrument: "bass guitar", looking_for:"vocalist", image_url:"http://www.snakkle.com/wp-content/uploads/2012/02/tia-carrere-waynes-world-watn-red-carpet-movie-photo-GC.jpg")
guest = User.create(username: "guest", password:"password")
