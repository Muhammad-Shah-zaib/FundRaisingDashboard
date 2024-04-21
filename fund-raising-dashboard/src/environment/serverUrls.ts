export const serverUrl: string = 'http://localhost:5036';

// * ------------------ AUTH -------------------
export const LoginUrl: string = `${serverUrl}/Login`;

// * ------------------ CASES -------------------
export const casesUrl: string = `${serverUrl}/Cases`;

export const getALLCasesUrl: string = `${casesUrl}/GetAllCases`;
export const addCaseUrl: string = `${casesUrl}/AddCase`;
// thd delete case url should be like this: `${casesUrl}/DeleteCase/${id}`
export const deleteCaseUrl: string = `${casesUrl}/DeleteCase/`;