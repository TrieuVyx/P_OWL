const handleCreate = ()=>{
    window.location.href = `lecture/create`
}
const handleDelete = (key)=>{
    localStorage.setItem('LectureID', key)
    window.location.href = `lecture/delete/${key}`
}

const handleUpdate = (key)=>{
    localStorage.setItem('LectureID', key)
    window.location.href = `lecture/update/${key}`
}

const handleDetail = (key)=>{
    localStorage.setItem('LectureID', key)
    window.location.href = `lecture/detail/${key}`
}

export {
    handleDelete,
    handleUpdate,
    handleDetail,
    handleCreate
}
