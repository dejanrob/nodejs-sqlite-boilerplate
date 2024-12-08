import db from '../config/database';

class User {

    static create(name: string, age: number) {
        const userStm = db.prepare("insert into users (name, age) values (?, ?)");
        return userStm.run([name, age]);
    }

    static readAll() {
        const userStm = db.prepare("Select * from users");
        return userStm.all();
    }

    static readById(id: string) {
        const userStm = db.prepare("Select * from users where id = ?");
        return userStm.get([id]);
    }

    static delete(id: string) {
        const userStm = db.prepare("Delete from users where id = ?");
        return userStm.run([id]);
    }

    static update(id: string, obj: Object) {
        let query = "update users set ";
        const params = [];
        for (let [ key, value ] of Object.entries(obj)) {
            query += `${key} = ?, `;
            params.push(value);
        }
        query = query.slice(0, -2);
        query += " where id = ? ";
        params.push(id);
        const userStm = db.prepare(query);
        return userStm.run(params);
    }

}

export default User;