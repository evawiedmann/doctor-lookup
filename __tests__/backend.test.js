import { Doctor } from './../src/age.js'

describe('Doctor', () => {
  test("should accept input", () => {
    let newDoctor = new Doctor(name);
    expect(newDoctor.input).toEqual('name');
  });
});
