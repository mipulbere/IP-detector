Author: Mirela Pulbere

Purpose:
The purpose of this program is to provide the user with the ability to determine
the IP address of anyone that clicks on the red button.

How it works:
A user clicks the red button, which creates an XML HttpRequest to get data (a response) from the response.js server, which is the IP address.

Organization:
response.js - creates an HTTP server that listens to port 3000 and gives a response back to the client (the IP address)

  public:
  eventHandler.js - handles the click event on the button by creating an XML HttpRequest to get data from the response.js server
  index.html - structural basis of the page/program
  styling.css - styling of structural basis

  node_modules

How to run:
1. Open terminal and navigate to the folder where this project is stored
2. Type in: node response.js, then hit enter - this will create the server
3. open up a browser window and type in: http://localhost:3000/, then hit enter
