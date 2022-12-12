export type AttributeValidationMap = {[key: string]: ValidationRules[]}

export enum ValidationRules {
  REQUIRED,
  DATE_TIME,
  EMAIL
};

export class Validator<TModel> {
  /**
   * Validate the json data by rules config
   * @param data: Json object to validate 
   * @param rules: Rules object which keys match to fields in json object, and value is its validation rules
   * @returns: Error object which keys are fields, and value is error validation message
   */
  validate(data: TModel, rules: AttributeValidationMap)  {
    const errors: any = {};

    Object.entries(data as object).forEach(([key, value]) => {
      const rule = rules[key];
      const error = rule && this.validateValue(value as string, rule);

      if (!error) return;

      errors[key] = error;
    });

    return errors;
  }

  private validateValue(value: string, rules: ValidationRules[]) {
    const trimValue = value && value.trim ? value.trim() : value;
    let error = null;
  
    if (rules) {
      const ruleCount = rules.length;
  
      for (let i = 0; i < ruleCount; i++) {
        const rule = rules[i];
        const validator = this.getValidator(rule);
  
        if (!validator) continue;
  
        error = validator(trimValue);
  
        if (error) {
          break;
        }
      }
    }
  
    return error;
  }

  /**
   * Return validator by rule name
   */
  private getValidator(rule: ValidationRules): Function {
    const validatorByRule = {
      [ValidationRules.REQUIRED]: this.validateRequired.bind(this),
      [ValidationRules.DATE_TIME]: this.validateDate.bind(this),
      [ValidationRules.EMAIL]: this.validateEmail.bind(this),

    };

    return validatorByRule[rule];
  }

  private validateDate(value: string): boolean {
    return true;
  }

  private validateEmail(value: string): boolean {
    return true;
  }

  private validateRequired(value: string | boolean | number | Array<any>): boolean {
    return (value === undefined || value === null || value === '' || (value as Array<any>)?.length === 0); 
  }
}
