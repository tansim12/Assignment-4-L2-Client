export interface TQueryObj {
  limit?: number;
  fields?: string;
  page?: number;
  searchTerm?: string;
  sort?: string;
  category?: string;
  type?: string;
}

export interface LeftSideFilterProps {
  setQueryObj?: React.Dispatch<React.SetStateAction<TQueryObj>>;
}
