# Cat Card Application

## My approach of restructuring the code
I rearchitected the code structure by following some elements of Clean Architecture  and SOLID Principles. I Separated the program code into different layers such as Presentation Layer, Domain Layer (Business Logic) and Data Layer. Because of that, the code (business logic) is independent from database and framework and business logic can be easily test without considering UI or presentation layer.
###### Example:
1. Currently, output files are saving to root folder. In future, if we have a requirement to save the file into the cloud, we can do that change without changing the business logic. Only we have to do is change the external adapter. 

2. And if we required to make this application functionality expose as API using express.js we can do it only changing the presentation layer without effecting to business logic.

Some of libraries and packages in the given code was outdated and deprecated. Therefore, I replaced that with new packages. Details are mentioned in below table. 

| Previous Package   |      New Package      |  Reason to change |
|----------|:-------------:|------:|
|request |  axios | “request” package is deprecated |
| @mapbox/blend |    sharp   |   “@mapbox/blend” package was last updated in 3 years ago.   And it is not supporting for node newer versions. |
|  | right-aligned |    Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env |

###### Note
This was re-architect with the assumption of that this will be grow into a large-scale application.  Therefore, maintainability and testability of the application was designed to fulfill that assumed growth. 

## How to run the Programme

### Prerequisite 
Programme has been written in Node.js firstly, install node v14.2.0 
Following node packages used in solution 
• axios: "^0.21.1",
•	dotenv: "^10.0.0",
•	minimist: "^1.2.5",
•	sharp: "^0.28.3"

### Project folder structure and overview
```
|-------app
|	|-------container
|		|-------_adapters.js
|		|-------_services.js
|		|-------index.js
|		cat_controller.js
|	domain
|	|-------usecases
|		|-------bind_cat_image_usecase.js	
|		|-------get_cat_image_usecase.js
|		|-------image_bind_usecase.js
|		|-------image_file_save_usecase.js
|	externals
|	|-------adapters
|	|-------|-------axios
|			|-------index.js
|	|-------services
|		|-------cat_service.js
|		|-------save_file_service.js
|	.env
|	app.js
|	service.js
```
•	app/container - Contains dependency container code to help implement dependency inversion.
•	domain/usecases - Contains all the business logic code.
•	Externals/ adapters - Contains adapters and services 
•	app.js - Initialize the application with all the dependencies. 
•	service.js - Starting point of the application 


## How to run the application

Firstly, run npm install in terminal
```
npm install
```
Secondly, run servide.js in root folder
```
node service.js
```

