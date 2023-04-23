import React,{useState} from "react";
import { Container, Stack } from "@mui/material";
import "./styles/app.css";
import { AddTask } from "./components/AddTask";
import { TodoList } from "./components/TodoList";
import { Charts } from "./components/Charts";
import { SideBar } from "./components/SideBar";

export const App = () => {
  const [openDrawer, setopenDrawer] = useState(false);
  const [query, setquery] = useState('')

  return (
    <main>
      <AddTask setopenDrawer = {setopenDrawer} />
      <Stack>
        <TodoList query={query} />
        <Charts />
      </Stack>
      <SideBar setquery={setquery} openDrawer={openDrawer} setopenDrawer = {setopenDrawer}  />
    </main>
  );
};
