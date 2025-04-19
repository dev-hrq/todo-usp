import { useState } from 'react'
import { Container, Typography, List, ListItem, ListItemText, Checkbox, Button, TextField, Box, Paper, Radio, RadioGroup, FormControlLabel } from '@mui/material'
import { useClasses } from './hooks/useClasses'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'

function App() {
  const { classes, toggleWatched, updateCurrentTime, getCurrentClass, formatTime, setCurrentClass } = useClasses()
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  const currentClass = getCurrentClass()

  const handleTimeUpdate = (classId: number) => {
    const currentTime = {
      hours: parseInt(hours) || 0,
      minutes: parseInt(minutes) || 0,
      seconds: parseInt(seconds) || 0
    };
    const totalTime = { ...currentTime };
    updateCurrentTime(classId, currentTime, totalTime);
    setHours('');
    setMinutes('');
    setSeconds('');
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentClass(parseInt(event.target.value));
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Progresso das Aulas
        </Typography>

        {currentClass && (
          <Paper sx={{ p: 2, mb: 2, bgcolor: '#e3f2fd' }}>
            <Typography variant="h6">
              Aula Atual: {currentClass.name}
            </Typography>
            <Typography>
              Progresso: {formatTime(currentClass.currentTime)} de {formatTime(currentClass.totalTime)}
            </Typography>
          </Paper>
        )}

        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            label="Horas"
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            sx={{ width: 100 }}
            inputProps={{ min: 0, max: 23 }}
          />
          <TextField
            label="Minutos"
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            sx={{ width: 100 }}
            inputProps={{ min: 0, max: 59 }}
          />
          <TextField
            label="Segundos"
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
            sx={{ width: 100 }}
            inputProps={{ min: 0, max: 59 }}
          />
        </Box>

        <List>
          <RadioGroup
            value={currentClass?.id.toString() || ''}
            onChange={handleRadioChange}
          >
            {classes.map((cls) => (
              <ListItem
                key={cls.id}
                secondaryAction={
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleTimeUpdate(cls.id)}
                      disabled={!hours && !minutes && !seconds}
                    >
                      <PlayArrowIcon />
                    </Button>
                    <Radio
                      value={cls.id.toString()}
                      edge="end"
                    />
                    <Checkbox
                      edge="end"
                      checked={cls.watched}
                      onChange={() => toggleWatched(cls.id)}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleIcon />}
                    />
                  </Box>
                }
              >
                <ListItemText
                  primary={cls.name}
                  secondary={
                    cls.currentTime
                      ? `Progresso: ${formatTime(cls.currentTime)} de ${formatTime(cls.totalTime)}`
                      : cls.watched
                      ? 'Assistida'
                      : 'Não assistida'
                  }
                />
              </ListItem>
            ))}
          </RadioGroup>
        </List>
      </Box>
    </Container>
  )
}

export default App
