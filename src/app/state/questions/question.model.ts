export interface Question {
  id: number | string;
  content: string;
  type: string;
  answer: string;
  level: string;
}

export function createQuestion(params: Partial<Question>): Question {
  return {

  } as Question;
}
