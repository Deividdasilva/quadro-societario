<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20241107225516 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Cria as tabelas empresa e socio, e define o relacionamento entre elas';
    }

    public function up(Schema $schema): void
    {
        // Cria a tabela empresa
        $this->addSql('
            CREATE TABLE empresa (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                cnpj VARCHAR(20) NOT NULL
            )
        ');
        // Cria a tabela socio com uma referência para empresa
        $this->addSql('
            CREATE TABLE socio (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                cpf VARCHAR(15) NOT NULL,
                empresa_id INTEGER NOT NULL,
                CONSTRAINT fk_empresa
                    FOREIGN KEY (empresa_id)
                    REFERENCES empresa (id)
                    ON DELETE CASCADE
            )
        ');
    }

    public function down(Schema $schema): void
    {
        // Remove as tabelas em ordem reversa para evitar erros de restrição
        $this->addSql('DROP TABLE socio');
        $this->addSql('DROP TABLE empresa');
    }
}
