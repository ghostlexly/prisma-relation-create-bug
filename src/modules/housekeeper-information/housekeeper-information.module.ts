import { Module } from "@nestjs/common";
import { HousekeeperInformationService } from "./housekeeper-information.service";
import { HousekeeperInformationController } from "./controllers/housekeeper-information.controller";

@Module({
  imports: [],
  providers: [HousekeeperInformationService],
  controllers: [HousekeeperInformationController],
  exports: [],
})
export class HousekeeperInformationModule {}
