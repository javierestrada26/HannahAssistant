import { Body, Controller, Post } from '@nestjs/common';
import { GptService } from './gpt.service';
import { AssistantDto } from './dto';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('assistant')
  assistant(
    @Body() assistantDto:AssistantDto
  ){
    
    return this.gptService.assistant(assistantDto);
  }
}
