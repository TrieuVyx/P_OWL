import { LinkRouter } from '../../../shortPath/path';
export default function checkTokenExist() {
    const token = localStorage.getItem('AccessToken')
  
    return token

}