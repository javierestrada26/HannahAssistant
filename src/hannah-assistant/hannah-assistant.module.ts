import { Module } from '@nestjs/common';
import { HannahAssistantService } from './hannah-assistant.service';
import { HannahAssistantController } from './hannah-assistant.controller';

@Module({
  controllers: [HannahAssistantController],
  providers: [HannahAssistantService],
})
export class HannahAssistantModule {}
