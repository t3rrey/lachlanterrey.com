# webhouse

webhouse runs in a browser and visually operates similarly to how macOS operates. The desktop environment includes a weather app, calculator, browser, sticky notes and PDF reader. 

### ⚡️ Breakdown

This project came as a result of a video I came across thanks to the YouTube rabbit hole led me to a video by [Dustin Brett](https://www.youtube.com/c/DustinBrett). His project [daedalOS](https://github.com/DustinBrett/daedalOS) inspired me to create my own interpretation. My project is heavily inspired by his work. I even reached out a couple of times for how he made architecture decisions and his approached solving certain issues. Please check out his project it is amazing!

#### :computer: Technology

The project is fully client side. React and styled components have been implemented throughout the project. Initially I had not discovered styled components when embarking on the project, and I'm still in the process of converting all CSS to styled components for consistency. 

##### React:
React was my front end framework of choice as it is what I have the most experience with, and I felt was the best way to manage the application state. 
##### Styled Components:
The main reason for the design choice is the reusability of styling and the readability of the code. Features such as unique class names and purged CSS were also a factor in the decision to adopt this framework. 

