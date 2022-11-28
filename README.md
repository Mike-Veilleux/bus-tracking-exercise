# Bus Tracking Exercise

![HTML](https://img.shields.io/badge/html-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  
  This repo contains the bus tracking exercise from my MIT Full Stack development course.

## Description
A live bus tracking system using MapboxGL and the MBTA public API.  This exercise targets a few skills building
- Dynamically create HTML elements
- Moving mapbox markers around based on Json data
- Fetching Json data from a public API
- Manage an update loop
	- update bus presence on route
	- update bus direction
  
I choose to make use of classes since MapboxGL is architected this way.  This gave me a few advantages such as: 
- Able to store the maker and the Json data in the same object
- Make use of a constructor for object creation
- Take advantage of method chaining.
- Encapsulate all related variables and methods in one object with a public/private accessor.

## Install
Clone this repo and launch the index.html file in your browser.
  
## Live Demo
Click **[here](https://mike-veilleux.github.io/exercises/bus-tracking-exercise/index.html)** to see this bus tracking system in action on my website. 
  
## Roadmap
There are many upgrades possible for this project. Here's a few on my mind:  
- Features
	- Select different routes
	- Show bus stop on route
- Architecture
	- Extend class inheritance for bus fleet and routes 
   
## Licensing
This project is under MIT license. Read more **[here](https://github.com/Mike-Veilleux/bus-tracking-exercise/blob/main/LICENSE)**...
