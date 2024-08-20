export interface TQueryObj {
    limit?:number,
    fields?:string
    page?:number,
    searchTerm?:string,
    sort?:string,
    category?:string,
    // sort?:string,
  }

export interface LeftSideFilterProps {
    setQueryObj: React.Dispatch<React.SetStateAction<TQueryObj>>;
  }