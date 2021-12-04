import { createContext, ReactNode, useState } from "react";

interface ICallboxInfoContext {
  CallboxInfo: number | null;
  toggleCallboxInfo: any;
  openCallboxInfo: boolean;
  handleToggleCallboxInfo: any;
}

export const CallboxInfoContext = createContext<ICallboxInfoContext>(
  {} as ICallboxInfoContext
);

const CallboxInfoProvider = ({ children }: { children: ReactNode }) => {
  // set id of Callbox
  const [CallboxInfo, setCallboxInfo] = useState<number | null>(null);
  // toggle Callbox info
  const [openCallboxInfo, toggleCallboxInfo] = useState<boolean>(false);

  // use args to toggle Callbox info
  const handleToggleCallboxInfo = (id: number) => {
    if (CallboxInfo && id !== CallboxInfo) {
      setCallboxInfo(id);
    }
    toggleCallboxInfo(true);
  };

  return (
    <CallboxInfoContext.Provider
      value={{
        CallboxInfo,
        handleToggleCallboxInfo,
        openCallboxInfo,
        toggleCallboxInfo,
      }}
    >
      {children}
    </CallboxInfoContext.Provider>
  );
};

export default CallboxInfoProvider;
