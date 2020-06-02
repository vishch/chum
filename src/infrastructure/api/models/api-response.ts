export interface ApiResponse {
  data?: any;
  error?: ApiErrorResponse;
}

interface ApiErrorResponse {
  code: number;
  message: string;
  detail?: any;
}
