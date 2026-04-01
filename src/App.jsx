import { useState } from 'react'
import Button from '@mui/material/Button'
import Header from './components/Header'
import ExperienceCard from './components/ExperienceCard'
import EducationCard from './components/EducationCard'
import ContactSection from './components/ContactSection'

const experiences = [
  { title: 'Incoming Trader Intern', company: 'Jane Street', location: 'New York, NY', dates: 'Starting May 2026' },
  { title: 'Trader Intern', company: 'IMC Trading', location: 'Sydney, Australia', dates: 'Nov 2025 – Jan 2026' },
  { title: 'Commodities Trading Analyst Intern', company: 'Castleton Commodities International', location: 'Houston, TX', dates: 'Jun – Aug 2025' },
  { title: 'Product Engineering Intern', company: 'John Deere', location: 'Moline, IL', dates: 'May – Aug 2024' },
  { title: 'Teacher', company: 'Magikids Robotics Lab', location: 'Frisco, TX', dates: 'Jun – Aug 2023', description: 'Teaching kids STEM' },
]

const educations = [
  { school: 'Cockrell School of Engineering, UT Austin', degree: 'B.S. Electrical and Computer Engineering Honors', dates: 'Aug 2023 – May 2027' },
  { school: 'McCombs School of Business, UT Austin', degree: 'B.B.A. Canfield Business Honors', dates: 'Aug 2023 – May 2027' },
]

function App() {
  const [showAll, setShowAll] = useState(false)
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 3)

  return (
    <>
      <Header />

      <div id="about">
        <h2>About Me</h2>
        <p>
          Hi there! I'm Charles, a university student interested in data science, programming, and finance.
          I have spent past internships working in trading, manufacturing, and IT. In those roles,
          I have worked on a variety of projects such as writing Python scripts, analyzing and scraping data,
          and working with wireless communications systems. In my free time, I enjoy participating in team
          competitions and picking up new skills through personal projects such as 3D animation.
        </p>
      </div>

      <div id="experience">
        <h2>Experience</h2>
        {visibleExperiences.map((exp, i) => (
          <ExperienceCard
            key={i}
            title={exp.title}
            company={exp.company}
            location={exp.location}
            dates={exp.dates}
            description={exp.description}
          />
        ))}
        <Button variant="outlined" onClick={() => setShowAll(!showAll)} sx={{ mt: 1 }}>
          {showAll ? 'Show Less' : 'Show All Experience'}
        </Button>
      </div>

      <div id="education">
        <h2>Education</h2>
        {educations.map((edu, i) => (
          <EducationCard key={i} school={edu.school} degree={edu.degree} dates={edu.dates} />
        ))}
        <p className="subtitle">
          Activities: Texas Finance Team (TFT), Texas Undergraduate Computational Finance (UCF), Texas ECB Student Association (ECBA)
        </p>
      </div>

      <ContactSection />

      <footer>
        <p>&copy; 2026 Charles Cheung. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
