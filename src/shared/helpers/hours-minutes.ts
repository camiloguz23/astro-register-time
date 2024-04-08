import { FormatHoursMinutesInterfaces } from "../types";


export const formatHoursMinutes = (minutesDb: number): FormatHoursMinutesInterfaces => {
  const hours = Math.floor(minutesDb / 60) 
  const minutes = minutesDb % 60;

  return {
    hours,
    minutes
  };
};
