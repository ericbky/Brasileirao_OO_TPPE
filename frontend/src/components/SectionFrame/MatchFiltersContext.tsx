import React, { createContext, useContext, useState } from "react";

export type MatchFilters = {
  season: string;
  "team-name": string;
  "match-date": string;
  stadium: string;
  sort: string;
  [key: string]: string;
};

const defaultFilters: MatchFilters = {
  season: "",
  "team-name": "",
  "match-date": "",
  stadium: "",
  sort: "",
};

const MatchFiltersContext = createContext<{
  filters: MatchFilters;
  setFilters: React.Dispatch<React.SetStateAction<MatchFilters>>;
}>({
  filters: defaultFilters,
  setFilters: () => {},
});

export const useMatchFilters = () => useContext(MatchFiltersContext);

export const MatchFiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<MatchFilters>(defaultFilters);
  return (
    <MatchFiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </MatchFiltersContext.Provider>
  );
};
