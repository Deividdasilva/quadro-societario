export interface Socio {
  id: number;
  nome: string;
  cpf: string;
  empresa_id: number; // ID da empresa associada ao sócio
  empresa?: string;    // Nome da empresa (opcional)
}
