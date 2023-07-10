import { QueryClient, QueryFunctionContext } from "@tanstack/react-query";
import { apiService } from "./apiService";

export const defaultQueryFn = async ({ queryKey, signal }: QueryFunctionContext & { queryKey: any }) => {
  if (!queryKey[0]) throw new Error("queryKey[0] is empty");

  const { data } = await apiService.get(queryKey[0], {
    ...(signal && { signal })
  });
  return data;
};

export const getQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn,
        refetchOnWindowFocus: false
      }
    }
  });
