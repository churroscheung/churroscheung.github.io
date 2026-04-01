import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

function EducationCard({ school, degree, dates }) {
  return (
    <Card variant="outlined" sx={{ mb: 2, borderRadius: 2 }}>
      <CardContent>
        <h3 style={{ margin: '0 0 4px' }}>{school}</h3>
        <p style={{ margin: 0 }}>{degree} &middot; {dates}</p>
      </CardContent>
    </Card>
  )
}

export default EducationCard
