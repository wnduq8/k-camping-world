/*
  Warnings:

  - You are about to drop the column `프로필 이미지` on the `Members` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Members` DROP COLUMN `프로필 이미지`,
    ADD COLUMN `photo_url` VARCHAR(191) NULL;
