//Selecting all elements within the HTML element
var fajr_element = document.querySelector('#Fajr');
var dhur_element = document.querySelector('#Dhur');
var asr_element = document.querySelector('#Asr');
var maghrib_element = document.querySelector('#Maghrib');
var isha_element = document.querySelector('#Isha');
var currentDate = new Date();

//First April
var firstApril = new Date();
firstApril.setMonth(03);
firstApril.setDate(01);

var first = {
    fajr: "5:16",
    dhur: "1:30",
    asr: "4:47",
    maghrib: "7:46",
    isha: "9:12"
}
//SecondApril
var secondApril = new Date();
secondApril.setMonth(03);
secondApril.setDate(02);

var second = {
    fajr: "5:14",
    dhur: "1:30",
    asr: "4:48",
    maghrib: "7:48",
    isha: "9:13"
}
//third April
var thirdApril = new Date();
thirdApril.setMonth(03);
thirdApril.setDate(03);


var third = { 
    fajr: "5:12",
    dhur: "1:30",
    asr: "4:49",
    maghrib: "7:49",
    isha: "9:12"
}
//Forth April
var fourthApril = new Date();
fourthApril.setMonth(03);
fourthApril.setDate(04);


var fourth = {
    fajr: "5:10",
    dhur: "1:30",
    asr: "4:50",
    maghrib: "7:51",
    isha: "9:16"
}

//Filth April
var fiveApril = new Date();
fiveApril.setMonth(03);
fiveApril.setDate(05);


var five = {
    fajr: "5:07",
    dhur: "1:30",
    asr: "4:51",
    maghrib: "7:53",
    isha: "9:18"
}
//sixth april
var sixApril = new Date();
sixApril.setMonth(03);
sixApril.setDate(06);


var six = {
    fajr: "5:05",
    dhur: "1:30",
    asr: "4:52",
    maghrib: "7:54",
    isha: "9:19"
}

//seven April
var sevenApril = new Date();
sevenApril.setMonth(03);
sevenApril.setDate(07);

var seven = {
    fajr: "5:03",
    dhur: "1:30",
    asr: "4:52",
    maghrib: "7:56",
    isha: "9:21"
}
//eightApril
var eightApril = new Date();
eightApril.setMonth(03);
eightApril.setDate(08);

var eight = {
    fajr: "5:01",
    dhur: "1:30",
    asr: "4:53",
    maghrib: "7:58",
    isha: "9:23"
}
// nine April
var nineApril = new Date();
nineApril.setMonth(03);
nineApril.setDate(09);

var nine = {
    fajr: "4:58",
    dhur: "1:30",
    asr: "4:54",
    maghrib: "7:59",
    isha: "9:24"
}

var tenApril = new Date();
tenApril.setMonth(03);
tenApril.setDate(10);

var ten = {
    fajr:"4:56",
    dhur: "1:30",
    asr: "4:55",
    maghrib: "8:01",
    isha: "9:26"
}

var elevenApril = new Date();
elevenApril.setMonth(03);
elevenApril.setDate(11);

var eleven = {
    fajr: "4:54",
    dhur: "1:30",
    asr: "4:56",
    maghrib: "8:03",
    isha: "9:28"
}

var twelveApril = new Date();
twelveApril.setMonth(03);
twelveApril.setDate(12);

var twelve = {
    fajr: "4:52",
    dhur: "1:30",
    asr: "4:57",
    maghrib: "8:04",
    isha: "9:29"
}

var thirteenApril = new Date();
thirteenApril.setMonth(03);
thirteenApril.setDate(13);

var thirteen = {
    fajr: "4:50",
    dhur: "1:30",
    asr: "4:57",
    maghrib: "8:06",
    isha: "9:31"
}

var fourteenApril = new Date();
fourteenApril.setMonth(03);
fourteenApril.setDate(14);

var fourteen ={
    fajr: "4:47",
    dhur: "1:30",
    asr: "4:58",
    maghrib: "8:08",
    isha: "9:33"
}

