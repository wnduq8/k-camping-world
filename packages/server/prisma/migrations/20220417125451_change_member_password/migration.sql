-- AlterTable
ALTER TABLE `Members` MODIFY `password` VARCHAR(191) NULL,
    ALTER COLUMN `lastlogin_datetime` DROP DEFAULT;
