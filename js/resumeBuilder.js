var bio = {
    "name": "Selvi Shah",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "+18567124781",
        "email": "selvishah@gmail.com",
        "github": "https://github.com/selvishah",
        "twitter": "",
        "location": "San Diego,California",
    },
    "welcomeMessage": "Welcome to my interactive Resume Page",
    "skills": ["HTML", "CSS", "BootStrap", "Grunt", "JQuery", "Git", "Github"],
    "biopic": "http://lorempixel.com/100/100/nature/",
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomemessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedName + formattedRole);
    $("#topContacts,#footerContacts").append(formattedMobile);
    $("#topContacts,#footerContacts").append(formattedEmail);
    $("#topContacts,#footerContacts").append(formattedGithub);
    if (bio.contacts.twitter.length > 0) {
        $("#topContacts,#footerContacts").append(formattedTwitter);
    }
    $("#topContacts,#footerContacts").append(formattedLocation);
    $("#header").append(formattedBiopic);
    $("#header").append(formattedWelcomemessage);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill_id = 0; skill_id < bio.skills.length; skill_id++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill_id]);
            $("#skills").append(formattedSkill);
        }
    }
};

bio.display();

var education = {
    "schools": [{
            "name": "Virginia Tech",
            "location": "Blacksburg,Virginia",
            "degree": "Master of Engineering",
            "majors": ["Communications"],
            "dates": "August 2007 - December 2009",
            "url": "http://www.vt.edu/",
        },
        {
            "name": "Sardar Patel Institue of Technology",
            "location": "Mumbai,India",
            "degree": "Bachelors of Engineering",
            "majors": ["Electronics"],
            "dates": "June 2003 - June 2007",
            "url": "http://www.spit.ac.in/",
        },
    ],
    "onlineCourses": [{
            "title": "Front-End Web Development Nano Degree Course",
            "school": "Udacity",
            "dates": "October 2016 - June 2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
        },
        {
            "title": "Head First HTML and CSS",
            "school": "Head First",
            "dates": "July 2016 - September 2016",
            "url": "https://www.wickedlysmart.com/head-first-html-css/",
        },
        {
            "title": "Python",
            "school": "Code Academy",
            "dates": "January 2016 - February 2016",
            "url": "https://www.codecademy.com/learn/python",
        },
    ],
};

education.display = function() {

    for (var education_id = 0; education_id < education.schools.length; education_id++) {
        var formattedName = HTMLschoolName.replace("%data%", education.schools[education_id].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[education_id].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[education_id].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[education_id].dates);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[education_id].majors);
        if (education.schools[education_id].url.length > 0) {
            formattedName = formattedName.replace("#", education.schools[education_id].url);
        }

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedName + formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajors);
    }

    if (education.onlineCourses.length > 1) {
        $("#education").append(HTMLonlineClasses);
        $("#education h3").attr("id", "onlinecourse");
    }
    for (var onlinecourse_id = 0; onlinecourse_id < education.onlineCourses.length; onlinecourse_id++) {
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlinecourse_id].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlinecourse_id].school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlinecourse_id].dates);
        var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlinecourse_id].url);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
        $(".education-entry:last").append(formattedonlineDates);
        $(".education-entry:last").append(formattedonlineUrl);
    }
};

education.display();

var work = {
    "jobs": [{
            "employer": "Qualcomm",
            "title": "Staff Engineer",
            "location": "San Diego,California",
            "dates": "December 2009 - Current",
            "description": "Plan,Automate,Test,Validate IRAT Features",
        },
        {
            "employer": "Qualcomm",
            "title": "Intern",
            "location": "San Diego,California",
            "dates": "May 2008 - December 2008",
            "description": "Test,Validate System Determination Features",
        },
    ]
};

work.display = function() {

    for (var job_id = 0; job_id < work.jobs.length; job_id++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job_id].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job_id].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job_id].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job_id].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job_id].description);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();


var projects = {
    "projects": [{
            "title": "Blog Website",
            "dates": "November 2016",
            "description": "Use HTML CSS to create a blog",
            "images": ["http://lorempixel.com/400/200/abstract"],
        },
        {
            "title": "Animal Trading Card",
            "dates": "October 2016",
            "description": "Use HTML CSS to create a Animal Trading Card",
            "images": ["http://lorempixel.com/400/200/animals", "http://lorempixel.com/400/200/cats"],
        },
        {
            "title": "Responsive Design",
            "dates": "December 2016",
            "description": "Use HTML CSS to create a responsive design which scales according to the viewport and use responsive images to enhance web performance",
            "images": ["http://lorempixel.com/400/200/business"],
        },
        {
            "title": "Interactive Resume",
            "dates": "January 2016",
            "description": "Use Javascript to create an interactive Resume",
            "images": ["http://lorempixel.com/400/200/technics"],
        },
    ]
};

projects.display = function() {

    for (var proj_id = 0; proj_id < projects.projects.length; proj_id++) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj_id].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[proj_id].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj_id].description);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        for (var image_id = 0; image_id < projects.projects[proj_id].images.length; image_id++) {
            var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[proj_id].images[image_id]);
            $(".project-entry:last").append(formattedImages);
        }
    }
};

projects.display();
$("#mapDiv").append('<button id="reset">Reset Map</button>');
$("#mapDiv").append(googleMap);


//functions to collapse Work/Project/Education
$("#projects").click(function() {
    $(".project-entry").toggle();
});

$("#workExperience").click(function() {
    $(".work-entry").toggle();
});

$("#education").click(function() {
    $("#onlinecourse").toggle();
    $(".education-entry").toggle();
});