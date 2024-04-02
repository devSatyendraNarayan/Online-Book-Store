import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
function Logoutbtn() {
  const { authUser, setAuthUser } = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successfully");
      window.location.reload();
      
     
    } catch (error) {
      toast.error("Error: " + error.message);
      
    }
  };
  return (
    <>
      <div>
        <a
          className="btn px-8 py-2 m-2 text-lg bg-red-500 text-gray-50 hover:dark:bg-gray-50 dark:hover:text-violet-600 duration-300 "
          onClick={handleLogout}
        >
          Logout
        </a>
      </div>
    </>
  );
}

export default Logoutbtn;
