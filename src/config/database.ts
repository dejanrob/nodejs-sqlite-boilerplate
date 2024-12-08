import Sqlite from "better-sqlite3";

class Database {

    private static instance: any;

    public static init(name: string) {
        if (!Database.instance) {
            Database.instance = new Sqlite(name);
            Database.instance.prepare(`
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name VARCHAR(30),
                    age INTEGER
                )
            `).run();
        }
        return Database.instance;
    }

}

export default Database.init('myDatabase.db');