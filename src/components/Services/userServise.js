import http from './httpService';
import config from './httpService'


export const registerUser = user => {
          return http.post(
          "https://toplearnapi.ghorbany.dev/api/register",
          JSON.stringify(user)
          );
};

export const loginUser = user => {
          return http.post(
          "https://toplearnapi.ghorbany.dev/api/login",
          JSON.stringify(user)
          );
};