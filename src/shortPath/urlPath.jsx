
export const loginUrl = `http://localhost:3002/api/author/login`
export const registerUrl = `http://localhost:3002/api/author/register`
//#region USER PATH
export const getListUserUrl = `http://localhost:3002/api/users/getListUser`
export const createUserUrl = `http://localhost:3002/api/users/createUser`
export const detailUserUrl = `http://localhost:3002/api/users/getDetailUser/` // có ID
export const deleteUserUrl = `http://localhost:3002/api/users/deleteUser/` // có ID
export const updateUserUrl = `http://localhost:3002/api/users/updateUser/` // có ID
export const getUserUrl = `http://localhost:3002/api/users/getUser/` // có UserName
export const checkTracks = `http://localhost:3002/api/track/checkCourse`
//endregion

//#region COURSE PATH

export const getListCourseUrl = `http://localhost:3002/api/course/getListCourse`
export const createCourseUrl = `http://localhost:3002/api/course/createCourse`
export const detailCourseUrl = `http://localhost:3002/api/course/getDetailCourse/` // có ID
export const deleteCourseUrl = `http://localhost:3002/api/course/deleteCourse/` // có ID
export const updateCourseUrl = `http://localhost:3002/api/course/updateCourse/` // có ID
export const updateCourseImageUrl = `http://localhost:3002/api/course/UpdateCourseImage` 
export const getListLectureInCourseUrl = `http://localhost:3002/api/course/GetListLectureInCourse`
export const searchCourseUrl = `http://localhost:3002/api/course/searchcourse`
export const registerCourseUrl = `http://localhost:3002/api/track/registerCourse`

//endregion

//#region LECTURE PATH
export const getListLectureUrl = `http://localhost:3002/api/lecture/getListLecture`
export const createLectureUrl = `http://localhost:3002/api/lecture/createLecture`
export const detailLectureUrl = `http://localhost:3002/api/lecture/getDetailLecture/` // có ID
export const deleteLectureUrl = `http://localhost:3002/api/lecture/deleteLecture/` // có ID
export const updateLectureUrl = `http://localhost:3002/api/lecture/updateLecture/` // có ID
export const getListLectureInCourseNoPageSizeUrl = `http://localhost:3002/api/course/GetLectureInCourse/`
export const deleteLectureFromCourseUrl = `http://localhost:3002/api/course/deleteLectureFromCourse`
// export const addLectureToCouseUrl = `http://localhost:3002/api/course/addLecture`
export const addLectureToCourseUrl =   `http://localhost:3002/api/course/addLectureToCourseWithConditional`
//endregion

//#region Comment PATH
export const createCommentUrl = `http://localhost:3002/api/comment/create`
export const getListCommentUrl = `http://localhost:3002/api/comment/get/` // có ID
export const createCommentLectureUrl = `http://localhost:3002/api/comment/createComment`
export const getListCommentLectureUrl = `http://localhost:3002/api/comment/getLectureComment/` // có ID