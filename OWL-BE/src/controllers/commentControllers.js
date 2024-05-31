const message = require("../constants/constansHttpStatus");
const CommentEntity = require("../models/Entity/CommentEntity")
const CourseEntity = require("../models/Entity/CourseEntity")
const LectureEntity = require("../models/Entity/LectureEntity")
class CommentControllers {
    async CreateComment(req, res) {
        try {
            // Lấy thông tin từ request
            const { IDUser, IDCourse, Content } = req.body;

            // Tạo một comment mới
            const newComment = new CommentEntity({
                User: IDUser,
                Course: IDCourse,
                Content: Content,
                CommentAt: new Date()
            });

            // Lưu comment mới vào database
            await newComment.save();
            const course = await CourseEntity.findById(IDCourse);
            course.Comments.push(newComment._id);
            await course.save();
            // Trả về response thành công
            return res.status(message.OK.CODE).json(newComment);
        } catch (err) {
            // Xử lý lỗi
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({
                message: message.INTERNAL_SERVER_ERROR.MESSAGE
            });
        }
    }
    async GetComment(req, res) {
        try {
            // Lấy ID khóa học từ request
            const { id } = req.params
        
            // Tìm khóa học có ID tương ứng
            const course = await CourseEntity.findById(id)
              .populate({
                path: 'Comments',
                populate: {
                  path: 'User',
                  select: 'UserName Email Image' 
                }
              });
              const comments = course.Comments.map(comment => ({
                id: comment.id,
                content: comment.Content,
                createdAt: comment.CommentAt,
                user: {
                  username: comment.User.UserName,
                  email: comment.User.Email,
                    image : comment.User.Image
                }
              }));
            return res.status(message.OK.CODE).json(comments);
          } catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({
              message: message.INTERNAL_SERVER_ERROR.MESSAGE
            });
          }
    }
   
    async CreateCommentLecture(req, res) {
        try {
            // Lấy thông tin từ request
            const { IDUser, IDLecture, Content } = req.body;

            // Tạo một comment mới
            const newComment = new CommentEntity({
                User: IDUser,
                Lecture: IDLecture,
                Content: Content,
                CommentAt: new Date()
            });

            // Lưu comment mới vào database
            await newComment.save();
            const lecture = await LectureEntity.findById(IDLecture);
            lecture.Comments.push(newComment._id);
            await lecture.save();
            // Trả về response thành công
            return res.status(message.OK.CODE).json(newComment);
        } catch (err) {
            // Xử lý lỗi
            
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({
                message: message.INTERNAL_SERVER_ERROR.MESSAGE
            });
        }
    }
    async GetCommentLecture(req, res) {
        try {
            // Lấy ID khóa học từ request
            const { id } = req.params
        
            // Tìm khóa học có ID tương ứng
            const lecture = await LectureEntity.findById(id)
              .populate({
                path: 'Comments',
                populate: {
                  path: 'User',
                  select: 'UserName Email Image' 
                }
              });
              const comments = lecture.Comments.map(comment => ({
                id: comment.id,
                content: comment.Content,
                createdAt: comment.CommentAt,
                user: {
                  username: comment.User.UserName,
                  email: comment.User.Email,
                    image : comment.User.Image
                }
              }));
            return res.status(message.OK.CODE).json(comments);
          } catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({
              message: message.INTERNAL_SERVER_ERROR.MESSAGE
            });
          }
    }
    async UpdateComment(req, res) {
        try {

        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })

        }
    }
    async DeleteComment(req, res) {
        try {

        }
        catch (err) {
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({ message: message.INTERNAL_SERVER_ERROR.MESSAGE })

        }
    }
}
module.exports = new CommentControllers();