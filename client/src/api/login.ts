import { reactive } from "vue";
import { SERVER_URL } from "../common/constants";
import { store } from "../store/store";
import { TUser } from "../common/types";

type TLoginState = {
  isLogged: boolean;
  username: string;
}

export const loginState: TLoginState = reactive({
  isLogged: true,
  username: "Oleg"
});

export const login = async (username: string) => {
  const response = await fetch(`http://${SERVER_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({ username })
  });
  const result: { user: TUser } = await response.json();

  if (result.user) {
    store.commit("login", result.user);
  }
};

