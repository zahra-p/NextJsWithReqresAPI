import endpoints from "@/constants/api";
import { apiService } from "@/services/apiService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  IGetListOfUsers,
  IUserFormFields,
  IUpdateUserBody,
  IErrorType,
} from "./types";

export const useGetUsersListQuery = (pageNumber: number, pageSize: number) =>
  useQuery<IGetListOfUsers>({
    queryKey: [endpoints.getUsersList(pageNumber, pageSize)],
  });

export const usePostUserMutation = () =>
  useMutation<any, AxiosError, IUserFormFields>({
    mutationFn: (formBody: IUserFormFields) => apiService.post(endpoints.postUser, formBody)
  });

export const usePutUserMutation = () =>
  useMutation<any, AxiosError<IErrorType>, IUpdateUserBody>({
    mutationFn: (formBody: IUpdateUserBody) => apiService.put(endpoints.updateUser, formBody)
  });



export const useDeleteUserMutation = (pageNumber: number, pageSize: number) => {
  const queryUser = useQueryClient();
  return useMutation<any, AxiosError, string>({
    mutationFn: (id: string) => apiService.delete(endpoints.deleteUser(id)),
    onSuccess: () => {
      queryUser.invalidateQueries({
        queryKey: [endpoints.getUsersList(pageNumber, pageSize)],
      });
    }
  });
};
