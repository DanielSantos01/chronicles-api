export interface CreateProps {
  index: number;
  name: string;
  playedBy: string;
  gender: string;
  culture: string;
  bornAt: string;
  died: string;
  father: string;
  mother: string;
  spouse: string;
  titles?: string[];
  aliases?: string[];
  tvSeries?: string[];
  povBooks?: string[];
  books?: string[];
}

export interface QueryProps {
  index?: number;
  name?: string;
  playedBy?: string;
  gender?: string;
  culture?: string;
  bornAt?: string;
  died?: string;
  father?: string;
  mother?: string;
  spouse?: string;
  titles?: string[];
  aliases?: string[];
  tvSeries?: string[];
  povBooks?: string[];
  books?: string[];
}

export interface ReturnModel<T> {
  success: boolean;
  data: T;
}
