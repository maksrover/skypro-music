const registerUrl = "https://skypro-music-api.skyeng.tech/user/signup/";

export const registerUser = async ({ email, password, username }) => {
  const response = await fetch(registerUrl, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      username,
    }),
    headers: {
      "content-type": " application/json",
    },
  });
  if (response === 400) {
    throw new Error(
      "Пользователь с таким адрес электронной почты уже существует."
    );
  }

  const newUserRegister = await response.json();
 
  if (response.status === 400) {
    const userEmailError = newUserRegister.email
      ? `Email: ${newUserRegister.email}`
      : "";
    const userNamelError = newUserRegister.username
      ? `Имя пользователя: ${newUserRegister.username}`
      : "";
    const userPasswordlError = newUserRegister.password
      ? `Пароль: ${newUserRegister.password}`
      : "";

    throw new Error(
      `${userEmailError}
       ${userNamelError}
       ${userPasswordlError}`
    );
  }
  if (response.status === 500) {
    throw new Error("Сервер сломался");
  }

  return newUserRegister;
};

const loginUrl = "https://skypro-music-api.skyeng.tech/user/login/";
export const loginUser = async ({ email, password }) => {
  const response = await fetch(loginUrl, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "content-type": " application/json",
    },
  });

  const authUserLogin = await response.json();
 

  if (response.status === 400) {
    const userEmailError = authUserLogin.email
      ? `Email: ${authUserLogin.email}`
      : "";
    const userNamelError = authUserLogin.username
      ? `Имя пользователя: ${authUserLogin.username}`
      : "";
    const userPasswordlError = authUserLogin.password
      ? `Пароль: ${authUserLogin.password}`
      : "";

    throw new Error(
      `${userEmailError}
       ${userNamelError}
       ${userPasswordlError}`
    );
  }

  if (response.status === 401) {
    throw new Error(`${authUserLogin.detail}`);
  }

  if (response.status === 500) {
    throw new Error("Сервер сломался");
  }

  return authUserLogin;
};

const tokenUrl = "https://skypro-music-api.skyeng.tech/user/token/";
export const getUserToken = async ({ email, password }) => {
  const response = await fetch(tokenUrl, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "content-type": " application/json",
    },
  });
  return response.json();
};
