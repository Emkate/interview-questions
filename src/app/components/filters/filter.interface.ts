export type QuestionType = 'javascript' | 'angular' | 'react';
export type QuestionLevel = 'junior' | 'mid' | 'senior';

export interface Filter {
  1: QuestionType[];
  2: QuestionLevel[];
}
