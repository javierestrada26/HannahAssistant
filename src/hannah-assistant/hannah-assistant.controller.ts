import { Body, Controller, Post, Logger } from '@nestjs/common';
import { HannahAssistantService } from './hannah-assistant.service';
import { QuestionDto } from './dtos/question.dto';

@Controller('hannah-assistant')
export class HannahAssistantController {
  //este hay que borrarse
  private readonly logger = new Logger(HannahAssistantController.name);
  //
  constructor(private readonly hannahAssistantService: HannahAssistantService) {}

  @Post('create-thread')
  async createThread() {
    
    this.logger.log('Received request to create a thread');
    const result = await this.hannahAssistantService.createThread();
    this.logger.log(`Thread created with ID: ${result.id}`);
    return result;

    //return await this.hannahAssistantService.createThread(); //este hay que poner normal
  }

  @Post('user-question')
  async userQuestion(
    @Body() questionDto: QuestionDto
  ) {
    return await this.hannahAssistantService.userQuestion(questionDto)
  }

}
