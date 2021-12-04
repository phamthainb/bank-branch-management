import { createContext, ReactNode, useState } from "react";

interface INavigatorContenxt {
  index: number;
  setIndex: any;
}

export const NavigatorContext = createContext<INavigatorContenxt>(
  {} as INavigatorContenxt
);

const NavigatorProvider = ({ children }: { children: ReactNode }) => {
  const [index, setIndex] = useState(0);

  return (
    <NavigatorContext.Provider value={{ index, setIndex }}>
      {children}
    </NavigatorContext.Provider>
  );
};

export default NavigatorProvider;
