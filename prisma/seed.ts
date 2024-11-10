// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   try {
//     const appleBrand = await prisma.brands.create({
//       data: {
//         name: "Apple",
//         products: {
//           create: [
//             { name: "iPhone 13", price: 799 },
//             { name: "MacBook Pro 2021", price: 1499 },
//             { name: "Apple Watch Series 6", price: 399 },
//           ],
//         },
//       },
//     });
//     console.log(`Brand created with ID: ${appleBrand.id}`);
//   } catch (error) {
//     console.error("Error seeding data: ", error);
//   }
// }

// main()
//   .catch((e) => {
//     console.error(e.message);
//   })
//   .finally(async () => await prisma.$disconnect());
