import User from '../models/user.model';

class UserService {

    createUser(name: string, age: number) {
        return User.create(name, age); 
    }

    getUsers(): User[] {
        const users = User.readAll();
        return users;
    }

    getUser(id: string) {
        return User.readById(id)
    }

    deleteUser(id: string) {
        return User.delete(id)
    }

    updateUser(id: string, obj: Object) {
        return User.update(id, obj);
    }
 
}

export default UserService;