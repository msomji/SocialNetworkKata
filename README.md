Social Networking Kata
----------------------

- Install dependencies: `npm install`
- Run tests: `npm run test`
- Watch and run tests: `npm run watch`

This implmentation of the socialNetwork currently has 3 layers:

1. Service (UserService and PostService)
   - Services delegate tasks and return formatted messages back to the caller

2. Repository (postRepository, userRepository)
   - layer between the core logic and the NetworkState (which would be a database in a real example)
   - currently just a pure pass through

3. NetworkState (this is similar to client-side state object in the flux framework)
   - This is where all the system state is stored, each call updates or reads from the state object. 

**N.B** Unfortunately I didnt get to implement the socialNetwork.js where all the services would come togather and allow a user to go through these flows.




Implement the core **domain logic** for a social networking application (similar to Twitter) satisfying the features below.

``` {.sourceCode .gherkin}
Feature: Publishing
   Scenario: Alice publishes messages to her personal timeline.   
      Given Alice has published "I love the weather today."
      When Alice views her timeline
      Then Alice sees:
         "I love the weather today."
      
Feature: Timeline
   Scenario: Alice views Bob's timeline.
      Given Bob has published "Darn! We lost!"
      And Bob has published "Good game though."
      When Alice views Bob's timeline
      Then Alice sees:
         Good game though. (1 minute ago)
         Darn! We lost! (2 minute ago)
      
Feature: Following
   Scenario: Charlie can follow Alice and Bob, and he views an aggregated list of all timelines.
      Given Alice has published "I love the weather today."
      And Bob has published "Darn! We lost!"
      And Bob has published "Good game though."
      And Charlie has published "I'm in New York today! Anyone wants to have a coffee?"
      When Charlie follows Alice
      And Charlie follows Bob
      And Charlie views his wall
      Then Charlie sees:
         Charlie - I'm in New York today! Anyone wants to have a coffee? (15 seconds ago)     
         Bob - Good game though. (1 minute ago)     
         Bob - Damn! We lost! (2 minutes ago)     
         Alice - I love the weather today (5 minutes ago)    
```