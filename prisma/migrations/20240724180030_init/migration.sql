-- CreateEnum
CREATE TYPE "Role" AS ENUM ('client', 'owner', 'supervisor', 'admin');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('debit', 'credit');

-- CreateTable
CREATE TABLE "file" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_edited_at" TIMESTAMP(3) NOT NULL,
    "car_id" INTEGER,

    CONSTRAINT "file_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_edited_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "owner" INTEGER NOT NULL,
    "logo" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_edited_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "model" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "company_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_edited_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "model_id" INTEGER NOT NULL,
    "company_id" INTEGER NOT NULL,
    "info" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_edited_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaction" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "user_data" JSONB NOT NULL,
    "car_id" INTEGER NOT NULL,
    "car_data" JSONB NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_edited_at" TIMESTAMP(3) NOT NULL,
    "created_by" INTEGER NOT NULL,
    "last_edited_by" INTEGER NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "file" ADD CONSTRAINT "file_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "car"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company" ADD CONSTRAINT "company_owner_fkey" FOREIGN KEY ("owner") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "model" ADD CONSTRAINT "model_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car" ADD CONSTRAINT "car_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "model"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car" ADD CONSTRAINT "car_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
