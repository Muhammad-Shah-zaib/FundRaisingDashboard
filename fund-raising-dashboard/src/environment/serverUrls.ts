export const serverUrl: string = 'http://localhost:5036';

// * ------------------ AUTH -------------------
export const RegistrationUrl: string = `${serverUrl}/Registration`;
export const LoginUrl: string = `${serverUrl}/Login`;

// * ------------------ USERS -------------------
export const UsersUrl: string = `${serverUrl}/User`;

export const GetAllUserUrl: string = `${UsersUrl}/GetAllUsers`;
//  the delete user url should be like this: `${UsersUrl}/DeleteUser/${id}`
export const DeleteUserUrl: string = `${UsersUrl}/DeleteUser/`;
// the update user url should be like this: `${UsersUrl}/UpdateUser/${id}`
export const UpdateUserUrl: string = `${UsersUrl}/UpdateUser/`;

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


// * ------------------ CASE TRANSACTIONS -------------------
export const caseCaseTransactionsUrl: string = `${serverUrl}/CaseTransaction`;

// API endpoint the get all transactions
export const getAllCaseTransactionsUrl: string = `${caseCaseTransactionsUrl}/GetAllCaseTransactions`;

// * ------------------ CAUSE BANK -------------------
export const causeBankUrl: string = `${serverUrl}/CauseBank`;

// API endpoint to get all bank amount
export const getAllBankAmountUrl: string = `${causeBankUrl}/GetAllBankAmount`;
// API endpoint to get all causes
export const getAllCausesUrl: string = `${causeBankUrl}/GetAllCauses`;