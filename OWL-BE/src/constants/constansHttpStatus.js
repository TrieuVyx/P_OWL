
const MESSAGE = {
    OK: {
      CODE: 200,
      MESSAGE: "Mọi thứ đã thành công và phản hồi chứa thông tin được yêu cầu."
    },
    CREATED: {
      CODE: 201,
      MESSAGE: "Tài nguyên đã được tạo thành công."
    },
    NO_CONTENT: {
      CODE: 204,
      MESSAGE: "Yêu cầu đã được xử lý thành công, nhưng không có nội dung để trả về."
    },
    BAD_REQUEST: {
      CODE: 400,
      MESSAGE: "Yêu cầu không hợp lệ hoặc không thể được hiểu bởi máy chủ."
    },
    UNAUTHORIZED: {
      CODE: 401,
      MESSAGE: "Yêu cầu yêu cầu xác thực người dùng."
    },
    FORBIDDEN: {
      CODE: 403,
      MESSAGE: "Yêu cầu bị từ chối truy cập."
    },
    NOT_FOUND: {
      CODE: 404,
      MESSAGE: "Tài nguyên được yêu cầu không tồn tại trên máy chủ."
    },
    INTERNAL_SERVER_ERROR: {
      CODE: 500,
      MESSAGE: "Lỗi xảy ra trên máy chủ khi xử lý yêu cầu."
    },
    SERVICE_UNAVAILABLE: {
      CODE: 503,
      MESSAGE: "Máy chủ không thể xử lý yêu cầu hiện tại."
    }
  };
  

module.exports =  MESSAGE