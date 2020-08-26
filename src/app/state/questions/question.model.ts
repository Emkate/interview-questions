export interface Question {
  id: number | string;
  content: string;
}

export function createQuestion(params: Partial<Question>): Question {
  return {

  } as Question;
}
