import { useState } from 'react'
import { 
  Container, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Checkbox, 
  Button, 
  TextField, 
  Box, 
  Radio, 
  RadioGroup,
  Chip
} from '@mui/material'
import { useClasses } from './hooks/useClasses'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import SaveIcon from '@mui/icons-material/Save'

function App() {
  const { classes, toggleWatched, updateCurrentTime, getCurrentClass, formatTime, setCurrentClass } = useClasses()
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')
  const [selectedClassId, setSelectedClassId] = useState<number | null>(null)

  const currentClass = getCurrentClass()
  const totalClasses = classes.length
  const watchedClasses = classes.filter(cls => cls.watched).length
  const progressPercentage = Math.round((watchedClasses / totalClasses) * 100)

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
    const id = parseInt(event.target.value);
    setCurrentClass(id);
    setSelectedClassId(id);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Typography variant="h4" component="h1">
            Progresso das Aulas
          </Typography>
          <Chip 
            label={`${watchedClasses}/${totalClasses} aulas assistidas (${progressPercentage}%)`}
            color="primary"
            variant="outlined"
          />
        </Box>

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

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Typography variant="subtitle1">
            Marcar tempo da aula atual:
          </Typography>
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
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={() => selectedClassId && handleTimeUpdate(selectedClassId)}
            disabled={!selectedClassId || (!hours && !minutes && !seconds)}
          >
            Salvar
          </Button>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell width="10%">Aula Atual</TableCell>
                <TableCell width="40%">Nome da Disciplina</TableCell>
                <TableCell width="25%">Status</TableCell>
                <TableCell width="25%">Progresso</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {classes.map((cls) => (
                <TableRow 
                  key={cls.id}
                  sx={{ 
                    backgroundColor: cls.watched ? '#b2fddc' : 'inherit',
                    '&:hover': {
                      backgroundColor: cls.watched ? '#a0e4c8' : 'rgba(0, 0, 0, 0.04)'
                    }
                  }}
                >
                  <TableCell>
                    <RadioGroup
                      value={currentClass?.id.toString() || ''}
                      onChange={handleRadioChange}
                    >
                      <Radio
                        value={cls.id.toString()}
                      />
                    </RadioGroup>
                  </TableCell>
                  <TableCell>{cls.name}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Checkbox
                        checked={cls.watched}
                        onChange={() => toggleWatched(cls.id)}
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<CheckCircleIcon />}
                      />
                      {cls.watched ? 'Assistida' : 'Não assistida'}
                    </Box>
                  </TableCell>
                  <TableCell>
                    {cls.currentTime
                      ? `${formatTime(cls.currentTime)} de ${formatTime(cls.totalTime)}`
                      : '-'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  )
}

export default App
