import { Outlet } from "react-router-dom";
import SidberPage from "./pages/SidberPage";

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-0 min-h-screen">
      
      <div className="md:col-span-2 bg-gray-100 shadow-md">
        <SidberPage />
      </div>


      <div className="md:col-span-10 p-6 overflow-y-r-scroll-auto bg-white">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
