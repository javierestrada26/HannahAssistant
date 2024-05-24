import { Injectable, Logger } from '@nestjs/common';
import OpenAI from 'openai';
import { checkCompleteStatusUseCase, createMessageUseCase, createRunUseCase, createThreadUseCase, getMessageListUseCase } from './use-cases';
import { QuestionDto } from './dtos/question.dto';

@Injectable()
export class HannahAssistantService {
    private readonly logger = new Logger(HannahAssistantService.name);
    private openia =  new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    })


    async createThread() {
        this.logger.log('Creating a new thread...');
        const result = await createThreadUseCase(this.openia);
        this.logger.log(`Thread created with ID: ${result.id}`);
        return result;
        //return await createThreadUseCase(this.openia)
    }

    async userQuestion(questionDto:QuestionDto) {

        const {threadId, question} = questionDto

        const message = await createMessageUseCase(this.openia,{threadId, question})

        const run = await createRunUseCase(this.openia,{threadId})

        await checkCompleteStatusUseCase(this.openia,{runId:run.id,threadId:threadId})

        const messages =  await getMessageListUseCase(this.openia,{threadId})

        return messages
    }
    
}
