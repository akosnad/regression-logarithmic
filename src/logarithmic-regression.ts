import BaseRegression, {
  checkArrayLength,
  maybeToPrecision,
} from 'ml-regression-base';

export interface LogarithmicRegressionJSON {
  name: 'logarithmicRegression';
  A: number;
  B: number;
}

export class LogarithmicRegression extends BaseRegression {
  A: number = 0;
  B: number = 0;
  constructor(x: number[] | boolean, y: number[] | LogarithmicRegressionJSON) {
    super();
    if (x === true && !(y instanceof Array)) {
      this.A = y.A;
      this.B = y.B;
    } else {
      checkArrayLength(x as number[], y as number[]);
      regress(this, x as number[], y as number[]);
    }
  }

  _predict(input: number) {
    return this.A + this.B * Math.log(input);
  }

  toJSON() {
    return {
      name: 'logarithmicRegression',
      A: this.A,
      B: this.B,
    };
  }

  toString(precision: number) {
    if (this.B >= 0) {
      return `f(x) = ${maybeToPrecision(
        this.A,
        precision,
      )} + ${maybeToPrecision(this.B, precision)} * ln(x)`;
    } else {
      return `f(x) = ${maybeToPrecision(
        this.A,
        precision,
      )} - ${maybeToPrecision(Math.abs(this.B), precision)} * ln(x)`;
    }
  }

  toLaTeX(precision: number) {
    return this.toString(precision);
  }

  static load(json: LogarithmicRegressionJSON) {
    if (json.name !== 'logarithmicRegression') {
      throw new TypeError('not a logarithmic regression model');
    }
    return new LogarithmicRegression(true, json);
  }
}

function regress(logarithmic: LogarithmicRegression, x: number[], y: number[]) {
  const sum = [0, 0, 0, 0];
  const len = x.length;
  for (let index = 0; index < len; index++) {
    const xLog = Math.log(x[index]);
    sum[0] += xLog;
    sum[1] += y[index] * xLog;
    sum[2] += y[index];
    sum[3] += xLog ** 2;
  }
  logarithmic.B =
    (len * sum[1] - sum[2] * sum[0]) / (len * sum[3] - sum[0] ** 2);
  logarithmic.A = (sum[2] - logarithmic.B * sum[0]) / len;
}
