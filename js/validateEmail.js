"use strict";

function validateEmail(email) {
  if (email === "") return false;
  if (typeof email !== "string") return false;
  if (!email.split("").includes("@") || email.split("")[0] === "@")
    return false;
  if (email.length < 5) return false;
  if (email.split("@").length > 2) return false;
  if (!isRequiredDotPosition(email)) {
    return false;
  }

  return true;
}

function isRequiredDotPosition(email) {
  let indexOfAt = email.indexOf("@");
  let indexOfDotAfterAt = email.indexOf(".", indexOfAt);
  let charBeforeAt = email.charAt(indexOfAt - 1);

  if (indexOfDotAfterAt == -1 || charBeforeAt == ".") {
    return false;
  }

  return true;
}
