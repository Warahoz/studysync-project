// Import Browser Router tools
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

// Import Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { GrDashboard } from "react-icons/gr"

// Temporary Placeholder Pages
// These will later be replaced
// by your teammates' real pages

const Dashboard = () => {
  return <h1 className="text-3xl">Dashboard</h1>
}

const Tasks = () => {
  return <h1 className="text-3xl">Tasks</h1>
}

const AddTask = () => {
  return <h1 className="text-3xl">Add Task</h1>
}

const Calendar = () => {
  return <h1 className="text-3xl">Calendar</h1>
}

const Subjects = () => {
  return <h1 className="text-3xl">Subjects</h1>
}

const Statistics = () => {
  return <h1 className="text-3xl">Statistics</h1>
}

const Profile = () => {
  return <h1 className="text-3xl">Profile </h1>
}

function App() {
  return (
    <>
      {/* React Router Starts */}
      <BrowserRouter>

        {/* Main Layout */}
        <div className="flex">

          {/* Sidebar Navbar */}
          <Navbar />

          {/* Page Content */}
          <div className="flex-1 p-10 flex flex-col min-h-screen">

            {/* Routes */}
            <Routes>

              {/* Home Route */}
              <Route
                path="/"
                element={<Dashboard />}
              />

              {/* Tasks Route */}
              <Route
                path="/tasks"
                element={<Tasks />}
              />

              {/* Add Task Route */}
              <Route
                path="/add-task"
                element={<AddTask />}
              />

              {/* Calendar Route */}
              <Route
                path="/calendar"
                element={<Calendar />}
              />

              {/* Subjects Route */}
              <Route
                path="/subjects"
                element={<Subjects />}
              />

              {/* Statistics Route */}
              <Route
                path="/statistics"
                element={<Statistics />}
              />

              {/* Profile Route */}
              <Route
                path="/profile"
                element={<Profile />}
              />

            </Routes>

            {/* Footer */}
            <div className="mt-auto">
            <Footer />
            </div>

          </div>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App