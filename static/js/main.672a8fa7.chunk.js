(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/Jasper_Huang_Resume.e62bedc2.pdf"},,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/preview.0ed224a5.gif"},function(e,t,a){e.exports=a.p+"static/media/preview.e06ca918.gif"},function(e,t,a){e.exports=a.p+"static/media/preview.7d9d7588.gif"},function(e,t,a){e.exports=a.p+"static/media/preview.3dcfb849.gif"},function(e,t,a){e.exports=a.p+"static/media/preview.4f6aae34.png"},function(e,t,a){e.exports=a.p+"static/media/preview.8f6482b0.png"},,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(6),o=a.n(s),r=(a(20),a(21),a(2)),l=a(14),c=a(1),d=a.n(c);a(22);function m(e){var t=i.a.useState(!0),a=Object(r.a)(t,2),n=a[0],s=a[1],o=i.a.useRef();return i.a.useEffect((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){return s(e.isIntersecting)}))}));return e.observe(o.current),function(){return e.unobserve(o.current)}}),[]),i.a.createElement("div",{className:"project project-"+e.type+" shadow "+l()+" grow-in-section"+(n?" is-visible":""),id:e.id,onClick:function(){return e.showDetails()},ref:o},i.a.createElement("div",{className:"project-header "+l()+"-header"},e.project.title),i.a.createElement("div",{className:"project-header "+l()+"-brief"},e.project.brief),i.a.createElement("div",{className:l()+"-preview text-center"},i.a.createElement("img",{src:e.project.preview,alt:e.project.title,style:{width:"85%",borderRadius:"15px"}})),i.a.createElement("div",{className:"project-expand"},i.a.createElement("i",{className:"fas fa-expand"})));function l(){return e.dimensions.width>=650?"project-xl":e.dimensions.width<650&&e.dimensions.width>380?"project-sm":e.dimensions.width<=380?"project-xs":void 0}}a(23);function u(e){return i.a.createElement("div",{id:"project-details",className:"project-details-container"+(e.showing?" project-details-container-displaying":""),onClick:function(){return e.hide()},style:{width:e.dimensions.width,height:e.dimensions.height}},i.a.createElement("div",{className:"project-details shadow"+(e.showing?" project-details-displaying":""),style:{width:.7*e.dimensions.width,height:.7*e.dimensions.height}},i.a.createElement("div",{className:"project-details-header "+function(){if(e.dimensions.width>=650)return"project-xl";if(e.dimensions.width<650&&e.dimensions.width>380)return"project-sm";if(e.dimensions.width<=380)return"project-xs"}()+"-details-header"},e.project.title),i.a.createElement("div",{className:"project-details-links"},void 0===e.project.links?"":e.project.links.map((function(e){return i.a.createElement("div",{key:e.url,className:"project-details-link-btn",onClick:function(t){t.stopPropagation(),window.open(e.url)}},i.a.createElement("i",{className:t(e)}),i.a.createElement("span",null,function(e){if("Github"===e.type)return"View Source";if("Demo"===e.type)return"Live Link"}(e)))}))),i.a.createElement("h3",{className:"project-details-section-header"},"Skills Used"),i.a.createElement("div",{className:"project-details-bullets"},i.a.createElement("ul",null,i.a.createElement("li",{style:{paddingTop:"5px",paddingBottom:"5px"}},i.a.createElement("i",{className:"fas fa-angle-right",style:{paddingRight:"1em"}}),e.project.skills))),i.a.createElement("h3",{className:"project-details-section-header"},e.project.whyBullets&&e.project.whyBullets.length?"Why?":""),i.a.createElement("div",{className:"project-details-bullets"},i.a.createElement("ul",null,void 0===e.project.aboutBullets?"":e.project.whyBullets.map((function(e){return i.a.createElement("li",{key:e,style:{paddingTop:"5px",paddingBottom:"5px"}},i.a.createElement("i",{className:"fas fa-angle-right",style:{paddingRight:"1em"}}),e)})))),i.a.createElement("h3",{className:"project-details-section-header"},"About"),i.a.createElement("div",{className:"project-details-bullets"},i.a.createElement("ul",null,void 0===e.project.aboutBullets?"":e.project.aboutBullets.map((function(e){return i.a.createElement("li",{key:e,style:{paddingTop:"5px",paddingBottom:"5px"}},i.a.createElement("i",{className:"fas fa-angle-right",style:{paddingRight:"1em"}}),e)})))),i.a.createElement("h3",{className:"project-details-section-header"},void 0!==e.project.solutionsBullets&&e.project.solutionsBullets.length>0?"Engineering Challenges & Solutions":""),i.a.createElement("div",{className:"project-details-bullets"},i.a.createElement("ul",null,void 0===e.project.solutionsBullets?"":e.project.solutionsBullets.map((function(e){return i.a.createElement("li",{key:e,style:{paddingTop:"5px",paddingBottom:"5px"}},i.a.createElement("i",{className:"fas fa-angle-right",style:{paddingRight:"1em"}}),e)}))))));function t(e){return"Github"===e.type?"project-details-link fab fa-github-square":"Demo"===e.type?"project-details-link fas fa-link":void 0}}a(24);function p(e){return i.a.createElement("div",{className:"overlay-shadow"})}a(25);function h(e){return i.a.createElement("div",{className:"intro gradient no-select",style:{width:e.dimensions.width,height:e.dimensions.height}},i.a.createElement("div",null,i.a.createElement("div",{id:"name",className:"name"+(e.dimensions.width<=576&&e.dimensions.width>414?" name-sm":"")+(e.dimensions.width<=414?" name-xs":"")},"JASPER HUANG"),i.a.createElement("div",{className:"greeting"+(e.dimensions.width<=576?" greeting-sm":"")},"Full Stack Engineer | USC '22"),i.a.createElement("div",{className:"socials-container"},i.a.createElement("div",{className:"social-icon",onClick:function(){return window.open("https://github.com/jasperhuangg/")}},i.a.createElement("i",{className:"fab fa-github-square"})),i.a.createElement("div",{className:"social-icon",onClick:function(){return window.open("https://www.linkedin.com/in/jasper-huang-a95269171/")}},i.a.createElement("i",{className:"fab fa-linkedin"})),i.a.createElement("a",{className:"social-icon",style:{color:"white"},href:"mailto:jasperhu@usc.edu"},i.a.createElement("i",{className:"fas fa-envelope-square"})," "),i.a.createElement("div",{className:"social-icon",onClick:function(){return window.open("https://www.instagram.com/jasperhuangg/")}},i.a.createElement("i",{className:"fab fa-instagram-square"})))),i.a.createElement("div",{className:"scroll-arrow",onClick:function(){return e.scrollToAbout()}},i.a.createElement("i",{class:"fas fa-chevron-circle-down"})))}a(26);function g(e){return i.a.createElement("div",{className:"about-me"},i.a.createElement("div",{style:{marginBottom:"50px"}}),i.a.createElement("div",{id:"about-me-brief",className:"gradient-text about-me-paragraph about-me-brief",style:{marginBottom:"50px"}},"Full stack engineer with an eye for UI design and a passion for creating great tech."),i.a.createElement("div",{id:"about-me-p1",className:"about-me-paragraph",style:{marginBottom:"25px"}},"Self-starter, creative, and problem-solver with a passion for learning new technologies and creating seamless user experiences. Enjoys the process of ensuring system components work well together to bring the best experience for users."),i.a.createElement("div",{id:"about-me-p2",className:"about-me-paragraph",style:{marginBottom:"25px"}},"I thrive when working in multidisciplinary teams and I'm skilled at discussing technical concepts with people in non-technical roles. I'm also skilled at:"),i.a.createElement("div",{id:"about-me-skills",className:"about-me-paragraph",style:{marginBottom:"25px"}},i.a.createElement("div",{className:"project-details-bullets",style:{fontFamily:"SF-Pro-Light"}},i.a.createElement("ul",null,i.a.createElement("li",{style:{paddingTop:"5px",paddingBottom:"5px"}},i.a.createElement("i",{className:"fas fa-angle-right",style:{paddingRight:"1em"}}),"Typescript, Javascript, GraphQL, Java, Python, PHP, SQL, HTML, CSS"),i.a.createElement("li",{style:{paddingTop:"5px",paddingBottom:"5px"}},i.a.createElement("i",{className:"fas fa-angle-right",style:{paddingRight:"1em"}}),"React/React Native, Redux, Node.js, Express.js, Apollo GraphQL, ReactiveX, jQuery, Bootstrap"),i.a.createElement("li",{style:{paddingTop:"5px",paddingBottom:"5px"}},i.a.createElement("i",{className:"fas fa-angle-right",style:{paddingRight:"1em"}}),"MongoDB, Firebase, MySQL, Google Cloud SQL, DynamoDB"),i.a.createElement("li",{style:{paddingTop:"5px",paddingBottom:"5px"}},i.a.createElement("i",{className:"fas fa-angle-right",style:{paddingRight:"1em"}}),"Enzyme, Jest, Cucumber, Selenium, jUnit"),i.a.createElement("li",{style:{paddingTop:"5px",paddingBottom:"5px"}},i.a.createElement("i",{className:"fas fa-angle-right",style:{paddingRight:"1em"}}),"Agile Methodologies, Web Service Architectures (Async, Client/Server, MVC, RESTful APIs, Publish/Subscribe), Git Versioning (Github/Bitbucket)")))),i.a.createElement("div",{id:"about-me-p3",className:"about-me-paragraph",style:{marginBottom:"100px"}},"In my free-time I like making music, working on side projects, reading Medium articles, and hitting the gym. Please don't hesitate to"," ",i.a.createElement("span",{className:"email",onClick:function(){return e.scrollToContact()}},"contact")," ","me for new opportunities or if you just want to have a chat!",i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement("span",{className:"resume",onClick:function(){return window.open(e.Resume)}},"RESUME"))))}a(5);function f(e){return i.a.createElement("div",{className:function(){var t=e.scrollPos,a=e.dimensions.height;return t<a/2?"navbar no-select":t>=a/2?"navbar no-select navbar-fill shadow":void 0}()},function(){var t=e.scrollPos,a=e.dimensions.height;return!(t<a/2)&&(t>=a/2||void 0)}()?i.a.createElement("div",{className:"navbar-title",onClick:function(){return e.scrollToTop()}},"JASPER HUANG"):i.a.createElement("div",null),e.dimensions.width>=768?i.a.createElement("div",{className:"navbar-links-container"},i.a.createElement("div",{className:"navbar-link",onClick:function(){return window.open(e.Resume)}},"RESUME"),i.a.createElement("div",{className:"navbar-link",onClick:function(){return e.scrollToAbout()}},"ABOUT"),i.a.createElement("div",{className:"navbar-link",onClick:function(){return e.scrollToProjects()}},"PROJECTS"),i.a.createElement("div",{className:"navbar-link",onClick:function(){return e.scrollToContact()}},"CONTACT")):i.a.createElement("div",{className:"navbar-mobile-toggle",onClick:function(){return e.showNavbarOverlay()}},i.a.createElement("i",{class:"fas fa-bars"})))}function y(e){return i.a.createElement("div",{className:"navbar-overlay"+(e.displaying?" navbar-overlay-displaying":"")},i.a.createElement("div",{className:"navbar-overlay-collapse",onClick:function(){return e.hide()}},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"navbar-overlay-link",onClick:function(){return window.open(e.Resume)}},"RESUME"),i.a.createElement("div",{className:"navbar-overlay-link",onClick:function(){e.hide(),setTimeout((function(){return e.scrollToAbout()}),250)}},"ABOUT"),i.a.createElement("div",{className:"navbar-overlay-link",onClick:function(){e.hide(),setTimeout((function(){return e.scrollToProjects()}),250)}},"PROJECTS"),i.a.createElement("div",{className:"navbar-overlay-link",onClick:function(){e.hide(),setTimeout((function(){return e.scrollToContact()}),250)}},"CONTACT"))}var v=a(7),w=function e(t,a,n,i,s,o,r,l){Object(v.a)(this,e),this.title=t,this.brief=a,this.preview=n,this.skills=i,this.whyBullets=s,this.aboutBullets=o,this.solutionsBullets=r,this.links=l},b=a(8),E=a.n(b),j=a(9),k=a.n(j),N=a(10),x=a.n(N),S=a(11),T=a.n(S),C=a(12),I=a.n(C),B=a(13),A=a.n(B),R=[new w("Spotify MTV","A platform that matches Spotify songs to music videos.",E.a,"Typescript, React, Express.js, MongoDB, Node.js, Bootstrap, HTML/CSS",["One of my friends really enjoys watching music videos, and he expressed how he wanted all of the music videos for his Spotify music in an easy place. I figured this would be a great opportunity to learn Typescript with React, so I decided to implement it for him. I also exercised my design skills by styling the website to look just like the Spotify desktop application."],["Takes information from a user's Spotify profile (e.g. top tracks, top artists, playlists) and creates a mapping of each song to a music video from the Youtube Data API.","CSS styling serves to mirror that of Spotify's desktop application to create a seamless user experience.","UI design also takes cues from the Youtube web application to make the front-end as approachable as possible."],["No way to query the Youtube Data API for official music videos by artists, so I developed a search algorithm that matches keywords to the song title and channel names to a list of accepted channels depending on the song's artists or labels.","Loading a single view requires hundreds of (oftentimes duplicate) Youtube Data API calls, so once I find the mapping from a song to a music video, I store this mapping in the database. I only call the Youtube Data API for mappings that don't already exist in the database."],[{url:"https://github.com/jasperhuangg/spotify-mtv/",type:"Github"}]),new w("Doozy Task Manager","A smart task manager with numerous user-thinking features.",k.a,"Javascript, React, Express.js, MongoDB, Node.js, Bootstrap, HTML/CSS",["This was my first React project. I didn't want it to be a simple todolist app, so I modeled it after one of my favorite task manager applications. I implemented many of its features to solidify my understanding of React."],["A fully-featured task manager app inspired by TickTick.","Developed algorithm that translates natural language into due dates and priorities to streamline the process of adding todo items.","Optimized real-time server performance and scalability by minimizing calls to MongoDB.","Improved user experience by implementing other features, including Google OAuth, smart lists and notifications."],["Due to the sheer amount of data that the user can update at any given moment (updating task titles, priorities, descriptions, due dates, etc.), it's easy for MongoDB to get overloaded with update calls across multiple users. To solve this, I keep a stack of updates on the server that is used by the front-end, and push the entire stack onto MongoDB once it reaches a certain size.","The text-to-date parser handles many different edge cases as to what the user could type. Picking and storing keywords in item titles was quite difficult, especially since it needed to happen while the user was typing."],[{url:"https://github.com/jasperhuangg/mern-task-manager/",type:"Github"}]),new w("Pathfinding Visualizer","An educational tool to help with learning pathfinding algorithms.",x.a,"Javascript, HTML/CSS, jQuery, Bootstrap",["I remember I had tons of trouble understanding and appreciating Pathfinding Algorithms when I was learning them in my intro CS classes. None of the visualizers were that enjoyable to use. This aims to solve that problem by providing visualizations that are visually appealing and easy to understand"],["Developed user-friendly UI providing visualizations of Greedy BFS, Dijkstra\u2019s Algorithm, A* Search, and Bidirectional A* using Javascript and CSS animations.","Click and drag mechanic allows placing walls and weights to alter how the algorithms pick the shortest path between start and finish nodes.","Ability to choose different simulation speeds allows viewing of each algorithm\u2019s execution in more/less detail.","Pick between different color themes of your choosing for algorithm execution."],["Abstracting the grid and implementing the algorithms was relatively straightforward, but figuring out how to assign CSS animations based on each stage of the algorithm's execution required some careful thought and planning.","Figuring out how to minimize lag from CSS animations required some tinkering."],[{url:"https://github.com/jasperhuangg/pathfinding-visualizer",type:"Github"},{url:"https://jasperhuangg.github.io/pathfinding-visualizer",type:"Demo"}]),new w("Comic Relief","A multiplayer web game for telling stories and staying connected.",T.a,"Javascript, Express.js, Node.js, Socket.io, jQuery, HTML/CSS, Bootstrap, Heroku",["Having already learned how to code up a basic Express server that supported GET/POST/PUT/etc. operations, I wanted to learn how to code up a more complex server. I also just finished a game design class at school, and I had been playing online 'io' style games during quarantine with my friends. I decided the board game I designed as the final project for the game design class would be ideal to turn into a multiplayer web game."],["The online version of a group project for a board game design class at USC.","Single-paged web app developed with Javascript, the WebSocket API, jQuery, Node.js, Express.js, and HTML/ CSS.","Developed Express Node.js game server that creates and assigns concurrent game rooms and processes in- game events and logic through WebSockets.","Configured game server to adapt to user disconnection events that would otherwise break gameplay."],["It was my first time working with Socket.io, and figuring out how to configure the game server to gracefully handle disconnection events required some planning.","I had to think deeply about how best to design the game to match the original experience of the physical board game as closely as possible. This required inquiring about how game dynamics and styling would affect user experience."],[{url:"https://github.com/jasperhuangg/comic-relief",type:"Github"},{url:"https://comic-relief-game.herokuapp.com/",type:"Demo"}]),new w("Spotify Playlist Minifier","A tool that ranks and filters out songs in Spotify playlists.",I.a,"Javascript, Express.js, Node.js, jQuery, HTML/CSS, Bootstrap",[],["Developed ranking algorithm for playlist songs integrating listening metrics from the Spotify Web API.","Implemented Express Node.js server that authenticates user login requests via Spotify OAuth and uploads the user\u2019s listening metrics to a MongoDB database.","Designed and developed single-paged user-interface with Javascript and HTML/CSS allowing users to manage playlists and access minified playlists."],["In order to watch the user's listening behavior, I call the Spotify Web API every 10-15 seconds. In order to prevent MongoDB from getting swamped with updates, I keep a listening queue for each user. When the user changes songs, everything on the queue gets popped off and is used in calculating a score for the song that was just listened to by the user.","It was my first time coding up something that used an Express server, so figuring out how routes and middleware worked and keeping the entire server organized was a challenge I had to tackle."],[{url:"https://comic-relief-game.herokuapp.com/",type:"Demo"}]),new w("C Dynamic Memory Allocator","A dynamic memory allocator supporting malloc, realloc, and free.",A.a,"C, Heap Management",[],["A class project for a C dynamic memory allocator that implements allocating, reallocating, and freeing memory on the heap.","Optimized for speed and space usage, comparable in both categories to the C library functions.","Gracefully handles out of memory errors."],["In order to optimize the program for speed and space usage, I had to test out numerous different techniques for how memory blocks were assigned on the heap. Some combinations of techniques would clash with one another, so getting it up to standard required many hours of tinkering and thought.","Figuring out how to debug the program posed a challenge, as the program simply crashes with segmentation faults and out of memory exceptions, and doesn't provide much useful information when it does. In the end, I wrote a print function that shows me the topmost levels of the heap, and used GDB to dive into exactly what was happening to each block of memory."],[])],P=(a(27),a(3)),D=a.n(P);function M(){var e=Object(n.useState)({}),t=Object(r.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(!1),c=Object(r.a)(o,2),v=c[0],w=c[1],b=Object(n.useState)({width:window.innerWidth,height:window.innerHeight}),E=Object(r.a)(b,2),j=E[0],k=E[1],N=Object(l.a)(60),x=Object(n.useState)(!1),S=Object(r.a)(x,2),T=S[0],C=S[1];function I(){k({width:window.innerWidth,height:window.innerHeight})}function B(e){27===e.keyCode&&w(!1)}function A(){d()("html, body").animate({scrollTop:d()("#about-section-start").offset().top},{duration:500,easing:"swing"})}function P(){d()("html, body").animate({scrollTop:d()("#projects-section-start").offset().top-60},500)}function M(){d()("html, body").animate({scrollTop:d()("#contact-section-start").offset().top-60},500)}function O(){d()("html, body").animate({scrollTop:0},500)}function L(e){if(void 0===d()("#"+e).offset())return!1;var t=d()("#"+e).offset().top,a=d()("#"+e).height();return N>=t+.25*a-j.height}return Object(n.useEffect)((function(){window.addEventListener("resize",I,!1),document.addEventListener("keydown",B,!1)}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"main"},i.a.createElement(f,{dimensions:j,scrollPos:N,scrollToAbout:function(){return A()},scrollToProjects:function(){return P()},scrollToContact:function(){return M()},scrollToTop:function(){return O()},Resume:D.a,showNavbarOverlay:function(){d()("#project-details").scrollTop(0),C(!0)}}),i.a.createElement(y,{scrollToAbout:function(){return A()},scrollToProjects:function(){return P()},scrollToContact:function(){return M()},Resume:D.a,displaying:T,hide:function(){return C(!1)}}),i.a.createElement(h,{dimensions:j,scrollToAbout:function(){return A()}}),i.a.createElement("h1",{id:"about-section-start",className:"section-header"}),i.a.createElement(g,{dimensions:j,scrollPos:N,scrollToContact:function(){return M()},Resume:D.a}),v?i.a.createElement(p,{hide:function(){w(!1)}}):"",i.a.createElement(u,{dimensions:j,project:a,showing:v,hide:function(){w(!1)}}),i.a.createElement("h1",{id:"projects-section-start",className:"gradient-text section-header"+(L("projects-section-start")?" grow-in-fast":"")},"Projects"),i.a.createElement("div",{style:{display:"grid",justifyContent:"center"}},i.a.createElement("div",{className:"projects-container",style:{gridTemplateColumns:j.width>1200?"595px 595px":j.width}},R.map((function(e){return i.a.createElement(m,{key:e.title,id:e.title.replace(/ /g,"-"),type:"dark",dimensions:j,project:e,showDetails:function(){s(e),w(!0)}})})))),i.a.createElement("h1",{style:{marginTop:"50px"},id:"contact-section-start",className:"gradient-text section-header"+(L("projects-section-start")?" grow-in-fast":"")}),i.a.createElement("div",{className:"contact-section"},i.a.createElement("div",{style:{fontStyle:"italic",paddingLeft:30,paddingRight:30}},"Wanna build something cool? Let's talk!"),i.a.createElement("div",{style:{marginLeft:"0.5em",marginRight:"0.5em",marginTop:"1em"},className:"gradient-text email",href:"mailto:jasperhu@usc.edu"}," ","jasperhu@usc.edu")),i.a.createElement("div",{className:"footer shadow gradient no-select",onClick:function(){return O()}},i.a.createElement("i",{class:"fab fa-react"})," JASPER HUANG \xa9 2022")))}var O=function(){return i.a.createElement("div",{className:"App",style:{scrollbarColor:"white rgb(40, 40, 40)"}},i.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.672a8fa7.chunk.js.map