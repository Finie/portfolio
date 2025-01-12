import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface HamburgerContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const HamburgerContext = createContext<HamburgerContextType | null>(null);

export const HumburgerContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <HamburgerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </HamburgerContext.Provider>
  );
};

// create a hook to provide the context of the humburger menu
export const useHumburgerContext = () => {
  const context = useContext(HamburgerContext);

  if (context == null) {
    throw new Error(
      "useHamburgerContext must be used within a HamburgerProvider"
    );
  }
  return context;
};
