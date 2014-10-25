Demo application API

Register



PUT : /register/{username}


Headers

"Accept" : "application/json"
"Content-Type" : "application/json"

Request body :		

	{
	   "lastName": "testuser",
	   "phoneNumber": "0777999666",
	   "firstName": "alex",
	   "password": "password"
	}

Response codes :
	200 : ok
	500 : internal server error

Response body:

	{
	   "firstName": "alex",
	   "lastName": "testuser",
	   "password": "password"
	   "username": "alexw",
	   "phoneNumber": "0777999666",
	   "userId": "c778e312-b18a-4436-8757-2f46f84c8243",
	   "age": 0,
	   "genderIsFemale": false,
	   "notes": null,
	}

Sign In


GET: /signin/{username}/{password}

Headers:

	"Accept" : "application/json"
	"Content-Type" : "application/json"

Request Body:

Response codes :
	200 : ok
	403 : not authenticated
	404 : not found
	500 : internal server error


Response Body :

	{
	   "expiryTime": 1370879139,
	   "sessionId": "65d49b4c-0c6f-484d-98a3-41ef8dd3a93e",
	   "userId": "c778e312-b18a-4436-8757-2f46f84c8243"
	}

User detail


GET/PUT : /profile/{userId}

Headers :

	"Accept" : "application/json"
	"Content-Type" : "application/json"
	"sessionId" : "{sessionId}"

Request Body :

	{
	   "lastName": "testuser",
	   "username": "alexw",
	   "phoneNumber": "0777999666",
	   "userId": "c778e312-b18a-4436-8757-2f46f84c8243",
	   "age": 25,
	   "genderIsFemale": true,
	   "notes": "up to 2000 chars",
	   "firstName": "john",
	   "password": "password2"
	}

Response codes :
	200 : ok
	403 : not authenticated
	404 : not found
	500 : internal server error


Response Body :

	{
	   "lastName": "testuser",
	   "username": "alexw",
	   "phoneNumber": "0777999666",
	   "userId": "c778e312-b18a-4436-8757-2f46f84c8243",
	   "age": 25,
	   "genderIsFemale": true,
	   "notes": "up to 2000 chars",
	   "firstName": "john",
	   "password": "password2"
	}

View User titles



GET : /profile/{userId}/titles

Headers :

	"Accept" : "application/json"
	"Content-Type" : "application/json"
	"sessionId" : "{sessionId}"

Request Body :


Response codes :
	200 : ok
	403 : not authenticated
	404 : not found
	500 : internal server error

Response Body :

	{
	
	   "userId": "c04f9fa8-1c51-4ba6-85d3-792ce47b9751",
	   "titles": [
	      {
	         "description": "a description d",
	         "name": "Sly Cooper: Thieves in Time (PS3)",
	         "id": "29a24da6-b560-4698-9238-ab2016f1bff3"
	      }
	   ]
	}

Alter User titles


PUT/DELETE : /profile/{userId}/titles/{titleId}

Headers :

	"Accept" : "application/json"
	"Content-Type" : "application/json"
	"sessionId" : "{sessionId}"

Request Body :

Response codes :
	200 : ok
	403 : not authenticated
	404 : not found
	500 : internal server error


Response Body :

	PUT/DELETE	
	{
	   "status": "deleted" or "added"
	   "userId": "29a24da6-b560-4698-9238-ab2016f1bff3",
	   "titleId": "29a24da6-b560-4698-9238-ab2016f1bff3"
	}

Get Titles


GET : /gametitles/list

Headers :

	"Accept" : "application/json"
	"Content-Type" : "application/json"

Request Body :

Response codes :
	200 : ok
	500 : internal server error

Response Body :
	

	{
	
	   "titles": [
	      {
	         "id": "29a24da6-b560-4698-9238-ab2016f1bff3",
	         "description": "a description d",
	         "name": "Sly Cooper: Thieves in Time (PS3)"
	      },
	      {
	         "id": "3adbee89-33e9-4bdb-b7da-3f87e398f5e2",
	         "description": "a description I",
	         "name": "Eyepet & Friends"
	      },
	      {
	         "id": "5cd6b82b-a946-4b2f-bf8a-c2f68015d399",
	         "description": "a description f",
	         "name": "Ratchet & Clank: All for one"
	      },
	      {
	         "id": "723cca74-a5b9-4f64-ad25-843607d44d48",
	         "description": "a description h",
	         "name": "Dancestar"
	      },
	
	      {
	         "id": "8b7031ad-1c12-42e5-9f2b-cbef04fe1085",
	         "description": "a description g",
	         "name": "Singstar: Back to the 80s"
	      },
	      {
	         "id": "c06c9feb-00bf-46f5-947a-652b55ff2357",
	         "description": "a description a",
	         "name": "God of War Ascension"
	      },
	      {
	         "id": "d1660df3-e8dc-401e-85e5-8e666ce9360d",
	         "description": "a description c",
	         "name": "Ratchet & Clank: Q-Force"
	      },
	      {
	         "id": "d57058b2-6b61-4d7f-82ce-8547d91a8640",
	         "description": "a description b",
	         "name": "The Last of Us"
	      },
	      {
	         "id": "dc7efa67-684b-4eae-98e7-629433ef93bf",
	         "description": "a description e",
	         "name": "Uncharted 3 Drakes Deception GOTY"
	      },
	      {
	         "id": "de22344b-105a-406a-99f4-97943d2d1c2c",
	         "description": "a description j",
	         "name": "After Hours Athletes"
	      },
	      {
	         "id": "febbd4a2-d939-401a-bf23-1c47edab527b",
	         "description": "a description k",
	         "name": "Carnival Island"
	      }
	   ]
	}

