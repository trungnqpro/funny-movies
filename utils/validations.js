
/**
 * validate username setting
 * @param {username} _username
 */
export const validateUsername = _username => {
  return /^([a-zA-Z0-9]+)$/.test(_username);
};

/**
 * validate password
 * @param {password} _password
 */
export const validatePassword = _password => {
  let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,32}$/;
  return re.test(_password);
};

