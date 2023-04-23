import { Stack } from "@mui/material";
import { PieChart } from "./PieChart";
import { BarChart } from "./BarChart";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const Charts = () => {
  return (
<Stack p={3} sx={{ flexDirection: { lg: "row", xl: "row" } }}>
      <PieChart />
      <BarChart />
    </Stack>
  );
};