var fifteenApril = new Date();
fifteenApril.setMonth(03);
fifteenApril.setDate(15);

var fifteen = {
    fajr: "4:45",
    dhur: "1:30",
    asr: "4:59",
    maghrib: "8:09",
    isha: "9:34"
}

var sixteenApril = new Date();
sixteenApril.setMonth(03);
sixteenApril.setDate(16);

var sixteen = {
    fajr: "4:43",
    dhur: "1:30",
    asr: "5:00",
    maghrib: "8:11",
    isha: "9:36"
}

var seventeenApril = new Date();
seventeenApril.setMonth(03);
seventeenApril.setDate(17);

var seventeen = {
    fajr: "4:41",
    dhur: "1:30",
    asr: "5:01",
    maghrib: "8:13",
    isha: "9:38"
}

var eightteenApril = new Date();
eightteenApril.setMonth(03);
eightteenApril.setDate(18);

var eightteen = {
    fajr: "4:39",
    dhur: "1:30",
    asr: "5:01",
    maghrib: "8:14",
    isha: "9:39"
}

var nineteenApril = new Date();
nineteenApril.setMonth(03);
nineteenApril.setDate(19);

var nineteen = {
    fajr: "4:37",
    dhur: "1:30",
    asr: "5:02",
    maghrib: "8:16",
    isha: "9:41"
}

var twentyApril = new Date();
twentyApril.setMonth(03);
twentyApril.setDate(20);

var twenty = {
    fajr: "4:35",
    dhur: "1:30",
    asr: "5:03",
    maghrib: "8:18",
    isha: "9:43"
}
var twentyoneApril = new Date();
twentyoneApril.setMonth(03);
twentyoneApril.setDate(21);

var twentyone = {
    fajr: "4:33",
    dhur: "1:30",
    asr: "5:04",
    maghrib: "8:19",
    isha: "9:44"
}

var twentytwoApril = new Date();
twentytwoApril.setMonth(03);
twentytwoApril.setDate(22);

var twentytwo = {
    fajr: "4:30",
    dhur: "1:30",
    asr: "5:04",
    maghrib: "8:21",
    isha: "9:46"
}

var twentythirdApril = new Date();
twentythirdApril.setMonth(03);
twentythirdApril.setDate(23);

var twentythird = {
    fajr: "4:28",
    dhur: "1:30",
    asr: "5:05",
    maghrib: "8:23",
    isha: "9:48"
}

var twentyfourApril = new Date();
twentyfourApril.setMonth(03);
twentyfourApril.setDate(24);

var twentyfour = {
    fajr: "4:26",
    dhur: "1:30",
    asr: "5:06",
    maghrib: "8:24",
    isha: "9:49"
}

var twentyfiveApril = new Date();
twentyfiveApril.setMonth(03);
twentyfiveApril.setDate(25);

var twentyfive = {
    fajr: "4:24",
    dhur: "1:30",
    asr: "5:06",
    maghrib: "8:26",
    isha: "9:51"
}

var twentysixApril = new Date();
twentysixApril.setMonth(03);
twentysixApril.setDate(26);

var twentysix = {
    fajr: "4:22",
    dhur: "1:30",
    asr: "5:07",
    maghrib: "8:28",
    isha: "9:53"
}

var twentysevenApril = new Date();
twentysevenApril.setMonth(03);
twentysevenApril.setDate(27);


var twentyseven = {
    fajr: "4:20",
    dhur: "1:30",
    asr: "5:08",
    maghrib: "8:29",
    isha: "9:54"
}

var twentyeightApril = new Date();
twentyeightApril.setMonth(03);
twentyeightApril.setDate(28);

var twentyeight = {
    fajr: "4:19",
    dhur: "1:30",
    asr: "5:09",
    maghrib: "8:31",
    isha: "9:56"
}

var twentynineApril = new Date();
twentynineApril.setMonth(03);
twentynineApril.setDate(29);

