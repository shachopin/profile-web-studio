
// for now we don't show project row 1 the round images
// var projects = [
//   "https://www.petfinder.com/wp-content/uploads/2012/09/Blog-Kitty-Cam-solo.jpg",
//   "http://www.animal-photography.com/thumbs/red_tabby_long_hair_kitten_~AP-0UJFTC-TH.jpg",
//   "http://www.animal-photography.com/thumbs/silver_tabby_kittens~AP-0JO6Y9-TH.jpg",
//   "http://www.animal-photography.com/thumbs/silver_tabby_kitten_looking_up~AP-0DLVMB-TH.jpg",
//   "http://rs245.pbsrc.com/albums/gg58/ari_of_shadow/cat%20cute/cutecat-1.jpg~c200",
//   "https://s-media-cache-ak0.pinimg.com/564x/c7/b1/2b/c7b12bc4efcba9fe7521890e8bb16934.jpg",
//   "http://rs995.pbsrc.com/albums/af72/sibudy7/cute-baby-cat.jpg~c200",
//   "https://s-media-cache-ak0.pinimg.com/736x/57/1f/c5/571fc5cf918b4bda8fda976e2bd83e1f.jpg",
//   "http://i245.photobucket.com/albums/gg58/ari_of_shadow/cat%20cute/KittySniper.jpg"
// ];

