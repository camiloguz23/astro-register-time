export interface TimeRegister {
  nombre: string;
  email: string;
  tiempo: Tiempo;
  _id: string;
}

export interface Tiempo {
  years: Record<string, number>;
  meses: Meses;
}

export interface Meses {
  enero: number;
  febrero: number;
  marzo: number;
  abril: number;
  mayo: number;
  junio: number;
  julio: number;
  agosto: number;
  septiembre: number;
  octubre: number;
  noviembre: number;
  diciembre: number;
}
