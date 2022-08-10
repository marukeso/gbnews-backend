/*
  Warnings:

  - Added the required column `category` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('KEYCAPS', 'KEYBOARDS', 'SWITCHES');

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "category" "Category" NOT NULL;
