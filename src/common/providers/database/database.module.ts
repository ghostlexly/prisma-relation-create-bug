import { Global, Module } from "@nestjs/common";
import { DatabaseService } from "./database.service";

@Module({
  imports: [],
  providers: [DatabaseService],
  controllers: [],
  exports: [DatabaseService],
})
@Global()
export class DatabaseModule {}