var twentynine = {
    fajr: "4:17",
    dhur: "1:30",
    asr: "5:09",
    maghrib: "8:33",
    isha: "9:58"
}

var thirtyApril = new Date();
thirtyApril.setMonth(03);
thirtyApril.setDate(30);

var thirty ={
    fajr: "4:17",
    dhur: "1:30",
    asr: "5:10",
    maghrib: "8:34",
    isha: "9:58"
}

if(currentDate.getTime() == firstApril.getTime()){
    fajr_element.textContent = `${first.fajr}`;
    dhur_element.textContent = `${first.dhur}`;
    asr_element.textContent = `${first.asr}`;
    maghrib_element.textContent = `${first.maghrib}`;
    isha_element.textContent = `${first.isha}`;
} else if (currentDate.getTime() == secondApril.getTime()){
    fajr_element.textContent = `${second.fajr}`;
    dhur_element.textContent = `${second.dhur}`;
    asr_element.textContent = `${second.asr}`;
    maghrib_element.textContent = `${second.maghrib}`;
    isha_element.textContent = `${second.isha}`;
}else if (currentDate.getTime() == thirdApril.getTime()){
    fajr_element.textContent = `${third.fajr}`;
    dhur_element.textContent = `${third.dhur}`;
    asr_element.textContent = `${third.asr}`;
    maghrib_element.textContent = `${third.maghrib}`;
    isha_element.textContent = `${third.isha}`;
} else if (currentDate.getTime() == fourthApril.getTime()){
    fajr_element.textContent = `${fourth.fajr}`;
    dhur_element.textContent = `${fourth.dhur}`;
    asr_element.textContent = `${fourth.asr}`;
    maghrib_element.textContent = `${fourth.maghrib}`;
    isha_element.textContent = `${fourth.isha}`;
} else if (currentDate.getTime() == fiveApril.getTime()){
    fajr_element.textContent = `${five.fajr}`;
    dhur_element.textContent = `${five.dhur}`;
    asr_element.textContent = `${five.asr}`;
    maghrib_element.textContent = `${five.maghrib}`;
    isha_element.textContent = `${five.isha}`;
} else if (currentDate.getTime() == sixApril.getTime()){
    fajr_element.textContent = `${six.fajr}`;
    dhur_element.textContent = `${six.dhur}`;
    asr_element.textContent = `${six.asr}`;
    maghrib_element.textContent = `${six.maghrib}`;
    isha_element.textContent = `${six.isha}`;
} else if (currentDate.getTime() == sevenApril.getTime()){
    fajr_element.textContent = `${seven.fajr}`;
    dhur_element.textContent = `${seven.dhur}`;
    asr_element.textContent = `${seven.asr}`;
    maghrib_element.textContent = `${seven.maghrib}`;
    isha_element.textContent = `${seven.isha}`;
} else if (currentDate.getTime() == eightApril.getTime()){
    fajr_element.textContent = `${eight.fajr}`;
    dhur_element.textContent = `${eight.dhur}`;
    asr_element.textContent = `${eight.asr}`;
    maghrib_element.textContent = `${eight.maghrib}`;
    isha_element.textContent = `${eight.isha}`;
} else if (currentDate.getTime() == nineApril.getTime()) {
    fajr_element.textContent = `${nine.fajr}`;
    dhur_element.textContent = `${nine.dhur}`;
    asr_element.textContent = `${nine.asr}`;
    maghrib_element.textContent = `${nine.maghrib}`;
    isha_element.textContent = `${nine.isha}`;
} else if (currentDate.getTime() == tenApril.getTime()) {
    fajr_element.textContent = `${ten.fajr}`;
    dhur_element.textContent = `${ten.dhur}`;
    asr_element.textContent = `${ten.asr}`;
    maghrib_element.textContent = `${ten.maghrib}`;
    isha_element.textContent = `${ten.isha}`;
} else if (currentDate.getTime() == elevenApril.getTime()){
    fajr_element.textContent = `${eleven.fajr}`;
    dhur_element.textContent = `${eleven.dhur}`;
    asr_element.textContent = `${eleven.asr}`;
    maghrib_element.textContent = `${eleven.maghrib}`;
    isha_element.textContent = `${eleven.isha}`;
} else if (currentDate.getTime() == twelveApril.getTime()){
    fajr_element.textContent = `${twelve.fajr}`;
    dhur_element.textContent = `${twelve.dhur}`;
    asr_element.textContent = `${twelve.asr}`;
    maghrib_element.textContent = `${twelve.maghrib}`;
    isha_element.textContent = `${twelve.isha}`;
} else if (currentDate.getTime() == thirteenApril.getTime()){
    fajr_element.textContent = `${thirteen.fajr}`;
    dhur_element.textContent = `${thirteen.dhur}`;
    asr_element.textContent = `${thirteen.asr}`;
    maghrib_element.textContent = `${thirteen.maghrib}`;
    isha_element.textContent = `${thirteen.isha}`;
}else if(currentDate.getTime() == fourteenApril.getTime()){
    fajr_element.textContent = `${fourteen.fajr}`;
    dhur_element.textContent = `${fourteen.dhur}`;
    asr_element.textContent = `${fourteen.asr}`;
    maghrib_element.textContent = `${fourteen.maghrib}`;
    isha_element.textContent = `${fourteen.isha}`;
}else if(currentDate.getTime() == fifteenApril.getTime()){
    fajr_element.textContent = `${fifteen.fajr}`;
    dhur_element.textContent = `${fifteen.dhur}`;
    asr_element.textContent = `${fifteen.asr}`;
    maghrib_element.textContent = `${fifteen.maghrib}`;
    isha_element.textContent = `${fifteen.isha}`;
}else if(currentDate.getTime() == sixteenApril.getTime()){
    fajr_element.textContent = `${sixteen.fajr}`;
    dhur_element.textContent = `${sixteen.dhur}`;
    asr_element.textContent = `${sixteen.asr}`;
    maghrib_element.textContent = `${sixteen.maghrib}`;
    isha_element.textContent = `${sixteen.isha}`;
}else if(currentDate.getTime() == seventeenApril.getTime()){
    fajr_element.textContent = `${seventeen.fajr}`;
    dhur_element.textContent = `${seventeen.dhur}`;
    asr_element.textContent = `${seventeen.asr}`;
    maghrib_element.textContent = `${seventeen.maghrib}`;
    isha_element.textContent = `${seventeen.isha}`;
}else if(currentDate.getTime() == eightteenApril.getTime()){
    fajr_element.textContent = `${eightteen.fajr}`;
    dhur_element.textContent = `${eightteen.dhur}`;
    asr_element.textContent = `${eightteen.asr}`;
    maghrib_element.textContent = `${eightteen.maghrib}`;
    isha_element.textContent = `${eightteen.isha}`;
}else if(currentDate.getTime() == nineteenApril.getTime()){
    fajr_element.textContent = `${nineteen.fajr}`;
    dhur_element.textContent = `${nineteen.dhur}`;
    asr_element.textContent = `${nineteen.asr}`;
    maghrib_element.textContent = `${nineteen.maghrib}`;
    isha_element.textContent = `${nineteen.isha}`;
}else if(currentDate.getTime() == twentyApril.getTime()){
    fajr_element.textContent = `${twenty.fajr}`;
    dhur_element.textContent = `${twenty.dhur}`;
    asr_element.textContent = `${twenty.asr}`;
    maghrib_element.textContent = `${twenty.maghrib}`;
    isha_element.textContent = `${twenty.isha}`;
}else if(currentDate.getTime() == twentyoneApril.getTime()){
    fajr_element.textContent = `${twentyone.fajr}`;
    dhur_element.textContent = `${twentyone.dhur}`;
    asr_element.textContent = `${twentyone.asr}`;
    maghrib_element.textContent = `${twentyone.maghrib}`;
    isha_element.textContent = `${twentyone.isha}`;
}else if(currentDate.getTime() == twentytwoApril.getTime()){
    fajr_element.textContent = `${twentytwo.fajr}`;
    dhur_element.textContent = `${twentytwo.dhur}`;
    asr_element.textContent = `${twentytwo.asr}`;
    maghrib_element.textContent = `${twentytwo.maghrib}`;
    isha_element.textContent = `${twentytwo.isha}`;
}else if(currentDate.getTime() == twentythirdApril.getTime()){
    fajr_element.textContent = `${twentythird.fajr}`;
    dhur_element.textContent = `${twentythird.dhur}`;
    asr_element.textContent = `${twentythird.asr}`;
    maghrib_element.textContent = `${twentythird.maghrib}`;
    isha_element.textContent = `${twentythird.isha}`;
}else if(currentDate.getTime() == twentyfourApril.getTime()){
    fajr_element.textContent = `${twentyfour.fajr}`;
    dhur_element.textContent = `${twentyfour.dhur}`;
    asr_element.textContent = `${twentyfour.asr}`;
    maghrib_element.textContent = `${twentyfour.maghrib}`;
    isha_element.textContent = `${twentyfour.isha}`;
}else if(currentDate.getTime() == twentyfiveApril.getTime()){
    fajr_element.textContent = `${twentyfive.fajr}`;
    dhur_element.textContent = `${twentyfive.dhur}`;
    asr_element.textContent = `${twentyfive.asr}`;
    maghrib_element.textContent = `${twentyfive.maghrib}`;
    isha_element.textContent = `${twentyfive.isha}`;
}else if(currentDate.getTime() == twentyfiveApril.getTime()){
    fajr_element.textContent = `${twentyfive.fajr}`;
    dhur_element.textContent = `${twentyfive.dhur}`;
    asr_element.textContent = `${twentyfive.asr}`;
    maghrib_element.textContent = `${twentyfive.maghrib}`;
    isha_element.textContent = `${twentyfive.isha}`;
}else if(currentDate.getTime() == twentysixApril.getTime()){
    fajr_element.textContent = `${twentysix.fajr}`;
    dhur_element.textContent = `${twentysix.dhur}`;
    asr_element.textContent = `${twentysix.asr}`;
    maghrib_element.textContent = `${twentysix.maghrib}`;
    isha_element.textContent = `${twentysix.isha}`;
}else if(currentDate.getTime() == twentysevenApril.getTime()){
    fajr_element.textContent = `${twentyseven.fajr}`;
    dhur_element.textContent = `${twentyseven.dhur}`;
    asr_element.textContent = `${twentyseven.asr}`;
    maghrib_element.textContent = `${twentyseven.maghrib}`;
    isha_element.textContent = `${twentyseven.isha}`;
}else if(currentDate.getTime() == twentyeightApril.getTime()){
    fajr_element.textContent = `${twentyeight.fajr}`;
    dhur_element.textContent = `${twentyeight.dhur}`;
    asr_element.textContent = `${twentyeight.asr}`;
    maghrib_element.textContent = `${twentyeight.maghrib}`;
    isha_element.textContent = `${twentyeight.isha}`;
}else if(currentDate.getTime() == twentynineApril.getTime()){
    fajr_element.textContent = `${twentynine.fajr}`;
    dhur_element.textContent = `${twentynine.dhur}`;
    asr_element.textContent = `${twentynine.asr}`;
    maghrib_element.textContent = `${twentynine.maghrib}`;
    isha_element.textContent = `${twentynine.isha}`;
}else if(currentDate.getTime() == thirtyApril.getTime()){
    fajr_element.textContent = `${thirty.fajr}`;
    dhur_element.textContent = `${thirty.dhur}`;
    asr_element.textContent = `${thirty.asr}`;
    maghrib_element.textContent = `${thirty.maghrib}`;
    isha_element.textContent = `${thirty.isha}`;
}