/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
    "name": "Michele Ford",
    "role": "Front-End Developer",
    "contacts": {
        "email": "michelesford@gmail.com",
        "github": "badwolfgirl",
        "location": "Little River, SC"
    },
    "welcomeMessage": "Welcome to my Resume page!",
    "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "PHP",
        "mySQL Databases",
        "github",
        "Adobe Creative Suite",
        "Sublime Text 2",
        "Microsoft Office"
    ],
    "biopic" : "images/me.jpg"//,
};

var education = {
    "schools": [
        {
            "name": "Central Connecticut State University",
            "location": "New Britain, CT",
            "degree": "Bachelor of Arts",
            "major": "Graphic Design",
            "dates": 2005,
            "url": "http://www.ccsu.edu/"
        }
    ],
    "onlinecourses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": 2015,
            "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "dates": 2015,
            "url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
        },
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": 2015,
            "url" : "https://www.udacity.com/course/javascript-basics--ud804"
        }
    ],
    display: function() {
        if(education.schools.length > 0){

            $("#education").append(HTMLschoolStart);

            for (school in education.schools){
                var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);

                var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                $(".education-entry:last").append(formattedName + formattedDegree);

                var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                $(".education-entry:last").append(formattedDates);

                var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                $(".education-entry:last").append(formattedLocation);

                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
                $(".education-entry:last").append(formattedMajor);

            }
        }
        if(education.onlinecourses.length > 0){

            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);

            for (onlineCourse in education.onlinecourses){
                var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[onlineCourse].title);

                var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[onlineCourse].school);
                $(".education-entry:last").append(formattedTitle + formattedSchool);

                var formattedDates = HTMLonlineDates.replace("%data%", education.onlinecourses[onlineCourse].dates);
                $(".education-entry:last").append(formattedDates);

                var formattedUrl = HTMLonlineURL.replace("%data%", education.onlinecourses[onlineCourse].url);
                $(".education-entry:last").append(formattedUrl);

            }
        }

    }
};

var work = {
    "jobs": [
        {
            "employer": "Blulo.com Inc.",
            "title": "Lead Web Developer",
            "location": [
                "Morehead City, NC", 
                "Little River, SC"
            ],
            "dates": "January 2015 - current",
            "description": "Converted older web sites to a Wordpress platform using a base theme for the sites and adjusting them to the clients look and feel. Made changes and fixes to previously designed sites. Minor responsibilities included hosting and domain management."
        },
        {
            "employer": "Total Car Franchising Corp. d/b/a Colors on Parade",
            "title": "Creative Director",
            "location": "Conway, SC",
            "dates": "January 2013 - December 2014",
            "description": "Working with a 250 Unit Franchise System, main responsibilities included Graphic Design, Web Development and some hosting management. Using a CodeIgniter Framework, developed a Reporting system for the Franchise Areas to input their monthly sales, monthly meeting information, yearly tax information and checkoff lists. Designed various print materials for individuals in the system with tight deadlines, and developed the current web site with the requirement of a WordPress platform. Also helped to edit the system newsletter and edit videos."
        },
        {
            "employer": "Rokap Inc. d/b/a Kurbot LLC.",
            "title": "Web Programmer/Graphic Designer",
            "location": "Wallingford, CT",
            "dates": "May 2008 - January 2013",
            "description": "Daily responsibilities consisted of web site development and hosting management for various clients. Including basic Informational sites, customized Content Management sites, E-Commerce sites, and some custom web application development. My minor responsibilities included troubleshooting client issues over the phone to fix problems such as e-mail connections. Tasked also with delegating work to remote employee."
        }
    ]//,
};

var projects = {
    "projects": [
        {
            "title": "Project 2",
            "dates": 2015,
            "description": "Javascript Basics Resume Builder",
            "images": ["images/fry.jpg"]
        }
    ],
    display: function() {
        for (project in projects.projects){
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            if(projects.projects[project].images.length > 0){
                for(var image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);

                }
            }

        }
    }
};

if(bio !== ''){

    var formattedRole   = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName   = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGitHub);
    $("#footerContacts").append(formattedGitHub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    if(bio.skills.length > 0){

        $("#header").append(HTMLskillsStart);

        for(skill in bio.skills){
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }

    }

}

// Create WORK EXPERIENCE FUNCTION
function displayWork() {
    // for loop for jobs
    for(var job in work.jobs){
    // Create Dive for work experience
     $("#workExperience").append(HTMLworkStart);
     // create employer and title vars
     var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
     var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);  
     var formattedEmployerTitle = formattedEmployer + formattedTitle;
     // append employer and title vars
     $(".work-entry:last").append(formattedEmployerTitle);
     // create and append dates
     var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
     $(".work-entry:last").append(formattedDates);
     // create and append description
     var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
     $(".work-entry:last").append(formattedDescription);
    }
}
// if there are jobs in work then display work function
if(work.jobs.length > 0){
    displayWork();
}
// if there are projects in projects then display function
if(projects.projects.length > 0){
    projects.display();
}
if(education.schools.length > 0){
    education.display();
}

// LOCATION ARRAY FUNCTION
function locationizer(work_obj){
    var locationArray = [];
    // loop all of the locations and create array
    for (job in work_obj.jobs){
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    // return the final array
    return locationArray;
}

// function to change name (does not work)
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+ name[1];
}
inName("michele ford");
$("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap);


// LOGCLICKS FUNCTION
$(document).click(function(loc) {

 var x = loc.pageX;
 var y = loc.pageY

 logClicks(x, y);

});