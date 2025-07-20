import { Outlet } from "react-router-dom";
import SidberPage from "./pages/SidberPage";

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen">
      {/* Sidebar: collapses to full-width on small screens */}
      <aside className="lg:col-span-3 xl:col-span-2 bg-gray-100 shadow-md p-4">
        <SidberPage />
      </aside>

      {/* Main content: takes remaining width, with scrollable content */}
      <main className="md:col-span-9 lg:col-span-10 bg-white p-4 overflow-y-auto max-h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
