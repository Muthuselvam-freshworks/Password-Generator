/*get the number of characters*/
function charLength() {
  let charLength = document.getElementById("length").value;
  document.getElementById("result").innerHTML = charLength;
  return charLength;
}
document.getElementById("length").addEventListener("change", charLength);

const all_char =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const all_characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_";

const upper_numbers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const upper_characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lower_characters = "abcdefghijklmnopqrstuvwxyz";

const upper_lower = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";

const symbols = "!@#$%^&*()_";

const upper_symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_";

const lower_number = "abcdefghijklmnopqrstuvwxyz0123456789";

const lower_symbols = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_";

const number_symbols = "0123456789!@#$%^&*()_";

const upper_num_sym = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_";

const low_num_sym = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_";

const up_low_num =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function generate() {
  //   let changing = document.getElementById("length").value;
  //   let result = " ";
  //   const all_char_length = all_char.length;
  //   for (let i = 0; i < changing; i++) {
  //     result += all_char.charAt(Math.floor(Math.random() * all_char_length));
  //   }
  //   document.getElementById("password__result").value = result;

  if (document.getElementById("uppercase").checked) {
    let changing = document.getElementById("length").value;
    let result = " ";
    let upper_length = upper_characters.length;
    for (let i = 0; i < changing; i++) {
      result += upper_characters.charAt(
        Math.floor(Math.random() * upper_length)
      );
    }
    document.getElementById("password__result").value = result.toUpperCase();
  }

  if (document.getElementById("lowercase").checked) {
    let changing = document.getElementById("length").value;
    let result = " ";
    let lower_length = lower_characters.length;
    for (let i = 0; i < changing; i++) {
      result += lower_characters.charAt(
        Math.floor(Math.random() * lower_length)
      );
    }
    document.getElementById("password__result").value = result.toLowerCase();
  }

  if (document.getElementById("numbers").checked) {
    let changing = document.getElementById("length").value;
    let result = " ";
    let numbers_length = numbers.length;
    for (let i = 0; i < changing; i++) {
      result += numbers.charAt(Math.floor(Math.random() * numbers_length));
    }
    document.getElementById("password__result").value = result;
  }

  if (document.getElementById("symbols").checked) {
    let changing = document.getElementById("length").value;
    let result = " ";
    let symbols_length = symbols.length;
    for (let i = 0; i < changing; i++) {
      result += symbols.charAt(Math.floor(Math.random() * symbols_length));
    }
    document.getElementById("password__result").value = result;
  }

  if (
    document.getElementById("uppercase").checked &&
    document.getElementById("lowercase").checked
  ) {
    let changing = document.getElementById("length").value;
    let result = " ";
    let upper_lower_length = upper_lower.length;
    for (let i = 0; i < changing; i++) {
      result += upper_lower.charAt(
        Math.floor(Math.random() * upper_lower_length)
      );
    }
    document.getElementById("password__result").value = result;
  }
  if (
    document.getElementById("uppercase").checked &&
    document.getElementById("lowercase").checked &&
    document.getElementById("numbers").checked
  ) {
    let changing = document.getElementById("length").value;
    let result = " ";
    let upper_lower_length = upper_lower.length;
    for (let i = 0; i < changing; i++) {
      result += upper_lower.charAt(
        Math.floor(Math.random() * upper_lower_length)
      );
    }
    document.getElementById("password__result").value = result;
  }

  if (
    document.getElementById("uppercase").checked &&
    document.getElementById("lowercase").checked &&
    document.getElementById("numbers").checked
  ) {
    let changing = document.getElementById("length").value;
    let result = " ";
    let all_char_length = all_char.length;
    for (let i = 0; i < changing; i++) {
      result += all_char.charAt(Math.floor(Math.random() * all_char_length));
    }
    document.getElementById("password__result").value = result;
  }

  if (
    document.getElementById("uppercase").checked &&
    document.getElementById("lowercase").checked &&
    document.getElementById("numbers").checked &&
    document.getElementById("symbols").checked
  ) {
    let changing = document.getElementById("length").value;
    let result = " ";
    let all_characters_length = all_characters.length;
    for (let i = 0; i < changing; i++) {
      result += all_characters.charAt(
        Math.floor(Math.random() * all_characters_length)
      );
    }
    document.getElementById("password__result").value = result;
  }

  if (
    document.getElementById("uppercase").checked &&
    document.getElementById("numbers").checked
  ) {
    all_char.slice(27, 53);
    let changing = document.getElementById("length").value;
    let result = " ";
    let all_char_length = all_char.length;
    for (let i = 0; i < changing; i++) {
      result += all_char.charAt(Math.floor(Math.random() * all_char_length));
    }
    document.getElementById("password__result").value = result;
  }

  if (
    document.getElementById("uppercase").checked &&
    document.getElementById("numbers").checked &&
    document.getElementById("symbols").checked
  ) {
    all_char.slice(27, 53);
    let changing = document.getElementById("length").value;
    let result = " ";
    let upper_num_sym_length = upper_num_sym.length;
    for (let i = 0; i < changing; i++) {
      result += upper_num_sym.charAt(
        Math.floor(Math.random() * upper_num_sym_length)
      );
    }
    document.getElementById("password__result").value = result;
  }

  if (
    document.getElementById("uppercase").checked &&
    document.getElementById("symbols").checked
  ) {
    // all_char.slice(27, 53);
    let changing = document.getElementById("length").value;
    let result = " ";
    let upper_symbols_length = upper_symbols.length;
    for (let i = 0; i < changing; i++) {
      result += upper_symbols.charAt(
        Math.floor(Math.random() * upper_symbols_length)
      );
    }
    document.getElementById("password__result").value = result;
  }

  if (
    document.getElementById("lowercase").checked &&
    document.getElementById("numbers").checked
  ) {
    // all_char.slice(27, 53);
    let changing = document.getElementById("length").value;
    let result = " ";
    let lower_number_length = lower_number.length;
    for (let i = 0; i < changing; i++) {
      result += lower_number.charAt(
        Math.floor(Math.random() * lower_number_length)
      );
    }
    document.getElementById("password__result").value = result;
  }

  if (
    document.getElementById("lowercase").checked &&
    document.getElementById("numbers").checked &&
    document.getElementById("symbols").checked
  ) {
    // all_char.slice(27, 53);
    let changing = document.getElementById("length").value;
    let result = " ";
    let low_num_sym_length = low_num_sym.length;
    for (let i = 0; i < changing; i++) {
      result += low_num_sym.charAt(
        Math.floor(Math.random() * low_num_sym_length)
      );
    }
    document.getElementById("password__result").value = result;
  }

  if (
    document.getElementById("lowercase").checked &&
    document.getElementById("symbols").checked
  ) {
    all_char.slice(27, 53);
    let changing = document.getElementById("length").value;
    let result = " ";
    let lower_symbols_length = lower_symbols.length;
    for (let i = 0; i < changing; i++) {
      result += lower_symbols.charAt(
        Math.floor(Math.random() * lower_symbols_length)
      );
    }
    document.getElementById("password__result").value = result;
  }
  if (
    document.getElementById("numbers").checked &&
    document.getElementById("symbols").checked
  ) {
    // all_char.slice(27, 53);
    let changing = document.getElementById("length").value;
    let result = " ";
    let number_symbols_length = number_symbols.length;
    for (let i = 0; i < changing; i++) {
      result += number_symbols.charAt(
        Math.floor(Math.random() * number_symbols_length)
      );
    }
    document.getElementById("password__result").value = result;
  }
}
