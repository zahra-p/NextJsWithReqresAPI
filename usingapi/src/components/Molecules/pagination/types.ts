import { Dispatch, SetStateAction } from "react";

export interface IPaginationProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  className: string;
  pageSize: number;
  setPageSize: Dispatch<SetStateAction<number>>;
  totalCount?: number;
}
