# Star Wars - ReactJS Interview

We welcome you and thank you for taking the time to do this coding assessment. Please read the guidelines before getting started.

## Assessment Guidelines:

* The purpose of this assessment is to help us evaluate your application development coding skills.
* You will not be graded on your visual design skills (i.e. styling)
* You are allowed to use any non-human resource. Ex:
  * **Allowed:** StackOverflow, Google, reference code on Github, etc.
  * **Not Allowed:** Chatting or calling your old boss, using the code of your friend who already took this assessment
 * You must use the skeleton project and existing UI as the start for your code
 * You may use external projects and frameworks or copy and paste examples under two conditions:
   * Make sure to commit any changes you make immediately before and after including the external code and make note of it in the commit message when you add it.
   * Make sure you still provide us with enough of your own code to get a feel for how you think
* Check out the API index at http://localhost:3008. Note that the api uses json-server: https://github.com/typicode/json-server
* You have a maximum of 4 hours to take the test. Please don't exceed this time limit.
* Don't be overwhelmed, there are supposed to be more steps than you will likely complete in your given time frame. Try to do them in order, but you can skip steps if you get stuck. If you skip a feature, put in the notes as to why you skipped it.
* Put the time that you start and end on the first line of notes.md. Also, add any grading advice, disclaimers, brags, feedback, or anomalies you encounter along your way.
* This is a git repo. Please try to commit often and add messages to your commits so we can more easily review your work. This is a local git repo, so don't worry about pushing your commits up anywhere.
* **The webpack server and API server for the project can be run via `npm start`**.

## Assessment Steps:

### PART I - Basic Data Retrieval

 1. Modify the *Card* component to take props for the person's name, image, birthday, and home planet.
 2. GET the list of Star Wars people from `http://localhost:3008/people` and render a *Card* component for each of the people, using people data from the API as props.
 3. Use `http://localhost:3008/planets` to get the name of each person's home world. (Note that the embed functionality of json-server has been disabled so that this is necessary).
