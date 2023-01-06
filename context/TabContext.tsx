import React, { createContext, Dispatch, FunctionComponent, ReactNode, useState } from 'react';

interface ITabs {
    selectedTab: string;
    selectTab: Dispatch<React.SetStateAction<string>>;
}

export const _TabsContext = createContext<ITabs>({
    selectedTab: "",
    selectTab: () => null
});

const TabsContext: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [selectedTab, selectTab] = useState<string>("");

  const context = {
    selectedTab,
    selectTab
  };

  return <_TabsContext.Provider value={context}>{children}</_TabsContext.Provider>;
};

export default TabsContext;
