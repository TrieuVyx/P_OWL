const LinkRouter = {
  HOME: "/",
  LOGIN: "login",
  COURSE: "course",
  ADMIN:"admin",
  COURSEMANA: "admin/course",
  USERMANA: "admin/user",
  LECMANA: "admin/lecture",
  DETAILUSER:"admin/user/detail/:id",
  UPDATEUSER:"admin/user/update/:id",
  DELETEUSER:"admin/user/delete/:id",
  CREATEUSER:"admin/user/create",
  DETAILCOURSE:"admin/course/detail/:id",
  UPDATECOURSE:"admin/course/update/:id",
  DELETECOURSE:"admin/course/delete/:id",
  CREATECOURSE:"admin/course/create",
  CREATECOURSEPAGE:"admin/course/create"
};

export default LinkRouter;