export interface IGetListOfUsers {
  data: IItem[];
  total: number;
  isSuccess: boolean;
  errorMessage: string;
}

export interface IItem {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IUserFormFields {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IGetOneUser {
  data: IItem;
  isSuccess: boolean;
  errorCode: number;
  errorMessage: string;
}

export interface IUpdateUserBody {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}


export interface IErrorType {
  errorMessage: string;
}