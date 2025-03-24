import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Recipe Sharing Platform
      </h1>

      {/* Add Recipe Button */}
      <div className="text-center mb-6">
        <Link to="/add-recipe">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition">
            + Add Recipe
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

