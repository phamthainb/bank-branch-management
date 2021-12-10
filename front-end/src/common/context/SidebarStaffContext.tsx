import { createContext, ReactNode, useState } from "react";

interface ISidebarStaffContext {
  indexStaff: number;
  setIndexStaff: any;
}

export const SidebarStaffContext = createContext<ISidebarStaffContext>(
  {} as ISidebarStaffContext
);

const SidebarStaffProvider = ({ children }: { children: ReactNode }) => {
  const [indexStaff, setIndexStaff] = useState(0);



  return (
    <SidebarStaffContext.Provider value={{ indexStaff, setIndexStaff }}>
      {children}
    </SidebarStaffContext.Provider>
  );
};

export default SidebarStaffProvider;
