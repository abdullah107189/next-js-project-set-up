import PublicNavbar from "@/components/shared/PublicNavbar";
import React from "react";

function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PublicNavbar></PublicNavbar>
      {children}
    </div>
  );
}

export default CommonLayout;
