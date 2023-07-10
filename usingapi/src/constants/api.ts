const endpoints = {
  getUsersList: (pageNumber: number, pageSize: number) =>
    `/users?page=${pageNumber}&per_page=${pageSize}`,

  deleteUser: (id?: string) => `/users/${id}`,

  postUser: "/users",
  updateUser: "/users",
};

export default endpoints;
