import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
export const BarChart = () => {
  const todos = useSelector((state: RootState) => state.tasks);
  const home = todos.filter((todo) => todo.category === "home");
  const school = todos.filter((todo) => todo.category === "school");
  const work = todos.filter((todo) => todo.category === "work");
  const personal = todos.filter((todo) => todo.category === "personal");
  const others = todos.filter((todo) => todo.category === "others");

  // c- completed nc-not completed
  const homeC = home.filter((todo) => todo.completed === true);
  const homeNC = home.filter((todo) => todo.completed === false);
  const schoolC = school.filter((todo) => todo.completed === true);
  const schoolNC = school.filter((todo) => todo.completed === false);
  const workC = work.filter((todo) => todo.completed === true);
  const workNC = work.filter((todo) => todo.completed === false);
  const personalC = personal.filter((todo) => todo.completed === true);
  const personalNC = personal.filter((todo) => todo.completed === false);
  const othersC = others.filter((todo) => todo.completed === true);
  const othersNC = others.filter((todo) => todo.completed === false);

  const data = [
    ["Catergory", "Pending", "Completed"],
    ["Home", homeNC.length, homeC.length],
    ["School", schoolNC.length, schoolC.length],
    ["Work", workNC.length, workC.length],
    ["Personal", personalNC.length, personalC.length],
    ["Others", othersNC.length, othersC.length],
  ];

  const options = {
    chart: {
      title: "Todo List Status",
      subtitle: "Completed, Pending",
    },
    colors: ["#CF193A", "#37A846"],
  };

  return (
    <Chart
      className="barchart"
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};
