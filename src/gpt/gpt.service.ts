import { Injectable } from '@nestjs/common';
import { assistantUseCase } from './use-cases';
import { AssistantDto } from './dto/assistant.dto';
import OpenAI from 'openai';

@Injectable()
export class GptService {

    private openia =  new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    })



    //retorna casos de uso
    async assistant(assistantDto: AssistantDto){
        return await assistantUseCase(this.openia,{
            prompt: assistantDto.prompt
        }) 
    }
}
