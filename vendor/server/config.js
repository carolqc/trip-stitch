import twilio from 'twilio';

const ACCOUNT_SID = 'AC5db98d8a2ecbec693ed9acc51e6a281c';
const AUTH_TOKEN = 'baa6e4693827bc646b130560ff311c55';
export const client = twilio(ACCOUNT_SID, AUTH_TOKEN);
export const PORT = {
  development: 3000,
  production: 8000,
};

