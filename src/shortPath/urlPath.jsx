
export const loginUrl = `http://localhost:3002/api/author/login`
//#region USER PATH
export const getListUserUrl = `http://localhost:3002/api/users/getListUser`
export const createUserUrl = `http://localhost:3002/api/users/createUser`
export const detailUserUrl = `http://localhost:3002/api/users/getDetailUser/` // có ID
export const deleteUserUrl = `http://localhost:3002/api/users/deleteUser/` // có ID
export const updateUserUrl = `http://localhost:3002/api/users/updateUser/` // có ID
export const getUserUrl = `http://localhost:3002/api/users/getUser/` // có UserName

//endregion


//#region COURSE PATH

export const getListCourseUrl = `http://localhost:3002/api/course/getListCourse`
export const createCourseUrl = `http://localhost:3002/api/course/createCourse`
export const detailCourseUrl = `http://localhost:3002/api/course/getDetailCourse/` // có ID
export const deleteCourseUrl = `http://localhost:3002/api/course/deleteCourse/` // có ID
export const updateCourseUrl = `http://localhost:3002/api/course/updateCourse/` // có ID
export const updateCourseImageUrl = `http://localhost:3002/api/course/UpdateCourseImage` 
export const getListLectureInCourseUrl = `http://localhost:3002/api/course/GetListLectureInCourse`

//endregion

//#region LECTURE PATH
export const getListLectureUrl = `http://localhost:3002/api/lecture/getListLecture`
export const createLectureUrl = `http://localhost:3002/api/lecture/createLecture`
export const detailLectureUrl = `http://localhost:3002/api/lecture/getDetailLecture/` // có ID
export const deleteLectureUrl = `http://localhost:3002/api/lecture/deleteLecture/` // có ID
export const updateLectureUrl = `http://localhost:3002/api/lecture/updateLecture/` // có ID

//endregion