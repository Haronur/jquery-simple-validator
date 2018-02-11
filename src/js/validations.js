export const validationFn = {
  required: value => {
    if (value) {
      return true;
    } else {
      return false;
    }
  },
  email: value => {
    const emailRegEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailRegEx.test(value)) {
      return true;
    } else {
      return false;
    }
  },
  url: value => {
    const urlRegEx = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    if (urlRegEx.test(value)) {
      return true;
    } else {
      return false;
    }
  },
  mobile: value => {
    const mobileRegEx = /^\d{10}$/;
    if (mobileRegEx.test(value)) {
      return true;
    } else {
      return false;
    }
  }
};
