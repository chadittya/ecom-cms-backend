import { PrismaClient } from "@prisma/client";
import type { Brand } from "./brand.type";

const prisma = new PrismaClient();

export class BrandController {
  static async getAll() {
    return await prisma.brands.findMany();
  }

  static async getById(id: string) {
    return await prisma.brands.findUnique({ where: { id } });
  }

  static async updateById(id: string, data: Partial<Brand>) {
    return await prisma.brands.update({ where: { id }, data });
  }

  static async deleteById(id: string) {
    return await prisma.brands.delete({ where: { id } });
  }

  static async createBrand(data: Brand) {
    return await prisma.brands.create({ data });
  }
}
