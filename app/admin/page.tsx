"use client";

import { useSession } from "next-auth/react";

const Admin = () => {
  const session = useSession();
  console.log(session);

  return <h1>admin</h1>;
};

export default Admin;
