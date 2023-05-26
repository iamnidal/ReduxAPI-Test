import axios from "axios";
import { AuthURL} from "../URLs"

export const ValidateUser = async (loginCredentials) =>{
    try{
        const results = await axios.post(AuthURL, loginCredentials);
        return results.data;
    }
    catch (error){
        console.log(error);
    }
}