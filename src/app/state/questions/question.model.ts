export interface Question {
  id: number;
  content: string;
  type: string;
  answer: string;
  level: string;
  votersIds: number[];
}

export function createQuestion(params: Partial<Question>): Question {
  return {

  } as Question;
}
