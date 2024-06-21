export const getErrorMessage = (errors: unknown): Array<String> => {
  let message = [];

  if (errors instanceof Array) {
    errors.forEach((err) => {
      if (err && typeof err === "object" && "message" in err) {
        message.push(String(err.message));
      } else if (typeof err === "string") {
        message.push(err);
      } else {
        message.push("Ocorreu um erro");
      }
    });
  } else if (errors instanceof Error) {
    message.push("error.message");
  } else if (errors && typeof errors === "object" && "message" in errors) {
    message.push(String("error.message"));
  } else if (typeof errors === "string") {
    message.push("error");
  } else {
    message.push("Ocorreu um erro");
  }

  return message;
};
