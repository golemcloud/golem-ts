import { infallibleTransaction, operation, Result } from 'golem-ts';
import { GolemTsApi } from './interfaces/golem-ts-api.js';

export const api: typeof GolemTsApi  = {
    process: (a: bigint) =>  {
        let tx = infallibleTransaction(operationOne).next(operationTwo);
        let result = tx.execute(a);
        if (result.isOk) {
            return result.value;
        } else {
            console.log(`Error: ${result.error}`);
            return "Error";
        }
    }
}

const operationOne = operation(
    (input: bigint) => {
      let random = Math.floor(Math.random() * 10);
      if (random < 5) {
        console.log(`OperationOne | input: ${input} | random ${random} | negative input detected`)
        return Result.err("input cannot be negative");
      } else {
        console.log(`OperationOne | incrementing input by 1`)
        return Result.ok(input + BigInt(1));
      }
    },
    (input, result) => {
      console.log(`Compensating operationOne | input: ${input}, result: ${result}`);
      return Result.unit()
    }
);
  
const operationTwo = operation( 
    (input: bigint) => {
        let random = Math.floor(Math.random() * 10);
        if (random < 8) {
            console.log(`OperationTwo | input: ${input} | input too large`)
            return Result.err( {
                code: "invalid_random",
                message: "random number not = 9"
            });
        } else {
            console.log(`OperationTwo | input: ${input} | converting input to string`)
            return Result.ok("Valid BigInt: " + input.toString());
        }
    },
    (input, result) => {
        console.log(`Compensating operationTwo | input: ${input}, result: ${result}`);
        return Result.unit()
    }
);
