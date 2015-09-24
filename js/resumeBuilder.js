/*
'use strict';
*/

var data = '%data%';

var bio = {
    'name': 'Michele Ford',
    'role': 'Front-End Developer',
    'contacts': {
        'email': 'michelesford@gmail.com',
        'github': 'badwolfgirl',
        'location': 'Little River, SC'
    },
    'welcomeMessage': 'Welcome to my Resume page!',
    'skills': [
        'HTML',
        'CSS',
        'JavaScript',
        'jQuery',
        'PHP',
        'mySQL Databases',
        'github',
        'Adobe Creative Suite',
        'Sublime Text 2',
        'Microsoft Office'
    ],
    'biopic' : 'images/me.jpg',
    'display' : function() {

        var formattedRole   = HTMLheaderRole.replace(data, bio.role);
        var formattedName   = HTMLheaderName.replace(data, bio.name);

        $('#header').prepend(formattedName, formattedRole);

        var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
        var formattedGitHub = HTMLgithub.replace(data, bio.contacts.github);
        var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);

        $('#topContacts').append(formattedEmail, formattedGitHub, formattedLocation);
        $('#footerContacts').append(formattedEmail, formattedGitHub, formattedLocation);

        var formattedBiopic = HTMLbioPic.replace(data, bio.biopic);
        var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

        $('#header').append(formattedBiopic, formattedWelcome);

        if(bio.skills.length){

            $('#header').append(HTMLskillsStart);

            for(var skill in bio.skills){

                var formattedSkill = HTMLskills.replace(data, bio.skills[skill]);
                $('#skills').append(formattedSkill);

            }

        }

    }

};

var education = {
    'schools': [
        {
            'name': 'Central Connecticut State University',
            'location': 'New Britain, CT',
            'degree': 'Bachelor of Arts',
            'major': 'Graphic Design',
            'dates': 2005,
            'url': 'http://www.ccsu.edu/'
        }
    ],
    'onlinecourses': [
        {
            'title': 'Intro to HTML and CSS',
            'school': 'Udacity',
            'dates': 2015,
            'url' : 'https://www.udacity.com/course/intro-to-html-and-css--ud304'
        },
        {
            'title': 'How to Use Git and GitHub',
            'school': 'Udacity',
            'dates': 2015,
            'url' : 'https://www.udacity.com/course/how-to-use-git-and-github--ud775'
        },
        {
            'title': 'JavaScript Basics',
            'school': 'Udacity',
            'dates': 2015,
            'url' : 'https://www.udacity.com/course/javascript-basics--ud804'
        }
    ],
    'display' : function() {
        if(education.schools.length){

            $('#education').append(HTMLschoolStart);

            for (var school in education.schools){

                var $lastEducationEntry = $('.education-entry:last');

                var formattedName = HTMLschoolName.replace(data, education.schools[school].name);
                var formattedDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
                var formattedDates = HTMLschoolDates.replace(data, education.schools[school].dates);
                var formattedLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
                var formattedMajor = HTMLschoolMajor.replace(data, education.schools[school].major);

                $lastEducationEntry.append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);

            }
        }
        if(education.onlinecourses.length){

            $('#education').append(HTMLonlineClasses, HTMLschoolStart);

            for (onlineCourse in education.onlinecourses){

                var $lastEducationEntry = $('.education-entry:last');

                var formattedTitle = HTMLonlineTitle.replace(data, education.onlinecourses[onlineCourse].title);
                var formattedSchool = HTMLonlineSchool.replace(data, education.onlinecourses[onlineCourse].school);
                var formattedDates = HTMLonlineDates.replace(data, education.onlinecourses[onlineCourse].dates);
                var formattedUrl = HTMLonlineURL.replace(data, education.onlinecourses[onlineCourse].url);

                $lastEducationEntry.append(formattedTitle + formattedSchool, formattedDates, formattedUrl);

            }
        }

    }
};

var work = {
    'jobs': [
        {
            'employer': 'Blulo.com Inc.',
            'title': 'Lead Web Developer',
            'location': [
                'Morehead City, NC', 
                'Little River, SC'
            ],
            'dates': 'January 2015 - current',
            'description': 'Converted older web sites to a Wordpress platform using a base theme for the sites and adjusting them to the clients look and feel. Made changes and fixes to previously designed sites. Minor responsibilities included hosting and domain management.'
        },
        {
            'employer': 'Total Car Franchising Corp. d/b/a Colors on Parade',
            'title': 'Creative Director',
            'location': 'Conway, SC',
            'dates': 'January 2013 - December 2014',
            'description': 'Working with a 250 Unit Franchise System, main responsibilities included Graphic Design, Web Development and some hosting management. Using a CodeIgniter Framework, developed a Reporting system for the Franchise Areas to input their monthly sales, monthly meeting information, yearly tax information and checkoff lists. Designed various print materials for individuals in the system with tight deadlines, and developed the current web site with the requirement of a WordPress platform. Also helped to edit the system newsletter and edit videos.'
        },
        {
            'employer': 'Rokap Inc. d/b/a Kurbot LLC.',
            'title': 'Web Programmer/Graphic Designer',
            'location': 'Wallingford, CT',
            'dates': 'May 2008 - January 2013',
            'description': 'Daily responsibilities consisted of web site development and hosting management for various clients. Including basic Informational sites, customized Content Management sites, E-Commerce sites, and some custom web application development. My minor responsibilities included troubleshooting client issues over the phone to fix problems such as e-mail connections. Tasked also with delegating work to remote employee.'
        }
    ],
    'display' : function(){
        for(var job in work.jobs){

            $('#workExperience').append(HTMLworkStart);

            var $lastWorkEntry = $('.work-entry:last');
            // create employer and title vars
            var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);  
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            // append employer and title vars
            $lastWorkEntry.append(formattedEmployerTitle);
            // create and append dates
            var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
            $lastWorkEntry.append(formattedDates);
            // create and append description
            var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
            $lastWorkEntry.append(formattedDescription);
        }

    }    
};

var projects = {
    'projects': [
        {
            'title': 'Project 2',
            'dates': 2015,
            'description': 'Javascript Basics Resume Builder',
            'images': ['images/fry.jpg']
        }
    ],
    'display' : function() {

        if(projects.projects.length){

            for (var project in projects.projects){

                $('#projects').append(HTMLprojectStart);

                var $lastProjectEntry = $('.project-entry:last');

                var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
                var formattedDates = HTMLprojectDates.replace(data, projects.projects[project].dates);
                var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);

                $lastProjectEntry.append(formattedTitle, formattedDates, formattedDescription);

                if(projects.projects[project].images.length){
                    for(var image in projects.projects[project].images) {
                        var formattedImage = HTMLprojectImage.replace(data, projects.projects[project].images[image]);
                        $lastProjectEntry.append(formattedImage);

                    }
                }

            }
        }
    }
};


bio.display();
work.display();
projects.display();
education.display();

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
    name = name.trim().split(' ');
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +' '+ name[1];
}
inName('michele ford');
$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);


// LOGCLICKS FUNCTION
$(document).click(function(loc) {

 var x = loc.pageX;
 var y = loc.pageY

 logClicks(x, y);

});