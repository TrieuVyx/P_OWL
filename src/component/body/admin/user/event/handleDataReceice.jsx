const handleDelete = (key)=>{
    console.log(key)
}

const handleUpdate = (key)=>{
    console.log(key)
}

const handleDetail = (key)=>{
    window.location.href = `user/${key}`
}

export {
    handleDelete,
    handleUpdate,
    handleDetail
}