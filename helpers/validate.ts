// type TValidate = {

// }
const VALIDATE = {
  NOTHING_HERE: 'Chưa có dữ liệu.',
  REQUIRE: 'Dữ liệu không được để trống.',
  ITEM_REQUIRE: 'Chưa chọn.',
  ERROR_TYPE: 'Kiểu dữ liệu không hợp lệ',
  EMAIL: {
    REGEX: /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ERROR_TYPE: 'Email không hợp lệ.',
  },
  PHONE: {
    REGEX: /((09|03|04|07|08|05)+([0-9]{8,13})\b)/,
    ERROR_TYPE: 'Số điện thoại không hợp lệ.',
  },
  PASSWORD_CONFIRM: 'Mật khẩu không trùng khớp.',
  PASSWORD: {
    REGEX: /^\S{8,50}$/,
    ERROR_TYPE: 'Mật khẩu từ 8-50 ký tự, không có khoảng trắng.',
  },
  ONLY_NUMBER: {
    REGEX: /^\d+$/,
    ERROR_TYPE: 'Sai định dạng.',
  },
  USER_NAME: {
    REGEX: /^[a-zA-Z0-9]+$/,
    ERROR_TYPE: 'Username không hợp lệ',
  },
  FULL_NAME: {
    REGEX: /^([a-zA-ZÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶĐÉÈẺẼẸÊẾỀỂỄỆIÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴáàảãạâấầẩẫậăắằẳẵặđéèẻẽẹêếềểễệiíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ]+\s)*[a-zA-ZÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶĐÉÈẺẼẸÊẾỀỂỄỆIÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴáàảãạâấầẩẫậăắằẳẵặđéèẻẽẹêếềểễệiíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ]+$/,
    ERROR_TYPE: "Tên không hợp lệ"
  },
  FULLNAME_NUMBER: {
    REGEX: /^([a-zA-Z0-9ÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶĐÉÈẺẼẸÊẾỀỂỄỆIÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴáàảãạâấầẩẫậăắằẳẵặđéèẻẽẹêếềểễệiíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ]+\s)*[a-zA-Z0-9ÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶĐÉÈẺẼẸÊẾỀỂỄỆIÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴáàảãạâấầẩẫậăắằẳẵặđéèẻẽẹêếềểễệiíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ]+$/,
    ERROR_TYPE: "Tên không hợp lệ"
  },
  ONLY_NAME: {
    REGEX: /^[a-zA-Z]+(\s[a-zA-Z]+)*$/,
    ERROR_TYPE: "Sai định dạng"
  }
};
export default VALIDATE;
