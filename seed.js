const models = require('./db/models');
const {Student, Campus} = models;

const campus1 = Campus.create({name: 'Venus', imageUrl: 'https://pdsmaps.wr.usgs.gov/PDS/public/explorer/images/dionebut1.jpg'});
const campus2 = Campus.create({name: 'Jupiter', imageUrl: 'http://3.bp.blogspot.com/-k0vW9j9_nFI/VAKdlRX9YRI/AAAAAAAABtw/0TLcs4rtZvk/s1600/5.jpg'});
const campus3 = Campus.create({name: 'Earth', imageUrl: 'http://images2.storyjumper.com/transcoder.png?trim&id=67-0wctc5shjn-56glubvll&maxw=256&maxh=256'});
const campus4 = Campus.create({name: 'Mars', imageUrl: 'https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2017/04/07162045/mars-globe-valles-marineris-enhanced-full-800x533.jpg'});
const campus5 = Campus.create({name: 'Luna', imageUrl: 'http://pmdvod.nationalgeographic.com/NG_Video/960/211/moon-101-nasa_640x360_808580163611.jpg'});

Promise.all([campus1, campus2, campus3, campus4, campus5])
.then( () => {
	Student.create({name: 'Jake Monsoon', campusId: 1});
	Student.create({name: 'Jahana Calabrese', campusId: 2});
	Student.create({name: 'Rachel Lee', campusId: 3});
	Student.create({name: 'Gulnar Shah', campusId: 4});
	Student.create({name: 'Lindsay Hall', campusId: 5});
	Student.create({name: 'David Shoemaker', campusId: 5});
	Student.create({name: 'Jake Calabrese', campusId: 5});
	Student.create({name: 'Jahana Lee', campusId: 4});
	Student.create({name: 'Rachel Monsoon', campusId: 1});
	Student.create({name: 'Gulnar Shah', campusId: 2});
	Student.create({name: 'Lindsay Monsoon', campusId: 3});
	Student.create({name: 'David Calabrese', campusId: 4});
	Student.create({name: 'Jake Shoemaker', campusId: 1});
	Student.create({name: 'Jahana Monsoon', campusId: 2});
	Student.create({name: 'Rachel Shah', campusId: 3});
	Student.create({name: 'Gulnar Shah', campusId: 4});
	Student.create({name: 'Lindsay Calabrese', campusId: 1});
	Student.create({name: 'Jason Hall', campusId: 2});
	Student.create({name: 'Jennifer Hu', campusId: 4});
	Student.create({name: 'Michelle Tucek', campusId: 1});
});
