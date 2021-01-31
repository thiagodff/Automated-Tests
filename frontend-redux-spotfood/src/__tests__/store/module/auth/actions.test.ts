import { signInRequest } from "../../../../store/modules/auth/actions";


describe('Test auth actions successfully', () => {
  it('should return correct value from signInRequest action', () => {
    const actionResult = signInRequest();

    const expectedActionResult = {
      type: '@auth/SIGN_IN_REQUEST',
      error: undefined,
      meta: undefined,
      payload: undefined,
    }
    
    expect(actionResult).toStrictEqual(expectedActionResult);
  });
});
