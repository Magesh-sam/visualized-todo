import { useState } from "react";
import { Stack } from "@mui/material";
import "./styles/app.css";
import { AddTask } from "./components/AddTask";
import { TodoList } from "./components/TodoList";
import { Charts } from "./components/Charts";
import { SideBar } from "./components/SideBar";

import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

export const App = () => {
  const [openDrawer, setopenDrawer] = useState(false);
  const [query, setquery] = useState("");

  const todos = useSelector((state: RootState) => state.tasks);


  return (
    <main>
      <AddTask setopenDrawer={setopenDrawer} />
      <Stack>
        <TodoList query={query} />
       { todos.length>0&&<Charts />}
      </Stack>
      <SideBar
        setquery={setquery}
        openDrawer={openDrawer}
        setopenDrawer={setopenDrawer}
      />
    </main>
  );
};
