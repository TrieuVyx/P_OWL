const message = require("../constants/constansHttpStatus");
const CourseEntity = require("../models/Entity/CourseEntity")
const UserEntity = require("../models/Entity/UserEntity")
const TrackEntity = require("../models/Entity/TrackEntity")
class TrackController {
  async CreateTrack(req, res) {
    try {

    }
    catch (err) {
      return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
    }
  }
  async GetTrack(req, res) {
    try {

    }
    catch (err) {
      return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
    }
  }
  async UpdateTrack(req, res) {
    try {

    }
    catch (err) {
      return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
    }
  }
  async DeleteTrack(req, res) {
    try {

    }
    catch (err) {
      return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })
    }
  }
  async RegisterCourse(req, res) {
    try {
      const { IDUser, IDCourse } = req.body;

      // Kiểm tra xem người dùng đã đăng ký khóa học này chưa
      const existingEnrollment = await TrackEntity.findOne({
        User: IDUser,
        Course: IDCourse
      });

      if (existingEnrollment) {
        // Nếu người dùng đã đăng ký, trả về lỗi
        return res
          .status(message.BAD_REQUEST.CODE)
          .json({ message: 'User is already enrolled in the course.' });
      }

      // Tìm người dùng
      const user = await UserEntity.findById(IDUser);
      if (!user) {
        // Nếu không tìm thấy người dùng, trả về lỗi
        return res
          .status(message.NOT_FOUND.CODE)
          .json({ message: 'User not found.' });
      }

      // Tìm khóa học
      const course = await CourseEntity.findById(IDCourse);
      if (!course) {
        // Nếu không tìm thấy khóa học, trả về lỗi
        return res
          .status(message.NOT_FOUND.CODE)
          .json({ message: 'Course not found.' });
      }

      // Tạo mới enrollment
      const newEnrollment = new TrackEntity({
        User: IDUser,
        Course: IDCourse,
        status: 'IsStudying'
      });

      // Lưu enrollment
      await newEnrollment.save();

      user.Tracks.push(newEnrollment); // Thêm enrollment vào Track của người dùng
      await user.save();

      return res
        .status(message.OK.CODE)
        .json({ message: 'Course registration successful.' });
    } catch (error) {
      console.error(error);
      return res
        .status(message.INTERNAL_SERVER_ERROR.CODE)
        .json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE });
    }
  }
  async checkStatus(req, res) {
    try {
      const { IDUser, IDCourse } = req.body;

      // Kiểm tra xem người dùng đã đăng ký khóa học này chưa
      const existingEnrollment = await TrackEntity.findOne({
        User: IDUser,
        Course: IDCourse
      });

      if (existingEnrollment) {
        // Nếu người dùng đã đăng ký, trả về lỗi
        return res
          .status(message.OK.CODE)
          .json(existingEnrollment.status);
      }
    } catch (error) {
      return res
        .status(message.INTERNAL_SERVER_ERROR.CODE)
        .json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE });
    }
  }
}
module.exports = new TrackController();