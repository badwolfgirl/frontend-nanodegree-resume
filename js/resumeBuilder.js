/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name			= "Michele Ford";
var role 			="Front-End Developer";
var formattedName	= HTMLheaderName.replace("%data%", name);
var formattedRole	= HTMLheaderRole.replace("%data%", role);

//var skills			= ["HTML", "CSS", "JavaScript", "jQuery", "PHP"];


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//$("#main").append(skills);

var bio = {
    "name": "Michele Ford",
    "role": "Front-End Developer",
    "contacts": {
        "email": "michelesford@gmail.com",
        "github": "badwolfgirl",
        "location": "Myrtle Beach, SC"
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
    //"display" : 
};

var education = {
    "schools": [
        {
            "name": "Central Conn St Univ",
            "location": "New Britain, CT",
            "degree": "BA",
            "majors": ["Graphic Design"],
            "dates": 2005,
            "url": "http://www.ccsu.edu/"
        }
    ],
    "onlinecourses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "August 2015",
            "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "dates": "August 2015",
            "url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
        },
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "September 2015",
            "url" : "https://www.udacity.com/course/javascript-basics--ud804"
        }
    ]//,
    //display: function
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
            "employer": "Web Programmer/Graphic Designer",
            "title": "Creative Director",
            "location": "Wallingford, CT",
            "dates": "May 2008 - January 2013",
            "description": "Daily responsibilities consisted of web site development and hosting management for various clients. Including basic Informational sites, customized Content Management sites, E-Commerce sites, and some custom web application development. My minor responsibilities included troubleshooting client issues over the phone to fix problems such as e-mail connections. Tasked also with delegating work to remote employee."
        }
    ]//,
    //display: function
};

var projects = {
    "projects": [
        {
            "title": "Project 0",
            "dates": "August 2015",
            "description": "Intro Project",
            "images": "na"
        },
        {
            "title": "Project 1",
            "dates": "August 2015",
            "description": "Portfolio",
            "images": "na"
        }
    ]//,
    //display: function
};

if(bio.skills.length > 0){

    $("#header").append(HTMLskillsStart);

    for(skill in bio.skills){
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
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
displayWork();

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

//project functions
projects.display = function() {
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if(projects.projects[project].images.length > 0){
            for(image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);

            }
        }

    }
}
projects.display();

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