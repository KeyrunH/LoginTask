
export type AuthParams = {
  email: string;
  password: string;
};

export type QueryCallbackParams = {
  successFn?: (data?: any) => void;
  errorFn?: (error?: string) => void;
};


export type LoginResponse = {
  success?: {
    id: number | null;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    status: string | null;
    created_at: string | null;
    updated_at: string | null;
  };
  token?: string;
  expires?: string;
};



