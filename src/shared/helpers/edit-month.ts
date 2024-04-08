import { CodeMonthType } from '../types';

export const editMonth = (minutes: number): Record<CodeMonthType, Record<string, number>> => ({
  '0': { 'tiempo.meses.enero': minutes },
  '1': { 'tiempo.meses.febrero': minutes },
  '2': { 'tiempo.meses.marzo': minutes },
  '3': { 'tiempo.meses.abril': minutes },
  '4': { 'tiempo.meses.mayo': minutes },
  '5': { 'tiempo.meses.junio': minutes },
  '6': { 'tiempo.meses.julio': minutes },
  '7': { 'tiempo.meses.agosto': minutes },
  '8': { 'tiempo.meses.septiembre': minutes },
  '9': { 'tiempo.meses.octubre': minutes },
  '10': { 'tiempo.meses.noviembre': minutes },
  '11': { 'tiempo.meses.diciembre': minutes }
});

export const editYear = (year: number, count: number) => {
  const field = { [`tiempo.years.${year}`]: count };
  return field;
};
