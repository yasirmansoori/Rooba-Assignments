import Sidebar from "./components/Sidebar/Sidebar";
import Site from "./components/Site/Site";
import TopBar from "./components/Top Bar/TopBar";

const App = () => {
  return (
    <div className="vh-100 d-flex flex-lg-row flex-column">
      <Sidebar />
      <div className="w-100 d-flex flex-column">
        <TopBar />
        <Site />
      </div>
    </div>
  );
};

export default App;
