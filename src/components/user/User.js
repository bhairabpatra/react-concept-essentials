import React from "react";
import UseApi from "../hooks/UseApi";

const User = () => {
  const apiUrl = process.env.REACT_APP_USER_API_URL;
  const [user, isLoading, error, refetch] = UseApi("user", apiUrl);

  if (isLoading) {
    return <h1>Loading ....</h1>;
  }

  if (error) {
    return <p className="error">{error.message}</p>;
  }

  return (
    <div>
      {user.length > 0 ? (
        <div>
          <ul>
            {user?.map((user) => (
              <li key={user?.id}>{user?.name}</li>
            ))}
          </ul>

          <button onClick={refetch} className="btn btn-primary btn-md">
            Refetch
          </button>
        </div>
      ) : (
        <div>
          <p className="error">No data found</p>
        </div>
      )}
    </div>
  );
};

export default User;
