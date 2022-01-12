export interface CreateProps {
  index: number;
  name: string;
  pulisher: string;
  author: string;
  cover: string;
  povCharacters?: string[];
}

export interface QueryProps {
  index?: number;
  name?: string;
  pulisher?: string;
  author?: string;
  cover?: string;
  povCharacters?: string[];
}

export interface ReturnModel<T> {
  success: boolean;
  data: T;
}
