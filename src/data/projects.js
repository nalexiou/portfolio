import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const PROJECTS = [
    {   id: 1,
        title: 'My Portfolio - React Application',
        description: 'A React App with multiple projects - you are looking at it right now!',
        link: 'https://github.com/nalexiou/portfolio',
        image: project1
    },
    {
        id: 2,
        title: 'Auth API',
        description: 'A REST API Authentication MicroService that can be dockerized!',
        link: 'https://github.com/nalexiou/AuthService',
        image: project2
      },
      {
        id: 3,
        title: 'Event Registration Service',
        description: 'Another Micro Service for Event Registrion that can be dockerized!',
        link: 'https://github.com/nalexiou/myEventsProject',
        image: project3
      }
];

export default PROJECTS;