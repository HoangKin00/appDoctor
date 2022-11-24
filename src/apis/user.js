const URL = 'src/apis/user.json';
const getAllUser = async() => {
    try {
        const res = await fetch(URL)
        const data = await res.json()
        return data;
    } catch (error) {
        console.log(error);
    }
}
 const getUserByName = async(user) => {
    try {
        const userAll = await getAllUser()
        const getUser = userAll.filter(e => {
            return e.name === user
        })
        return getUser[0];
    } catch (error) {
        console.log(error);
    }
}
export const getLogin = async({user, password}) => {
    try {
        const getUser = await getUserByName(user)
        if(!getUser) {
            console.log('user not found');
            return
        }
        if(getUser.password !== password){
            console.log('wrong password')
            return
        }
        return {name: getUser.name, password: getUser.password,isLogin: true}
    } catch (error) {
        console.log(error)
    }
}