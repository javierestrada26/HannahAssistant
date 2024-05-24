import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HannahAssistantModule } from './hannah-assistant/hannah-assistant.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HannahAssistantModule]
})
export class AppModule {}
