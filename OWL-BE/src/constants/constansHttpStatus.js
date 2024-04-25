
const message = {
    OK: 200, // Mọi thứ đã thành công và phản hồi chứa thông tin được yêu cầu.
    CREATED: 201, // Tài nguyên đã được tạo thành công.
    NO_CONTENT: 204, // Yêu cầu đã được xử lý thành công, nhưng không có nội dung để trả về.
    BAD_REQUEST: 400, // Yêu cầu không hợp lệ hoặc không thể được hiểu bởi máy chủ.
    UNAUTHORIZED: 401, // Yêu cầu yêu cầu xác thực người dùng.
    FORBIDDEN: 403, // Yêu cầu bị từ chối truy cập.
    NOT_FOUND: 404, // Tài nguyên được yêu cầu không tồn tại trên máy chủ.
    INTERNAL_SERVER_ERROR: 500, // Lỗi xảy ra trên máy chủ khi xử lý yêu cầu.
    SERVICE_UNAVAILABLE: 503, // Máy chủ không thể xử lý yêu cầu hiện tại.
};


module.exports =  message