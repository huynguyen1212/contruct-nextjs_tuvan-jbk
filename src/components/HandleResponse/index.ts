import { Alert } from 'src/components/Alert'
import { AxiosResponse } from 'axios'

export const HandleSuccess = (res: Response | AxiosResponse) => {
  // console.log("res", res);
  Alert({
    icon: 'success',
    name: 'Thành công.',
  })
}

export const HandleError = (err: any) => {
  Alert({
    name: err.response ? err.response.data.message : '',
    icon: 'error',
  })
}
