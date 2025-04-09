// components/SendMailOnce.tsx
"use client";

import { useEffect } from "react";
import { postSendMail } from "@/utils/apiEndpoints";

export default function SendMailOnce({ user, token }) {
  useEffect(() => {
    const sentMailWithToken = async () => {
      try {
        sessionStorage.setItem("isSendMail", "true");
        const res = await postSendMail("user/sendMail", { user,token: token.token });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    if (user && sessionStorage.getItem("isSendMail") !== "true") {
      sentMailWithToken();
    }
  }, [user, token]); 

  const handleLogoutClick = () => {
    sessionStorage.setItem("isSendMail", "false");
    window.location.href = "/auth/logout";
  };

  return (
    <button
      onClick={handleLogoutClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Log out
    </button>
  );
}
