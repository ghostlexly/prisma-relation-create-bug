import { Controller, Post } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { DatabaseService } from "src/common/providers/database/database.service";
import { HousekeeperInformationService } from "../housekeeper-information.service";

@Controller("/housekeepers/:housekeeperId/informations")
@ApiTags("Housekeeper/Information")
@ApiBearerAuth("access-token")
export class HousekeeperInformationController {
  constructor(
    private housekeeperInformationService: HousekeeperInformationService,
    private db: DatabaseService
  ) {}

  @Post()
  async createHousekeeperInformation() {
    // -- THIS WORKS WITH MANUALLY TYPING Prisma.HousekeeperInformationCreateInput IN THE SERVICE
    // const data = await this.housekeeperInformationService.create({
    //   data: {
    //     companyAddress: {
    //       create: {
    //         street: "Rue de la République",
    //         postalCode: "13001",
    //         city: "Marseille",
    //         countryCode: "FR",
    //         ownerId: "randomIdHere",
    //       }
    //     }
    //   },
    // });
    // -- THIS DOESN'T WORK
    // await this.db.prisma.housekeeperInformation.create({
    //   data: {
    //     companyAddress: {
    //       create
    //     }
    //   }
    // })
  }
}
