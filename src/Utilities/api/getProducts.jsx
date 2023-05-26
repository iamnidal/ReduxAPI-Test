import axios from "axios";
import { AllProductsURL} from "../URLs"

export const GetProductsFromDB = async () =>{
    try{
        const results = await axios.get(AllProductsURL);
        // console.log(results.data.products)
        return results.data.products;
    }
    catch (error){
        console.log(error);
    }
}