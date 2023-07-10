import React from "react";
import { useDeleteUserMutation } from "@/queries/usersQueryAPI";

function Table<T>(props: any) {
  const { rowData } = props;

  // const [pageNumber, setPageNumber] = useState(1);
  // const [pageSize, setPageSize] = useState(6);
  // const { mutate: deleteMutation } = useDeleteUserMutation(
  //   pageNumber,
  //   pageSize
  // );
  // function handleClickDelete(userId: string) {
  //   deleteMutation(userId, {
  //     onSuccess: () => {
  //       alert(`deleted  ${userId}`);
  //     },
  //   });
  // }

  const handleClickDelete = (id: any) => {
    const dataTable = document.querySelector("#articlesTable");
    const rowId = id;

    fetch(`https://reqres.in/api/users/${rowId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        var row = document.getElementById(rowId);
        if (row) {
          row.remove();
          alert(`User by ID ${rowId} deleted`);
        }
      })
      .catch((error) => {
        console.error("There was a problem deleting the row:", error);
      });
  };

  const EditArticle = (event: any) => {
    const rowId = event.target.id;

    fetch(`https://reqres.in/api/users/${rowId}`, {
      method: "PUT",
      body: JSON.stringify({
        name: "ali",
        job: "najar",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <>
      <table id="articlesTable" className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              avatar
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              first_name
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              last_name
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>

            <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rowData?.map((item: any) => (
            <tr key={item.id} id={item.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {item.id}
              </td>
              <td
                className="px-3 py-4 whitespace text-sm text-gray-500"
                id="{{'title ' + item.id}}"
              >
                <img
                  src={item.avatar}
                  width="50"
                  height="50"
                  alt="Avatar of the User"
                />
              </td>
              <td
                className="px-3 py-4 whitespace text-sm text-gray-500"
                id="body_row"
                {...item.id}
              >
                {item.first_name}
              </td>
              <td
                className="px-3 py-4 whitespace text-sm text-gray-500"
                id="{{'title ' + item.id}}"
              >
                {item.last_name}
              </td>
              <td
                className="px-3 py-4 whitespace text-sm text-gray-500"
                id="{{'title ' + item.id}}"
              >
                {item.email}
              </td>

              <td className=" py-4 whitespace-nowrap text-sm text-gray-500">
                <input
                  type="button"
                  id={item.id}
                  value="Edit"
                  className="btn"
                  onClick={EditArticle}
                ></input>
                <input
                  type="button"
                  id={item.id}
                  value="Delete"
                  className="btn"
                  onClick={() => handleClickDelete(item.id)}
                ></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
