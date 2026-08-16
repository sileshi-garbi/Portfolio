import React, { createContext, useContext } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PhotoContextType {
  photoUrl: string;
  avatarUrl: string;
}

const PhotoContext = createContext<PhotoContextType>({
  photoUrl: PERSONAL_INFO.photoUrl,
  avatarUrl: PERSONAL_INFO.avatarUrl,
});

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <PhotoContext.Provider value={{ photoUrl: PERSONAL_INFO.photoUrl, avatarUrl: PERSONAL_INFO.avatarUrl }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const useExecutivePhoto = () => useContext(PhotoContext);
