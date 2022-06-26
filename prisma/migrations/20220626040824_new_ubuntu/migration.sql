-- CreateTable
CREATE TABLE "products" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT,
    "description" TEXT,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
