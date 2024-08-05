import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { ThrottlerGuard } from "@nestjs/throttler";
import { DatabaseModule } from "./common/providers/database/database.module";
import { HousekeeperInformationModule } from "./modules/housekeeper-information/housekeeper-information.module";

@Module({
  imports: [
    // -- Common
    DatabaseModule,

    // -- Business modules
    HousekeeperInformationModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD, // enable guard globally on all routes
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
