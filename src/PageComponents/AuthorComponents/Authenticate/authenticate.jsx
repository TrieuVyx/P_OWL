import Axios from "axios"
import CheckError from "./checkError";
import { loginUrl } from "../../../shortPath/urlPath";
import { LinkRouter } from '../../../shortPath/path';
import toast from "react-hot-toast";

export default async function Authenticate(Email, PassWord) {
    try {
        const data = { Email: Email, PassWord: PassWord }
        const response = await Axios({
            method: "POST",
            url: loginUrl,
            data: data
        })
        const Token = response.data.AccessToken;
        const RefreshToken = response.data.FreshToken;
        const Hierachy = response.data.Hierachy;
        const UserName = response.data.UserName;
        const IDUser = response.data.Id;
      
        localStorage.setItem("AccessToken", Token);
        localStorage.setItem("FreshToken", RefreshToken);
        localStorage.setItem("Hierachy", Hierachy);
        localStorage.setItem("UserName", UserName);
        localStorage.setItem("IDUser", IDUser);
      
        // Kiểm tra xem các giá trị đã được lưu thành công hay chưa
        if (
          response.status == 200
        ) {
          return true; // Trả về true nếu tất cả giá trị đều được lưu thành công
        } else {
          return false; // Trả về false nếu có một hoặc nhiều giá trị không được lưu thành công
        }
    }
    catch (err) {
        return false
    }


}

