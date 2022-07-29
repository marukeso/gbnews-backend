-- CreateEnum
CREATE TYPE "Status" AS ENUM ('LIVE', 'UPCOMING', 'IC', 'ENDED');

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "basePrice" TEXT,
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "startDate" TIMESTAMP(3),
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'LIVE';
