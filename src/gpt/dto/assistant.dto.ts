import { IsInt, IsOptional, IsString } from "class-validator";

export class AssistantDto {

    @IsString()
    readonly prompt: string;

    @IsInt()
    @IsOptional()
    readonly max_tokens?: number;
}