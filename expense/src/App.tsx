import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex bg-black min-h-screen text-white">
      <div className="w-[18%]">
        <Sidebar />
      </div>

      <div className="w-[82%] p-10">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
