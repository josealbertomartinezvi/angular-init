export interface Character {
  id: string;
  name: string;
  power: number;
}

export type NewCharacter = Omit<Character, 'id'>;
