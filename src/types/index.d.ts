declare global {
    namespace Express {
        export interface Request {
            newProperty: string; // Just for example to add new property in Request Object
        }
    }
}