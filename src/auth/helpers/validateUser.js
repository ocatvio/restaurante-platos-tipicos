import { users } from "../data/users";


export const validateUser = (userc) => {

    const user = users.filter(user => {
        return user.name === userc.name && user.password === userc.password ? true : false;
    })
    return user;
}
