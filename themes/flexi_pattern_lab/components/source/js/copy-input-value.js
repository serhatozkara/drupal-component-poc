function copyInputValue() {
  /* Get the text field */
  var copyText = document.getElementById("inputCopy");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");
}
