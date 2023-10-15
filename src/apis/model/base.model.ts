export interface PageResult<T> {
  current_page: number;
  page_size:number;
  result: T;
  total: number;
  total_pages: number;
}