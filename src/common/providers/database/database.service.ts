import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";

import {
  createExtendedPrismaClient,
  extendedPrismaClient,
} from "./prisma.instance";

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private client: extendedPrismaClient;

  constructor() {
    this.client = createExtendedPrismaClient();
  }

  async onModuleInit() {
    await this.client.$connect();
  }

  async onModuleDestroy() {
    await this.client.$disconnect();
  }

  public get prisma() {
    return this.client;
  }
}
