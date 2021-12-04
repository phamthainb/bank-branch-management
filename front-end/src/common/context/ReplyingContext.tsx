import React, { createContext, ReactNode, useState } from "react";

interface IReplyingContext {
  replying: any;
  setReplying: React.Dispatch<React.SetStateAction<number | null>>;
}

export const ReplyingContext = createContext<IReplyingContext>(
  {} as IReplyingContext
);

const ReplyingProvider = ({ children }: { children: ReactNode }) => {
  const [replying, setReplying] = useState<any>(null);

  return (
    <ReplyingContext.Provider
      value={{ replying, setReplying }}
    >
      {children}
    </ReplyingContext.Provider>
  );
};

export default ReplyingProvider;
