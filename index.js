ubah = () => $("textarea").css("height", ($(window).height() - 155) / 2)
ubah()
$(window).resize(() => ubah())
app = new Vue({
 el: ".vue",
 data: {
  perintah: "",
  program: ""
 },
 filters: {
  sesuaikan(x, perintah){
   return x.replace(/\$/g, "\\$").replace(/"/g, "\\\"").replace(/(.+)/g, `echo "$1" >> ${perintah}`)
  }
 }
})