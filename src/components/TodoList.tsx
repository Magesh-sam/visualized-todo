import { FC,useState } from "react";
import {
  Container,
  Stack,
  List,
  ListItem,
  Typography,
  Checkbox,
  IconButton,
  Alert,
  Snackbar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from '@mui/icons-material/Close';
import type { RootState, AppDispatch } from "../redux/store";
import { removeFromTodo, setTodoStatus } from "../redux/todoSlice";
import { useSelector, useDispatch } from "react-redux";

interface ITodoList{
  query: string;
}

export const TodoList:FC<ITodoList> = ({query}) => {
  const todos = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();

  const [open, setOpen] = useState(false)

  const filteredTodos = todos.filter((todo)=> todo.category.toLowerCase().includes(query.toLowerCase()))


  return (
    <Container sx={{display:'grid',placeContent:'center',marginBottom:'50px'}} >
      {filteredTodos.length>0?<List sx={{width:'90vw',maxHeight:'900px',overflow:'auto',padding:'40px 40px', boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}} >
        {filteredTodos.map((todo) => (
          <ListItem
            key={todo.id}
            style={{display: 'flex',justifyContent:'space-between'}}
          >
            <Typography
              title={`${todo.taskName} | ${todo.category}`}
              sx={{
                textDecoration: todo.completed
                  ? "line-through 3px red"
                  : "none",
                textOverflow:'ellipsis',
              }}
              variant="h5"
            >
              {todo.taskName}
            </Typography>
            <Stack direction='row' spacing={2} >
                <Checkbox
                  checked={todo.completed}
                  onChange={() => dispatch(setTodoStatus(todo.id))}
                        />
              <IconButton disableRipple sx={{ background: 'red', color: 'white' }} className="deletebtn" onClick={() => { dispatch(removeFromTodo(todo.id)); setOpen(true) }} >
                            <DeleteIcon/>
                        </IconButton>
              </Stack>
          </ListItem>
        ))}
      </List>:<Typography marginY={5} color='red' variant="h3" align='center' >No Todos Available!</Typography>}
      <Snackbar open={open} autoHideDuration={1000} onClose={()=>setOpen(false)}  anchorOrigin={{vertical:'top',horizontal:'center'}}>
        <Alert variant="filled" severity="info" >Task Deleted Successfully! <IconButton sx={{color:'white'}} onClick={()=>setOpen(false)} ><CloseIcon/></IconButton> </Alert>
      </Snackbar>
    </Container>
  );
};
