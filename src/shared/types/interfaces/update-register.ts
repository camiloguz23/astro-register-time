export interface UpdateActionModel {
  _id: string;
  month: Record<string, number>;
  year: Record<string, number>;
}

export type UpdateMonthModel = Omit<UpdateActionModel, "year">;
export type UpdateYearModel = Omit<UpdateActionModel, "month">;
