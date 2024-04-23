export const serverUrl: string = 'http://localhost:5036';

// * ------------------ AUTH -------------------
export const LoginUrl: string = `${serverUrl}/Login`;

// * ------------------ CASES -------------------
export const casesUrl: string = `${serverUrl}/Cases`;

export const getALLCasesUrl: string = `${casesUrl}/GetAllCases`;
export const addCaseUrl: string = `${casesUrl}/AddCase`;
// thd delete case url should be like this: `${casesUrl}/DeleteCase/${id}`
export const deleteCaseUrl: string = `${casesUrl}/DeleteCase/`;
// the update case url should be like this: `${casesUrl}/UpdateCase/${id}`
export const updateCaseUrl: string = `${casesUrl}/UpdateCase/`;
// the verifyCaseUrl should be like this: `${caseUrl}/VerifyCase/${id}`
export const verifyCaseUrl: string = `${casesUrl}/VerifyCase`;
// the unVerifyCaseUrl should be like this: `${caseUrl}/UnVerifyCase/${id}
export const unVerifyCaseUrl: string = `${casesUrl}/UnVerifyCase`;