var projects2 = [
  {
    pic: "http://rs245.pbsrc.com/albums/gg58/ari_of_shadow/cat%20cute/cutecat-1.jpg~c200",
    title: "Oracle Javascript Framework",
    description: "Apps using Oracle Javascript Framework (JET) as frontend",
    apps: [
      {
        name: "No more deadline horror - daily todos and weekly todos? DONE!",
        "business features": ["Add and remove daily todo", 
                              "Add weekly todo item into the dropdown", 
                              "Clicking the weekly todo upgrades it to a daily todo"],
        "technical highlights": ["Oracle JET as frontend", 
                                 "Nodes.js as backend", 
                                 "Mongodb as db",
                                 "Restful API"],
        links: ["https://oracle-jet.gomix.me/", "https://github.com/shachopin/glitch-ojet-todo"]
      },
      {
        name: "I love coding! - Coding Exercises Tracking App",
        "business features": ["Coding exercises I solved arranged by categories",
                             "Double clicking the pie leads to the external link of that exercise solution page",
                             "Single clicking the pie drills down into that category"],
        "technical highlights": ["Oracle JET as frontend", 
                                 "Data retrieved from Firebase"],
        links: ["https://coding-exercises.glitch.me/", "https://github.com/shachopin/coding-exercises-glitch"]
      }
    ]
  },{
    pic: "https://s-media-cache-ak0.pinimg.com/564x/c7/b1/2b/c7b12bc4efcba9fe7521890e8bb16934.jpg",
    title: "Node.js With JQuery",
    description: "Apps using JQuery as frontend, Node.js as backend and MongoDB as database",
    apps: [
      {
        name: "Notes taking never made so easy",
        "business features": ["Add and remove note card",  
                              "Remove all cards by one click",
                              "Clicking the card will highlight it to view details"],
        "technical highlights": ["JQuery and Ajax", 
                                 "Nodes.js", 
                                 "Mongodb",
                                 "Restful API"],
        links: ["https://mongodb-based-notes-node.glitch.me/?client=jquery", "https://github.com/shachopin/mongodb-based-notes-node-glitch"]
      },
       {
        name: "Rest API Transmitter",
        "business features": ["Mimic the functionality of Postman",  
                              "Bypass the same origin policy restriction"],
        "technical highlights": ["JQuery and Ajax", 
                                 "Nodes.js",
                                 "Call restful API using request module"],
        links: ["https://rest-transmitter.glitch.me/"]
      }
    ]
  },{
    pic: "http://www.animal-photography.com/thumbs/silver_tabby_kittens~AP-0JO6Y9-TH.jpg",
    title: "Node.js With Angular",
    description: "Apps using Angular as frontend, Node.js as backend and MongoDB as database",
    apps: [
      {
        name: "Notes taking never made so easy",
        "business features": ["Add and remove note card",  
                              "Remove all cards by one click",
                              "Clicking the card will highlight it to view details"],
        "technical highlights": ["Angular", 
                                 "Nodes.js", 
                                 "Mongodb",
                                 "Restful API"],
        links: ["https://mongodb-based-notes-node.glitch.me", "https://github.com/shachopin/mongodb-based-notes-node-glitch"]
      }
    ]
  },{
    pic: "https://s-media-cache-ak0.pinimg.com/736x/57/1f/c5/571fc5cf918b4bda8fda976e2bd83e1f.jpg",
    title: "Pure Angular App",
    description: "Apps using Angular as frontend",
    apps: [
      {
        name: "We will text you when the table is ready!",
        "business features": ["Waiting customers leave their phone number",  
                              "Customers get SMS when the table is ready (with numbers only verified through twilio trial account for now)",
                              "Support register, log in and log out functionalities and send welcome emails"],
        "technical highlights": ["Angular",                                
                                 "Firebase",
                                 "Twilio API",
                                 "Talking to another Nodes.js server for sending SMS and welcome emails"],
        links: ["https://sms-client-wait-eat.glitch.me", "https://github.com/shachopin/wait-and-eat-glitch"]
      },
      {
        name: "Trello-like Scrum Assistant is here to help!",
        "business features": ["Support user register, login, logout",
                              "Login as scrum master, create todo and assign it to a relevant team member",    
                              "Move tasks across \"to do\", \"doing\" and \"done\" categories",
                              "Delete a task when it's no longer needed to be tracked",
                              "Login as a team member, can still manage your own todos",
                              "Reassign a todo to another team member"],
        "technical highlights": ["Angular",                                
                                 "Firebase"],
        links: ["https://scrum-assistant.glitch.me", "https://github.com/shachopin/scrum-assistant"]
      },
      {
        name: "Search your github repositories and track issues",
        "business features": ["Search for github repos",  
                              "Clicking one of the repos leads to the issues page associated with that repo",
                              "Clicking back button leads back to the original list of repos",
                              "Single Page App"],
        "technical highlights": ["Angular",                                
                                 "Angular Routes",
                                 "Github API"],
        links: ["https://github-search.glitch.me", "https://github.com/shachopin/github-search-glitch"]
      },
      {
        name: "Angular Gemstore",
        "business features": ["Tab structure",
                              "Review form with live preview"],
        "technical highlights": ["Angular",
                                "Ruby Sinatra backend"],
        links: ["http://dawei-gemstore.herokuapp.com/index.html", "https://github.com/shachopin/dawei-gemstore"]
      },
      {
        name: "Home Rental Business",
        "business features": ["Complete Home Rental Business App that includes application form, photo gallery, google map customization",
                              "Embedded AI and form interactivity makes the customer feel warm and welcomed",
                              "Owner can review the applicant info and decide proceeding or not",
                              "Photo gallery done with masonry"],
        "technical highlights": ["Angular Form Validation",
                                "Firebase",
                                "JQuery Masonry",
                                "Google Map API"],
        links: ["https://room-renting.glitch.me", "https://github.com/shachopin/room-renting-glitch"]
      }
    ]
  }/*, {
    pic: "http://www.animal-photography.com/thumbs/red_tabby_long_hair_kitten_~AP-0UJFTC-TH.jpg",
    title: "Project 2",
    description: "Sinatra Blackjack Game",
    link: "http://david-blackjack.herokuapp.com"
  }, {
    pic: "http://www.animal-photography.com/thumbs/silver_tabby_kittens~AP-0JO6Y9-TH.jpg",
    title: "Project 3",
    //description: "Ruby on Rails Project",
    description: "Sinatra Rest Service",
    link: "https://calling-uno-service.gomix.me"
  }, {
    pic: "http://www.animal-photography.com/thumbs/silver_tabby_kitten_looking_up~AP-0DLVMB-TH.jpg",
    title: "Project 4",
    //description: "Java Project",
    description: "Node-based Easy Notes Taking",
    link: "https://file-based-notes-node.gomix.me/"
  }, {
    pic: "http://rs245.pbsrc.com/albums/gg58/ari_of_shadow/cat%20cute/cutecat-1.jpg~c200",
    title: "Project 5",
    //description: "Angular Project",
    description: "Node Rest Request Demo",
    link: "https://rest-transmitter.gomix.me"
  }, {
    pic: "https://s-media-cache-ak0.pinimg.com/564x/c7/b1/2b/c7b12bc4efcba9fe7521890e8bb16934.jpg",
    title: "Project 6",
    //description: "Knockout Project",
    description: "Web-based Code Runner",
    link: "https://execute-any-code.gomix.me/"
  }, {
    pic: "http://rs995.pbsrc.com/albums/af72/sibudy7/cute-baby-cat.jpg~c200",
    title: "Project 7",
    //description: "Oracle JET Project",
    description: "Angular App",
    link: "https://dawei-gemstore.herokuapp.com/index.html"
  }, {
    pic: "https://s-media-cache-ak0.pinimg.com/736x/57/1f/c5/571fc5cf918b4bda8fda976e2bd83e1f.jpg",
    title: "Project 8",
    description: "Java Project",
    link: "#"
  }*/
];


