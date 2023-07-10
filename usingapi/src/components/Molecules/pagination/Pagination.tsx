import { twMerge } from "tailwind-merge";
import { IPaginationProps } from "./types";

function Pagination({
  setPage,
  className,
  pageSize,
  setPageSize,
  totalCount,
}: IPaginationProps) {
  const totalPage = Math.ceil(Number(totalCount) / pageSize);

  const handlePreviousPage = (pageNumber: number) => {
    if (pageNumber > 1) {
      setPage(pageNumber - 1);
    }
  };

  const handleNextPage = (pageNumber: number) => {
    if (pageNumber < totalPage) {
      setPage(pageNumber + 1);
    }
  };

  return (
    <div className={twMerge("flex w-full items-center", className)}>
      <div className="flex items-center justify-between">
        <div className="relative">
          <select
            className="select-bordered select !h-6 min-h-0 rounded-md border-lightGrayModal bg-none pl-4 pr-2 text-10 text-textBlack !outline-0 hover:border-textBlack"
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            <option value="6" selected={pageSize === 6}>
              6
            </option>
            <option value="12" selected={pageSize === 12}>
              12
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default Pagination;
