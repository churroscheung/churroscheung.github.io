import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

function ExperienceCard({ title, company, location, dates, description }) {
  return (
    <Card variant="outlined" sx={{ mb: 2, borderRadius: 2 }}>
      <CardContent>
        <h3 style={{ margin: '0 0 4px' }}>{title}</h3>
        <p className="subtitle">{company} &middot; {location} &middot; {dates}</p>
        {description && <p style={{ margin: '8px 0 0' }}>{description}</p>}
      </CardContent>
    </Card>
  )
}

export default ExperienceCard
