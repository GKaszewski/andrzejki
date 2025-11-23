export interface Fortune {
  id: string;
  text: string;
  type: 'funny' | 'serious' | 'romantic';
}

export type GameType = 'cookie' | 'wax' | 'heart' | null;