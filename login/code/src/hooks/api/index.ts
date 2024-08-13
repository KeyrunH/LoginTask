import {
  UseMutateFunction,
  useMutation,
} from "@tanstack/react-query";

import {
  postAuthenticateCredentials,
} from "../../api";

import {
  LoginResponse,
  QueryCallbackParams,
} from "../../types/api";

type AuthParams = {
  email: string;
  password: string;
  rememberUser: boolean;
};

export const useAuthenticateCredentials = (
  { email, password, rememberUser }: AuthParams,
  { successFn, errorFn }: QueryCallbackParams
): [
  UseMutateFunction<LoginResponse, any, void, unknown>,
  boolean,
  Error | string | null,
] => {
  const onError = (error: Error | string) => {
    if (!!errorFn) errorFn(`${error}`);
  };

  const mutationFn = async () => {
    return await postAuthenticateCredentials({ email, password });
  };

  const onSuccess = (data: LoginResponse) => {
    if (!!data.success) {
      if (!!data.token) {
        if (rememberUser) {
          // Set a cookie with an expiry date if user wants to be remembered
        } else {
          // Set a cookie with no expiry date (session cookie) if user does not want to be remembered
        }

        alert('Success');
      }
    }
    if (!!successFn) successFn(data);
  };

  const {
    isLoading: isAuthenticating,
    mutate,
    error,
  } = useMutation({
    mutationKey: ["useAuthenticateCredentials"],
    mutationFn,
    onSuccess,
    onError,
  });

  return [mutate, isAuthenticating, error];
};
