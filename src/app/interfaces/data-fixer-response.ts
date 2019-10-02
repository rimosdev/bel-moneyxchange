export interface DataFixerResponse {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: any;
  error: DataFixerError;
}
export interface DataFixerValues {
  key: string;
  value: number;
}
export interface DataFixerError {
  code: number;
  type: string;
  info: string;
}