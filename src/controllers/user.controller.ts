import { Request as ExpressRequest, Response as ExpressResponse } from "express";
import ResponseHandler from '../utils/responseHandler';
import UserService from "../services/user.service";

export class UserController {

    private userSrv = new UserService();

    public createUser(req: ExpressRequest, res: ExpressResponse) {
        try {
            const { name, age } = req.body;
            const created = this.userSrv.createUser(name, age);
            ResponseHandler.success(res, created);
        } catch (error: any) {
            ResponseHandler.error(res, error);
        }
    }

    public getAllUsers(req: ExpressRequest, res: ExpressResponse) {
        try {
            const user = this.userSrv.getUsers();
            ResponseHandler.success(res, user);
        } catch (error: unknown) {
            ResponseHandler.error(res, error);
        }
    }

    public readById(req: ExpressRequest, res: ExpressResponse) {
        try {
            const { id } = req.params;
            const user = this.userSrv.getUser( id );
            ResponseHandler.success(res, user);
        } catch (error: unknown) {
            ResponseHandler.error(res, error);
        }
    }

    public deleteUser(req: ExpressRequest, res: ExpressResponse) {
        try {
            const { id } = req.params;
            const user = this.userSrv.deleteUser(id);
            ResponseHandler.success(res, user);
        } catch (error: any) {
            ResponseHandler.error(res, error);
        }
    }

    public updateUser(req: ExpressRequest, res: ExpressResponse) {
        try {
            const { id } = req.params;
            const user = this.userSrv.updateUser(id, req.body);
            ResponseHandler.success(res, user);
        } catch (error: any) {
            ResponseHandler.error(res, error);
        }
    }

}

export default UserController;