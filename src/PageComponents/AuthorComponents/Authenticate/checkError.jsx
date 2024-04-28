import { toast } from 'react-hot-toast'

export default function CheckError(Email, PassWord) {
    if(PassWord){
        PassWord = toast.error("mật khẩu chưa chính xác")
    }
    CheckEmail(Email)
}

const CheckEmail = async (Email) => {
    var regex =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (!regex.test(Email)) {
        Email = toast.error("Email không giống với định dạng");
    }
}