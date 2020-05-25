export interface ApiResponse<T> {
  data: T;
  error: ApiErrorResponse;
}

interface ApiErrorResponse {
  code: number;
  message: string;
  detail: any;
}
