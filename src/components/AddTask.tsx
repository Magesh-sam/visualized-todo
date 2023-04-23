import React, { FC,useState} from "react";
import { v4 as todoid } from 'uuid'
import {addTodo} from  '../redux/todoSlice'
import { useDispatch } from 'react-redux'
import type {AppDispatch} from '../redux/store'
import {
  Stack,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ListItemIcon,
  Button,
  IconButton,
  Snackbar,
  Alert
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface ITodoList {
  setopenDrawer :React.Dispatch<React.SetStateAction<boolean>>

}

export const AddTask:FC<ITodoList> = ({setopenDrawer}) => {
  const [taskName, setTaskName] = useState("");
  const [category, setCategory] = useState("");

  const [open, setOpen] = useState(false)

  const dispatch = useDispatch<AppDispatch>();


  const handleSubmit = (e:React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    const task = {
      id: todoid(),
      taskName,
      completed: false,
      category,
    }
    dispatch(addTodo(task));
    setTaskName('');
    setCategory('')
    setOpen(true)
}
  return (
    <Stack gap={5} sx={{ marginTop: 3 }}>
      <IconButton onClick={()=>setopenDrawer(true)} sx={{width:'50px', position:'absolute', left:'25px'}} >
        <MenuIcon/>
      </IconButton>
      <Typography variant='h4' align="center">
        Todo App
      </Typography>
      <Stack>
        <form onSubmit={(e)=>(handleSubmit(e))} style={{ display:'grid',placeContent:'center',gap:'15px',padding:'10px' }}>
          <TextField
            required
            value={taskName}
            type="search"
            label="Task"
            placeholder="Enter your Task Name"
            onChange={(e) => setTaskName(e.target.value)}
          />
          <FormControl>
            <InputLabel id="category">Category</InputLabel>
            <Select
              required
              labelId="category"
              label='category'
              sx={{ width: "250px" }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="home">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                Home
              </MenuItem>
              <MenuItem value="school">
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                School
              </MenuItem>
              <MenuItem value="work">
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                Work
              </MenuItem>
              <MenuItem value="personal">
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                Personal
              </MenuItem>
              <MenuItem value="others">
                <ListItemIcon>
                  <MoreHorizIcon />
                </ListItemIcon>
                Others
              </MenuItem>
            </Select>
                </FormControl>
                <Button type='submit' variant="contained" color='success' >Add Task</Button>
        </form>
      </Stack>
      <Snackbar open={open} autoHideDuration={1000} onClose={()=>setOpen(false)}  anchorOrigin={{vertical:'top',horizontal:'center'}}>
        <Alert variant="filled" severity="success" >Task Added Successfully! <IconButton sx={{color:'white'}} onClick={()=>setOpen(false)} ><CloseIcon/></IconButton> </Alert>
      </Snackbar>
    </Stack>
  );
};
