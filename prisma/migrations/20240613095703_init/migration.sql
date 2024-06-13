-- CreateTable
CREATE TABLE "Status" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipo_Financa" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Tipo_Financa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" UUID NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "path_imagem_perfil" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Financa" (
    "id" UUID NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "id_status" UUID NOT NULL,
    "id_tipo_financa" UUID NOT NULL,
    "id_usuario" UUID NOT NULL,

    CONSTRAINT "Financa_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Financa" ADD CONSTRAINT "Financa_id_status_fkey" FOREIGN KEY ("id_status") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Financa" ADD CONSTRAINT "Financa_id_tipo_financa_fkey" FOREIGN KEY ("id_tipo_financa") REFERENCES "Tipo_Financa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Financa" ADD CONSTRAINT "Financa_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
