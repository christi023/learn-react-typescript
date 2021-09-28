import { createContext } from "react";
import { theme } from "./theme";

// props
type ThemeContextProviderProps = {
  children: React.ReactNode
}

export const ThemeContext = createContext(theme);

const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;