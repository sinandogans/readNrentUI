import {ResponseModel} from "./response.model";

export interface DataResponseModel<TData> extends ResponseModel {
  data: TData;
}
