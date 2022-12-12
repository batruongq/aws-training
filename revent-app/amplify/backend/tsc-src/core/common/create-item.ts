export type ValidationRules = any;

export interface DDBCreateItemAdapter {
  getTableName(): string

  getValidationRules(): ValidationRules

  doCustomValidation(): void

  putItem(): void
}
