import React from 'react'
import Card from './components/Card'


const App = () => {

  const users = [
  {
    id: 1,
    available: "available",
    pay: 55,
    name: "Wade Wilson",
    role: "UI/UX Designer",
    company: "Epic Coders",
    skills: ["UI", "UX", "Photoshop", "+4"],
    bio: "Creative UI/UX designer focused on building clean and user-friendly digital experiences.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbG0uKoFGbNWxn8tn5qFtSb7sLLp21neXwX9c-2YK9yQ&s"
  },
  {
    id: 2,
    available: "",
    pay: 45,
    name: "Sarah Miller",
    role: "Frontend Developer",
    company: "Pixel Labs",
    skills: ["React", "JS", "CSS", "+12"],
    bio: "Frontend developer who loves creating responsive and interactive web applications.",
    image: "data:image/jpeg;base64,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",   
    buttonColor: "blue"
  },
  {
    id: 3,
    available: "available",
    pay: 60,
    name: "Alex Johnson",
    role: "Full Stack Developer",
    company: "CodeCraft",
    skills: ["React", "Node", "MongoDB", "+10"],
    bio: "Full stack developer experienced in building scalable web applications from scratch.",
    image: "https://i.pravatar.cc/150?img=11",
    
  },
  {
    id: 4,
    available: "",
    pay: 50,
    name: "Emily Davis",
    role: "Product Designer",
    company: "DesignHub",
    skills: ["Figma", "UI", "UX", "+6"],
    bio: "Product designer passionate about turning complex problems into simple user experiences.",
    image: "https://i.pravatar.cc/150?img=32",
    buttonColor: "blue"
  },
  {
    id: 5,
    available: "available",
    pay: 70,
    name: "Michael Brown",
    role: "Backend Developer",
    company: "DevWorks",
    skills: ["Node", "Express", "SQL", "+5"],
    bio: "Backend engineer focused on APIs, databases, authentication and scalable server systems.",
    image: "https://i.pravatar.cc/150?img=13"
  },
  {
    id: 6,
    available: "",
    pay: 40,
    name: "Sophia Wilson",
    role: "Graphic Designer",
    company: "Creative Minds",
    skills: ["Photoshop", "Illustrator", "UI", "+7"],
    bio: "Graphic designer creating modern visual identities, illustrations and digital experiences.",
    image: "https://i.pravatar.cc/150?img=44",
    buttonColor: "blue"
  },
  {
    id: 7,
    available: "available",
    pay: 65,
    name: "Daniel Taylor",
    role: "React Developer",
    company: "WebForge",
    skills: ["React", "Redux", "JS", "+9"],
    bio: "React developer building fast, scalable and reusable frontend applications.",
    image: "https://i.pravatar.cc/150?img=14"
  },
  {
    id: 8,
    available: "",
    pay: 55,
    name: "Olivia Anderson",
    role: "UX Researcher",
    company: "UserFirst",
    skills: ["Research", "UX", "Figma", "+3"],
    bio: "UX researcher focused on understanding users and improving products through research.",
    image: "https://i.pravatar.cc/150?img=49",
    buttonColor: "blue"
  },
  {
    id: 9,
    available: "available",
    pay: 75,
    name: "James Martinez",
    role: "Software Engineer",
    company: "TechNova",
    skills: ["C++", "DSA", "Java", "+2"],
    bio: "Software engineer who enjoys solving complex problems and building reliable systems.",
    image: "https://i.pravatar.cc/150?img=15"
  },
  {
    id: 10,
    available: "",
    pay: 48,
    name: "Mia Thompson",
    role: "Web Designer",
    company: "Bright Studio",
    skills: ["HTML", "CSS", "Figma", "+8"],
    bio: "Web designer creating clean, responsive and visually appealing websites for modern brands.",
    image: "https://i.pravatar.cc/150?img=45",
    buttonColor: "blue"
    
  
  }
];

  return (
    <div className='parent'>
      {users.map(function(elem) {
        return <Card key={elem.id}  name = {elem.name} state = {elem.available} btnColor = {elem.buttonColor} img ={elem.image} bio = {elem.bio} skills = {elem.skills} company = {elem.company} role = {elem.role} pay = {elem.pay} />
      })}
    </div>
  )
}

export default App
