export default {
  mounted(el, binding) {
    el.focus();
    // console.log(binding);
    if ("color" in binding.value) {
      el.addEventListener("focus", function () {
        this.style.borderColor = binding.value.color;
        this.style.borderWidth = "4px";
      });
      el.addEventListener("focusout", function() {
        this.style.borderColor = "";
        this.style.borderWidth = "1px";
      })
    }
  },
};
