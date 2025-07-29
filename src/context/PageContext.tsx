import { createContext, useState, useContext, type ReactNode } from 'react';

export type Pages = 'home' | 'works' | 'some';

export type PageContextType = {
  currentPage: Pages;
  setCurrentPage: (page: Pages) => void;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export type PageProviderProps = {
  children: ReactNode;
};

export const PageProvider = ({ children }: PageProviderProps) => {
  const [currentPage, setCurrentPage] = useState<Pages>('home');
  
  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = (): PageContextType => {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error('usePage must be used within a PageProvider');
  }
  return context;
};