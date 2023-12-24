import { UseCase } from "../UseCase";
import { IPointer } from "@infrastructure/http/interfaces/IOperation";

export namespace ICreateBlock {
    export type Request = {
        pointer: IPointer,
        args: {
            id: string,
            type: string,
            space_id: string
        }
    }
    export type Response = void;
}

export interface ICreateBlock extends UseCase<
    ICreateBlock.Request,
    ICreateBlock.Response
> {
    execute(
        { pointer, args }: ICreateBlock.Request
    ): Promise<ICreateBlock.Response>
}