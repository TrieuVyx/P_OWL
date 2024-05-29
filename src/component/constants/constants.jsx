import { InitState } from "../../shortPath/path";

const LinkRouter = {
  HOME: "/",
  LOGIN: "login",
  COURSE: "course",
  INITSTATE: "course/init",
  ADMIN:"admin",
  PROFILE:"user",
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
  DETAILLECTURE:"admin/lecture/detail/:id",
  UPDATELECTURE:"admin/lecture/update/:id",
  DELETELECTURE:"admin/lecture/delete/:id",
  CREATELECTURE:"admin/lecture/create",
  COURSETOLECTURE:"course/init/lecture"
};

export default LinkRouter;