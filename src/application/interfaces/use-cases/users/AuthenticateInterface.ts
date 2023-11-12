import { UseCase } from "@application/interfaces/use-cases/UseCase";
import { ForbiddenError } from "@application/errors/ForbiddenError";

export namespace AuthenticateInterface {
    export type Request = string;
    export type Response = string | ForbiddenError;
}

export interface AuthenticateInterface extends UseCase<
    AuthenticateInterface.Request,
    AuthenticateInterface.Response
> {
    execute(token: AuthenticateInterface.Request): Promise<AuthenticateInterface.Response>;
}