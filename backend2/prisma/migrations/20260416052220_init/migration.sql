CREATE TABLE "users" (
    "id" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "medicines" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "codigo" TEXT NOT NULL,
    "onde_tem" TEXT,
    "nivel_risco" INTEGER NOT NULL,

    CONSTRAINT "medicines_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "medicine_searches" (
    "id" BIGSERIAL NOT NULL,
    "medicine_id" BIGINT NOT NULL,
    "searched_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "referrer" TEXT,
    "user_agent" TEXT,

    CONSTRAINT "medicine_searches_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "reports" (
    "id" BIGSERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "report_type" TEXT NOT NULL,
    "generated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data" JSONB,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE UNIQUE INDEX "medicines_codigo_key" ON "medicines"("codigo");

ALTER TABLE "medicine_searches" ADD CONSTRAINT "medicine_searches_medicine_id_fkey" 
    FOREIGN KEY ("medicine_id") REFERENCES "medicines"("id") 
    ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "reports" ADD CONSTRAINT "reports_user_id_fkey" 
    FOREIGN KEY ("user_id") REFERENCES "users"("id") 
    ON DELETE RESTRICT ON UPDATE CASCADE;