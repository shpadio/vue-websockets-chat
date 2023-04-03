import { reactive } from "vue";
import { SERVER_URL } from "../common/constants";

type TLoginState = {
  isLogged: boolean;
  username: string;
}

export const loginState: TLoginState = reactive({
  isLogged: false,
  username: ""
});

export const login = async (username: string) => {
  console.log(username, "USERNAME");
  const response = await fetch(`http://${SERVER_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({ username })
  });
  const result = await response.json();

  if (result.username) {
    loginState.isLogged = true;
    loginState.username = username;
  }
};

