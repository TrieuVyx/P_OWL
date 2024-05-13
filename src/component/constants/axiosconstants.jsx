import Axios from "axios"
import { detailUserUrl, updateUserUrl  } from "../../shortPath/urlPath"
//  const detailUser = async (key) => {

//     try {
//         const tokenAccess = localStorage.getItem("AccessToken")
//         const AccountId = localStorage.getItem("AccountId")
//         const data = await Axios({
//             method: "GET",
//             url: `${detailUserUrl}${AccountId}`,
//             headers: {
//                tokenAccess
//             }
//         }).catch(err => {
//             console.log("ERR")
//         })
//         const dataPromise = await data
//         return dataPromise
//     }
//     catch (err) {
//         console.log("ERR")
//     }
// }


const updateUser = async (key)=>{
    try {
        // const tokenAccess = localStorage.getItem("AccessToken")
        // const AccountId = localStorage.getItem("AccountId")
        // const data = await Axios({
        //     method: "GET",
        //     url: `${detailUserUrl}${AccountId}`,
        //     headers: {
        //        tokenAccess
        //     }
        // }).catch(err => {
        //     console.log("ERR")
        // })
        // const dataPromise = await data
        // return dataPromise
    }
    catch (err) {
        console.log("ERR")
    }
}

const deleteUser = async (key)=>{
    try {
        // const tokenAccess = localStorage.getItem("AccessToken")
        // const AccountId = localStorage.getItem("AccountId")
        // const data = await Axios({
        //     method: "GET",
        //     url: `${detailUserUrl}${AccountId}`,
        //     headers: {
        //        tokenAccess
        //     }
        // }).catch(err => {
        //     console.log("ERR")
        // })
        // const dataPromise = await data
        // return dataPromise
    }
    catch (err) {
        console.log("ERR")
    }
}
const createUser = async ()=>{
    try {
        // const tokenAccess = localStorage.getItem("AccessToken")
        // const AccountId = localStorage.getItem("AccountId")
        // const data = await Axios({
        //     method: "GET",
        //     url: `${detailUserUrl}${AccountId}`,
        //     headers: {
        //        tokenAccess
        //     }
        // }).catch(err => {
        //     console.log("ERR")
        // })
        // const dataPromise = await data
        // return dataPromise
    }
    catch (err) {
        console.log("ERR")
    }
}
export{
    // detailUser,
    updateUser,
    deleteUser,
    createUser
}