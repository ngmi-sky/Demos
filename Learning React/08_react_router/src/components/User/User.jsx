import React from "react";
import { useParams } from "react-router";

function User() {
  const { userId } = useParams();
  return (
    <div className="text-gray text-3xl m-5 text-center">User :{userId}</div>
  );
}

export default User;
