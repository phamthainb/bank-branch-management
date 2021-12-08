import { createContext, ReactNode, useState } from "react";

interface IRoleContext {
  role: string;
  setRole: any;
}

export const RoleContext = createContext<IRoleContext>(
  {} as IRoleContext
);

const RoleProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState('customer');

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export default RoleProvider;
