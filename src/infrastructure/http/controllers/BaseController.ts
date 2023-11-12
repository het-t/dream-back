import { HttpResponse } from "../interfaces/HttpResponse";
import { HttpRequest } from "../interfaces/HttpRequest";
import { Validation } from "../interfaces/Validation";
import { badRequest, serverError } from "../helpers/http";

export abstract class BaseController {
    constructor(private readonly validation?: Validation) {}

    abstract execute(httpRequest: HttpRequest): Promise<HttpResponse>

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validation?.validate(httpRequest);
            if (error) {
                return badRequest(error);
            }
            return await this.execute(httpRequest);
        }
        catch(error) {
            return serverError(error)
        }
    }
}