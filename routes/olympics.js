var router = require('express').Router();

//Athlete Arrays
var badminton = [
  {name: 'Phillip Chew', hometown: 'Orange, CA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/chew_phillip_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Eva Lee', hometown: 'Diamond Bar, CA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/lee_eva_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Paula Lynn Obanana', hometown: 'West Covina, CA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/obanana_paula_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Sattawat Pongnairat', hometown: 'Orange, CA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/pongnairat_sattawat_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Howard Shu', hometown: 'Anaheim, CA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/shu_howard_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Jamie Subandhi', hometown: 'Westminster, CA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/subandhi_jamie_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Iris Wang', hometown: 'Arcadia, CA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/wang_iris_100x167.jpg?h=167&w=100&la=en'},
];
var fencing = [
  {name: 'Miles Chamley-Watson ', hometown: 'New York, NY', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/Watson_Chamley_Miles_100x167.jpg?la=en'},
  {name: 'Eli Dershwitz', hometown: 'Sherborn, MA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/Dershwitz_eli_100x167.jpg?la=en'},
  {name: 'Katharine Holmes', hometown: 'Washington, DC', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/Holmes_Kat_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Daryl Homer', hometown: 'Bronx, NY', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/homer_daryl_100x167.jpg?la=en'},
  {name: 'Courtney Hurley', hometown: 'Houston, TX', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/hurley_courtney_100x167_2.jpg?la=en'},
  {name: 'Kelley Hurley', hometown: 'San Antonio, TX', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/hurley_kelley_100x167.jpg?la=en'},
  {name: 'Lee Kiefer', hometown: 'Lexington, KY', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/kiefer_lee_100x167.jpg?la=en'},
  {name: 'Alex Massialas', hometown: 'San Francisco, CA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/massialas_alex_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Gerek Meinhardt', hometown: 'San Francisco, CA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/meinhardt_gerek_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Ibtihaj Muhammad', hometown: 'Maplewood, NJ', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/Muhammad_Ibtihaj_100x167.jpg?la=en'},
  {name: 'Nzingha Prescod', hometown: 'Brooklyn, NY', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/Prescod_Nzingha_100x167.jpg?la=en'},
  {name: 'Jason Pryor', hometown: 'South Euclid, OH', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/Pryor_Jason_100x167_1.jpg?h=167&w=100&la=en'},
  {name: 'Dagmara Wozniak', hometown: 'Avenel, NJ', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/wozniak_dagmara_100x167.jpg?la=en'},
  {name: 'Mariel Zagunis', hometown: 'Beaverton, OR', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/zagunis_mariel_100x167.jpg?la=en'}
];
var equestrian = [
  {name: 'Allison Brock', hometown: 'Wellington, FL', image: 'http://www.teamusa.org/~/media/TeamUSA/Equestrian/Brock_Allison/Brock_Allison_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Lucy Davis', hometown: 'Los Angeles, CA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/Davis_Lucy_100x167.jpg?la=en'},
  {name: 'Phillip Dutton', hometown: 'West Grove, PA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/dutton_phillip_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Kent Farrington', hometown: 'Wellington, FL', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/Farrington_Kent_100x167.jpg?la=en'},
  {name: 'Laura Graves', hometown: 'Orlando, FL', image: 'http://www.teamusa.org/~/media/TeamUSA/Equestrian/Graves_Laura/Graves_Laura_100x167.jpg?la=en'},
  {name: 'Lauren Kieffer', hometown: 'Middleburg, VA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/kieffer_lauren_100x167.jpg?la=en'},
  {name: 'Beezie Madden', hometown: 'Cazenovia, NY', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/Madden_Beezie_100x167.jpg?la=en'},
  {name: 'Boyd Martin', hometown: 'Cochranville, PA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/martin_boyd_100x167.jpg?la=en'},
  {name: 'Clark Montgomery', hometown: 'Mineral Wells, TX', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/montgomery_clark_100x167.jpg?la=en'},
  {name: 'Steffen Peters', hometown: 'San Diego, CA', image: 'http://www.teamusa.org/~/media/TeamUSA/Equestrian/Peters_Steffen/Peters_Steffen_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Kasey Perry-Glass', hometown: 'Orangevale, CA', image: 'http://www.teamusa.org/~/media/TeamUSA/Equestrian/PerryGlass_Kasey/Perry_Kasey_100x167.jpg?la=en'},
  {name: 'McLain Ward', hometown: 'Brewster, NY', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/Ward_McLain_100x167.jpg?la=en'}
];
var archery = [
  {name: 'Mackenzie Brown', hometown: 'Flint, TX', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/brown_mackenzie_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Brady Ellison', hometown: 'Globe, AZ', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/ellison_brady_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Zach Garrett', hometown: 'Wellington, MO', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/garrett_zach_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Jake Kaminski', hometown: 'Gainesville, FL', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/kaminski_jake_100x167.jpg?h=167&w=100&la=en'}
];
var sailing = [
  {name: 'Thomas Barrows III', hometown: 'St. Thomas, VI', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/barrows_thomas_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Charlie Buckingham', hometown: 'Newport Beach, CA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/buckingham_charlie_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Louisa Chafee', hometown: 'Saunderstown, RI', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/chafee_louisa_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Bora Gulari', hometown: 'Detroit, MI', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/gulari_bora_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Annie Haeger', hometown: 'East Troy, WI', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/haeger_annie_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Paris Henken', hometown: 'Coronado, CA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/henken_paris_100x167.jpg?h=167&w=100&la=en'},
  {name: 'David Hughes', hometown: 'Miami, FL', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/hughes_david_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Marion Lepert', hometown: 'Belmont, CA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/lepert_marion_100x167.jpg?la=en'},
  {name: 'Stu McNay', hometown: 'Providence, RI', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/mcnay_stu_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Joe Morris', hometown: 'Annapolis, MD', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/morris_joe_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Caleb Paine', hometown: 'San Diego, CA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/paine_caleb_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Pedro Pascual', hometown: 'West Palm Beach, FL', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/pascual_pedro_100x167.jpg?la=en'},
  {name: 'Briana Provancha', hometown: 'San Diego, CA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/provancha_briana_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Paige Railey', hometown: 'Clearwater, FL', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/railey_page_100x167.jpg?h=167&w=100&la=en'},
  {name: 'Helena Scutt', hometown: 'Kirkland, WA', image: 'http://www.teamusa.org/~/media/TeamUSA/RioHeadshots/scutt_helena_100x167.jpg?h=167&w=100&la=en'}
];

function random(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

router.get('/badminton', function(request, response) {
  response.send(badminton[random(badminton.length - 1)]);
})

router.get('/fencing', function(request, response) {
  response.send(fencing[random(fencing.length - 1)]);
})

router.get('/equestrian', function(request, response) {
  response.send(equestrian[random(equestrian.length - 1)]);
})

router.get('/archery', function(request, response) {
  response.send(archery[random(archery.length - 1)]);
})

router.get('/sailing', function(request, response) {
  response.send(sailing[random(sailing.length - 1)]);
})

module.exports = router;
