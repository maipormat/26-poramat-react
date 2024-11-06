
import { Link } from 'react-router-dom';

function Button() {
  return (
    <div className="flex space-x-8 mt-8">
      <Link to="/homeuser">
        <button className="px-6 py-3 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow">
          User Home Sector
        </button>
      </Link>
      <Link to="/homeadmin">
        <button className="px-6 py-3 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow">
          Admin Home Sector
        </button>
      </Link>
    </div>
  );
}

export default Button;
