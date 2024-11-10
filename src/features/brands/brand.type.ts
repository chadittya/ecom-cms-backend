export interface Brand {
  id: string;
  name: string;
  imageUrl?: string | null; // Allow null for consistency with Prisma
  product: string[]; // Adjust based on how Products relate to Brands in MongoDB
}
