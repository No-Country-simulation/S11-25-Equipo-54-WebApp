declare module "jsonwebtoken" {
    export interface SignOptions {
        expiresIn?: string | number;
    }

    export function sign(arg0: { id: number | null; email: string; rol: string; }, JWT_SECRET: string, options: SignOptions): string {
        throw new Error("Function not implemented.");
    }

    export function verify(token: string, JWT_SECRET: string): jwt.JwtPayload {
        throw new Error("Function not implemented.");
    }
}
