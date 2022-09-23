/*
  Warnings:

  - You are about to drop the `Deliveryman` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Deliveryman";

-- CreateTable
CREATE TABLE "deliverymans" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "deliverymans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deliveries" (
    "id" TEXT NOT NULL,
    "id_client" TEXT NOT NULL,
    "id_delivery" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "deliveries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "deliverymans_username_key" ON "deliverymans"("username");

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_delivery_fkey" FOREIGN KEY ("id_delivery") REFERENCES "deliverymans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
