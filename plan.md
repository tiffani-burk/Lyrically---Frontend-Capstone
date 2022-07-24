//Plan File

//create directory for React app
//create directory for my api (database.json)
    //create database, based on ERD 
    //push api to git

//create main src folders for lyrically 
//things I need: login, register, navBar, song form, import search form, all setlists screen, all-songs list screen, setList screen, song view 
//folders to create
    //auth 
        //Login.js
        //Register.js
    //views
        //AppView
        //Authorized.js 
    //nav
        //NavBar.js
    //songs
        //AllSongs.js
        //CreatedSong.js
    //sets 
        //AllSets.js
        //CreatedSet.js
    //newsong 
        //Import.js
        //Create.js
        //ImportSearch.js
   


How it works together...
Index.js redors Main.js
Main will create Routes to Login, Register and Authorize, which will nest Routes to the NavBar and AppView 
Authorized will will give permission to the user to view children (AppView and NavBar ) of Main. 
    If we getItem from the locaStorage and it is a user, then we return the children 
    Otherwise, Navigate them back to the login page. 
NavBar will return an unordered list of navBar items, with Links "to" the Route established later
    -AllSongs
        Link to Route in Allsongs.js
    -SetLists
        Link to Route in SetsLists.js
    -Import 
        Link "to" Route in Import.js
            Inside Import.js:
            Import sets an initial state variable for the search terms and returns the ImportSearch component while creating a setterFunction variable and invoking the function in the initial state (useState)
                 -ImportSearch 
                 takes the setterFunter as a prop
                 returns a single form input with an onChange that is invoking the setterFunction 
    -Create 
        Link "to" Route in Create.js
            Inside Create.js: 
             for create form: 
             create an initial state for the update
             define our user by getItem with the "name" set in the login fetch and parse the data to json
                within this function, nest another function that takes an event as the parmeter => this function will 
                 create an object to be saved to the API
                fetch the data for where this will be stored (songs)
                turn the object to a string with stringify
            return a form with a submit song button 
AppView will return some html rep and the Routes to AllSongs and AllSets
AllSongs returns a list of songs and a button with a Link and Route to CreatedSong
AllSets returns a list of sets and a button with a Link and Route to CreatedSet 

Note: Register and Login are invoked in Main 
Register.js 
    create initial state variable for the user and pass in an object {email, fullName}
        nest a function that returns a retch of the users and stringifys them while passing in the stateVar, then turns them into json, then and if the user has an id, setItem to "lyric_user" 
        nest another function that fetches the email of the user; if the length if > 0, show a window alert stating that the user already exists, otherwise, invoke the function above
        create another nested function to updatae the User
    return form with inputs for name, email, username and password and a Register button 
Login.js
    create a fucntion to fetch the usernmame and password.
    and return form inputs for the username and password and submit button and a Link to register


//create login and register modules and components 1st 

changes: moved navbar and app into Main, since Authorize is not needed;
routed the navBar items to  Main, since its my main Route container
Unsure if I need Authorized or App. May be able to do most of the Routes in Main. 