import {
    AuthParams,
} from "../types/api";
import { createApiRequest } from "./helper";

export const postAuthenticateCredentials = async ({
                                                      email,
                                                      password,
                                                  }: AuthParams): Promise<any> => {
    return createApiRequest("")({
        method: "POST",
        data: { email, password },
    }) as Promise<any>;
};
