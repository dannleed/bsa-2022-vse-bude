-- AlterTable
ALTER TABLE "Bid" ALTER COLUMN "deletedAd" DROP DEFAULT,
ALTER COLUMN "deletedAd" SET DATA TYPE TIMESTAMP(0);
