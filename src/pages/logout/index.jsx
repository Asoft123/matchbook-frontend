import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GeneralLoader from "/src/components/GeneralLoader";

function LogoutPage() {
  const navigate = useNavigate();
  useEffect(() => {
    sessionStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);
  return <GeneralLoader />;
}

export default LogoutPage;
