import { Stack } from '@mui/material'
import { PieChart } from './PieChart'
import { BarChart } from './BarChart'

export const Charts = () => {
  return (
    <Stack p={3} sx={{flexDirection:{lg:'row', xl:'row'}}} >
          <PieChart />
          <BarChart/>
    </Stack>
  )
}
