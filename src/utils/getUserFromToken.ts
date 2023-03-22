import jwt from 'jsonwebtoken';

export const getUserFromToken = async ( token: string) =>{
    try{
        const userInfo = await jwt.verify(token, "Secret_code");
        return userInfo.data;
    }
    catch(err){
        console.log(err);
    }
}