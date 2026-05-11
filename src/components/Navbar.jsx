// Import Link from React Router
import {NavLink} from "react-router-dom"

// Import Icons
import {
  FaHome,
  FaTasks,
  FaPlus,
  FaCalendarAlt,
  FaBook,
  FaChartBar,
  FaUser,
  FaSignOutAlt
} from "react-icons/fa"

// Navbar Component
const Navbar = () => {

  return (
    <>

      {/* Sidebar Container */}
      <nav className="bg-indigo-900 text-white w-64 min-h-screen p-6 flex flex-col">

        {/* Logo / Title Section */}
        <div className="mb-10">

          {/* Main Title */}
          <h1 className="text-4xl font-bold">
            StudySync
          </h1>

          {/* Small Description */}
          <p className="text-sm text-gray-300">
            Student study planner
          </p>

        </div>

        {/* Navigation Links */}
        <ul className="space-y-5">

          {/* Dashboard Link */}
          <li>
            <NavLink
              to="/"
              className="flex items-center gap-3 hover:bg-indigo-700 p-2 rounded"
            >
              {/* Dashboard Icon */}
              <FaHome />

              {/* Dashboard Text */}
              Dashboard
            </NavLink>
          </li>

          {/* Tasks Link */}
          <li>
            <NavLink
              to="/tasks"
              className="flex items-center gap-3 hover:bg-indigo-700 p-2 rounded"
            >
              {/* Tasks Icon */}
              <FaTasks />

              {/* Tasks Text */}
              Tasks
            </NavLink>
          </li>

          {/* Add Task Link */}
          <li>
            <NavLink
              to="/add-task"
              className="flex items-center gap-3 hover:bg-indigo-700 p-2 rounded"
            >
              {/* Add Icon */}
              <FaPlus />

              {/* Add Task Text */}
              Add Task
            </NavLink>
          </li>

          {/* Calendar Link */}
          <li>
            <NavLink
              to="/calendar"
              className="flex items-center gap-3 hover:bg-indigo-700 p-2 rounded"
            >
              {/* Calendar Icon */}
              <FaCalendarAlt />

              {/* Calendar Text */}
              Calendar
            </NavLink>
          </li>

          {/* Subjects Link */}
          <li>
            <NavLink
              to="/subjects"
              className="flex items-center gap-3 hover:bg-indigo-700 p-2 rounded"
            >
              {/* Subjects Icon */}
              <FaBook />

              {/* Subjects Text */}
              Subjects
            </NavLink>
          </li>

          {/* Statistics Link */}
          <li>
            <NavLink
              to="/statistics"
              className="flex items-center gap-3 hover:bg-indigo-700 p-2 rounded"
            >
              {/* Statistics Icon */}
              <FaChartBar />

              {/* Statistics Text */}
              Statistics
            </NavLink>
          </li>

          {/* Profile Link */}
          <li>
            <NavLink
              to="/profile"
              className="flex items-center gap-3 hover:bg-indigo-700 p-2 rounded"
            >
              {/* Profile Icon */}
              <FaUser />

              {/* Profile Text */}
              Profile
            </NavLink>
          </li>

        </ul>

        {/* Logout Section */}
        <div className="mt-20">

          {/* Logout Button */}
          <button className="flex items-center gap-3 hover:text-red-300">

            {/* Logout Icon */}
            <FaSignOutAlt />

            {/* Logout Text */}
            Log Out

          </button>

        </div>

      </nav>

    </>
  )
}

// Export Navbar Component
export default Navbar