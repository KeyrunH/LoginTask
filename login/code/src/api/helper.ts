interface ApiRequestOptions {
  method?: string;
  headers?: Record<string, string>;
  data?: object;
  formData?: FormData;
  processResponse?: (response: Response) => Promise<any>;
}

export const createApiRequest = <T>(endpoint: string) => {
  return async (options: ApiRequestOptions = {}): Promise<T> => {
    const requestOptions: RequestInit = {
      method: options.method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer tokenPls`,
        ...(options.headers || {}),
      },
    };

    if (options.data) {
      requestOptions.body = JSON.stringify(options.data);
    }

    if (options.formData) {
      requestOptions.body = options.formData;
      requestOptions.headers = {
        Authorization: `Bearer tokenPls`,
        ...(options.headers || {}),
      };
    }

    try {
      const result = await fetch(`http://kata.ware.com/${endpoint}`, requestOptions);

      if (options.processResponse) {
        return options.processResponse(result);
      }

      const resultJson = await result.json();

      if (!result.ok) {
        // invalid/expired token
        if (result.status === 401) {
          // session expired
        }
        // logged in outside restriction
        if (result.status === 423) {
          // Un authorised
        }
        throw new Error(resultJson.error);
      }

      return resultJson;
    } catch (error: any) {
      // check if the error is a type error net::ERR_CONNECTION_REFUSED instead of status code
      if (error.message.includes("Failed to fetch")) {
        // Failed to get status
      }

      throw error;
    }
  };
};
