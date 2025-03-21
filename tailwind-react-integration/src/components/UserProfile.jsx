// src/components/UserProfile.jsx
function UserProfile() {
    return (
      <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="rounded-full w-36 h-36 mx-auto transition-transform duration-300 ease-in-out hover:scale-110 sm:w-24 sm:h-24 md:w-36 md:h-36"
        />
        <h1 className="text-xl text-blue-800 my-4 text-center hover:text-blue-500 transition-colors duration-300 sm:text-lg md:text-xl">
          John Doe
        </h1>
        <p className="text-gray-600 text-base text-center sm:text-sm md:text-base">
          Developer at Example Co. Loves to write code and explore  new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;
