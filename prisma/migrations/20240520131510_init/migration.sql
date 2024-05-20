/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guests` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasBar` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasBreakfast` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasParking` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasShower` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasWifi` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hotel" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "guests" INTEGER NOT NULL,
ADD COLUMN     "hasBar" BOOLEAN NOT NULL,
ADD COLUMN     "hasBreakfast" BOOLEAN NOT NULL,
ADD COLUMN     "hasParking" BOOLEAN NOT NULL,
ADD COLUMN     "hasShower" BOOLEAN NOT NULL,
ADD COLUMN     "hasWifi" BOOLEAN NOT NULL,
ADD COLUMN     "hotelId" INTEGER,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
