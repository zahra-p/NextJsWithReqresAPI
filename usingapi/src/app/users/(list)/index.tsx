import Pagination from "@/components/Molecules/pagination";
import { useState } from "react";
import Loading from "@/components/Atoms/loading";
import Card from "@/components/Atoms/card";
import Table from "@/components/Organism/table";
import {
  useGetUsersListQuery,
  useDeleteUserMutation,
} from "@/queries/usersQueryAPI";

import CardTitle from "@/components/Atoms/cardTitle";
import { ITableRowData } from "./types";

function UsersList() {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const { data, isError, isLoading } = useGetUsersListQuery(
    pageNumber,
    pageSize
  );

  const totalCount = data?.total;

  if (isError)
    return (
      <div className="flex min-h-screen items-center justify-center">
        Error fetching users
      </div>
    );

  return (
    <Card className="h-full">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div className="flex h-full flex-col justify-start">
          <CardTitle className="mb-4">
            <div className="w-full text-xl mb-6 text-center">
              Users List
            </div>
          </CardTitle>

          {!!totalCount && (
            <div className="flex-grow-3 h-full">
              <Table<ITableRowData> rowData={data?.data} />
            </div>
          )}

          {!!totalCount && (
            <div className="mr-3 flex items-center justify-start gap-3">
              <Pagination
                className="mb-4 mr-2 mt-4 border-t-2 pt-4"
                totalCount={totalCount}
                page={pageNumber}
                setPage={setPageNumber}
                pageSize={pageSize}
                setPageSize={setPageSize}
              />
            </div>
          )}
        </div>
      )}
    </Card>
  );
}

export default UsersList;
