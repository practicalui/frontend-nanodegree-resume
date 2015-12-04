var bio = {
  "name":"Jan Benway",
  "role":"UX Designer",
  "pic":"images/creativewoman.gif",
  "welcome":"Welcome! This is not a real resume, it's a class project focused on Javascript. Note this page is minimally responsive, as that was not a focus of the project.",
  "contacts" :
    {
      "mobile" : "650-454-4433",
      "email": "jbenway@gmail.com",
      "github" : "practicalui",
      "twitter" : "@janbenway",
      "location" : "San Carlos, CA"
    },
  "skills":["research","problem solving","prototyping"]
};

bio.display = function()
  {
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  $("#header").prepend(formattedName);

  var formattedPic = HTMLbioPic.replace("%data%",bio.pic);
  $("#bioPic").append(formattedPic);

  var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcome);
  $("#headerIntro").append(formattedWelcome);

  for(contact in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace("%contact%",contact);
    formattedContact = formattedContact.replace("%data%",bio.contacts[contact]);
    $("#topContacts").append(formattedContact);
    $("#footerContacts").append(formattedContact);
  }

  if (bio.skills.length != 0) {
    $("#headerIntro").append(HTMLskillsStart);
    for(i=0;i<bio.skills.length;i++) {
      $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
    }
  }
}

bio.display();

var work = {
  "jobs" : [
    {
    "position":"UX Designer",
    "employer":"Norse",
    "location":"Foster City, CA",
    "years":"2015-present",
    "description": "Solve design problems for security analysts."
  },
  {
    "position":"Interaction Designer",
    "employer":"Ingenuity",
    "location":"Redwood City, CA",
    "years":"2011-2015",
    "description": "Solve design problems for bio-informatics experts and clinical geneticists."
  }
]};

work.display = function () {
  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].position);
    var formattedCity = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formattedYears = HTMLworkDates.replace("%data%",work.jobs[job].years);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployer+formattedTitle+formattedYears+formattedCity+formattedDescription);
  }
}

work.display();

var education = {
  "schools" : [
    {
    "name" : "Occidental College",
    "majors" : ["Cognitive Science","Math"],
    "location" : "Los Angeles, CA",
    "degree" : "BA",
    "dates" : "1994",
    "URL" : "http://www.oxy.edu"
  },
    {
    "name" : "Rice University",
    "majors" : ["Human Factors Psychology"],
    "location" : "Houston, TX",
    "degree" : "Ph.d",
    "dates" : "1999",
    "URL" : "http:rice.edu"
    }
  ],
  "onlineCourses" : [
    {
      "title": "MITx/7.00x/2013_Spring - Introduction to Biology - The Secret of Life",
       "school": "edX",
       "date": "2013",
       "url": "https://s3.amazonaws.com/verify.edx.org/downloads/43d5f758d98c48d7917b39c22ee072a4/Certificate.pdf"
    },
    {
      "title": "Front End Web Developer Nanodegree",
      "school": "Udacity",
      "date": "in progress",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
   }]
};

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
    formattedName = formattedName.replace("%url%",education.schools[school].URL);
    var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
    $(".education-entry:last").append(formattedName+formattedDegree+formattedLocation+formattedDates);

    if (education.schools[school].majors.length != 0) {
      for(i=0;i<education.schools[school].majors.length;i++) {
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].majors[i]));
      }
    }
  }

  $("#education").append(HTMLschoolStart);
  $(".education-entry:last").append(HTMLonlineClasses);
  for (course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
    formattedTitle = formattedTitle.replace("%url%",education.onlineCourses[course].url);
    var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
    var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].date);
    // var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedTitle+formattedSchool+formattedDates);

  }
}

education.display();


var allProjects = {
    "projects" : [
      {
      "name" : "Cancer Clinical Tool",
      "year" : "2015",
      "description" : "Designed from the ground up, new tool to help clinical geneticists evaluate DNA results against the clinical literature, make recommendations and include drug treatment options. The tool also included a report generation process for the user to create custom reports to send back to their physician clients.",
      "images" : ["http://lorempixel.com/400/300/technics","http://lorempixel.com/400/300/technics"]
    },
      {
      "name" : "Literature Visualization",
      "year" : "2014",
      "description" : "Created a data visualization to help clinical geneticists quickly understand the breadth and consistency of past literature results. By bringing insights to the front of the process, replaced a manual process that previously took 1-4 hours with a single visualization that the user could drill down into for validation and jump directly to the decision process, skipping the time-consuming data gathering process.",
      "images" : ["http://lorempixel.com/400/300/technics","http://lorempixel.com/400/300/technics"]
      }
    ]
  };

allProjects.display = function() {
  for (project in allProjects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%",allProjects.projects[project].name);
    var formattedYear = HTMLprojectDates.replace("%data%",allProjects.projects[project].year);
    var formattedDesc = HTMLprojectDescription.replace("%data%",allProjects.projects[project].description);
    $(".project-entry:last").append(formattedTitle+formattedYear+formattedDesc);
    if (allProjects.projects[project].images.length > 0) {
      for (var image in allProjects.projects[project].images) {
        var formattedPic = HTMLprojectImage.replace("%data%",allProjects.projects[project].images[image]);
        $(".project-entry:last").append(formattedPic);
      }
    }
  }
}

allProjects.display();

function trackClicks () {
  $(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY);
  });
}

function showMap ()
{
  $("#mapDiv").append(googleMap);
}

showMap();
trackClicks();
