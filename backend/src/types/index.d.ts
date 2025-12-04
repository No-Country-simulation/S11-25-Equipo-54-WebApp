import { Users } from "../models/user.model";

declare global {
    namespace Express {
        interface Request {
            user?: Users | null;
        }
    }
}
