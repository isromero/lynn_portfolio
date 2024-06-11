import { createContext, useContext, useState } from 'react';

type HeaderNavContextValue = {
  aboutMe: boolean;
  setAboutMe: (value: boolean) => void;
  contact: boolean;
  setContact: (value: boolean) => void;
  handleAboutMe: () => void;
  handleContact: () => void;
}

const HeaderNavContext = createContext<HeaderNavContextValue | null>(null);

export const useHeaderNav = () => useContext(HeaderNavContext);

export const HeaderNavProvider = ({ children }: Readonly<{children: React.ReactNode}>) => {
    const [aboutMe, setAboutMe] = useState(false);
    const [contact, setContact] = useState(false);

  const handleAboutMe = () => {
    setContact(false);
    setAboutMe(!aboutMe);
  };

  const handleContact = () => {
    setAboutMe(false);
    setContact(!contact);
  };

  return (
    <HeaderNavContext.Provider value={{ aboutMe, setAboutMe, handleAboutMe, contact, setContact, handleContact }}>
      {children}
    </HeaderNavContext.Provider>
  );
};