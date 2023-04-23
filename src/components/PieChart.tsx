import { useSelector, useDispatch } from "react-redux";
import { Chart } from "react-google-charts";
import { RootState } from "../redux/store";

export const PieChart = () => {
  const todos = useSelector((state: RootState) => state.tasks);
  const home = todos.filter((todo) => todo.category === "home");
  const school = todos.filter((todo) => todo.category === "school");
  const work = todos.filter((todo) => todo.category === "work");
  const personal = todos.filter((todo) => todo.category === "personal");
  const others = todos.filter((todo) => todo.category === "others");

  const data = [
    ["Catergory", "Task Count"],
    ["Home", home.length],
    ["School", school.length],
    ["Work", work.length],
    ["Personal", personal.length],
    ["Others", others.length],
  ];

  const options = {
    title: "Tasks by  Category",
  };

  return (
    <Chart
      className="piechart"
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};
