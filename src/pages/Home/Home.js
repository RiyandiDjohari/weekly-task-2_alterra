import ToDoInput from "../../components/ToDoInput/ToDoInput";
import ToDoList from "../../components/ToDoList/ToDoList";
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <h1 className="title">todos</h1>
      <ToDoInput />
      <ToDoList />
    </div>
  );
}

export default Home;
