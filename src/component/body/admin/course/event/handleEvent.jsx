import GetUser from "../../user/event/CRUD/get"

const handleCreate = ()=>{
    window.location.href = `course/create`
}
const handleDelete = (key)=>{
    localStorage.setItem('CourseID', key)
    window.location.href = `course/delete/${key}`
}

const handleUpdate = (key)=>{
    localStorage.setItem('CourseID', key)
    window.location.href = `course/update/${key}`
}

const handleDetail = (key)=>{
    localStorage.setItem('CourseID', key);
    window.location.href = `course/detail/${key}`;
    // GetUser(key);
}

export {
    handleDelete,
    handleUpdate,
    handleDetail,
    handleCreate
}
