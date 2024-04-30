export  const checkTokenExist=() =>{
    const token = localStorage.getItem('AccessToken')
    return token
}
export const checkPermission = () =>{
    const per = localStorage.getItem('Hierachy')
    return per
}

