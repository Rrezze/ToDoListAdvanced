import "../../App.css";
import BoardsContainer from "../../Components/Boards/BoardsContainer";
import Header from "../../Components/Header/Header";

function Home() {
  return (
    <div>
      <Header />
      <BoardsContainer/>
    </div>
  );
}

export default Home;
