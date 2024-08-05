import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { DatabaseService } from "src/common/providers/database/database.service";

@Injectable()
export class HousekeeperInformationService {
  constructor(private db: DatabaseService) {}

  async create(params: { data: Prisma.HousekeeperInformationCreateInput }) {
    const { data } = params;

    // -- create
    const housekeeperInformation =
      await this.db.prisma.housekeeperInformation.create({
        data: {
          ...data,
        },
      });

    return housekeeperInformation;
  }
}
