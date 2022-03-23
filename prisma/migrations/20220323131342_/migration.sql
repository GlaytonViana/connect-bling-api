/*
  Warnings:

  - The primary key for the `forma_de_pagamento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `codigo` on the `forma_de_pagamento` table. All the data in the column will be lost.
  - Added the required column `codigoFiscal` to the `forma_de_pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fixa` to the `forma_de_pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `forma_de_pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `padrao` to the `forma_de_pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `situacao` to the `forma_de_pagamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "forma_de_pagamento" DROP CONSTRAINT "forma_de_pagamento_pkey",
DROP COLUMN "codigo",
ADD COLUMN     "codigoFiscal" INTEGER NOT NULL,
ADD COLUMN     "fixa" INTEGER NOT NULL,
ADD COLUMN     "id" INTEGER NOT NULL,
ADD COLUMN     "padrao" INTEGER NOT NULL,
ADD COLUMN     "situacao" INTEGER NOT NULL,
ADD CONSTRAINT "forma_de_pagamento_pkey" PRIMARY KEY ("id");
