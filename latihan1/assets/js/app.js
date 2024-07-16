
function cekPengarang(){
let pengarang=document.forms["formbuku"]["pengarang"].value;
if (pengarang=="") {
  alert("pengarang harus diisi!");
}

}
function updateTotal() {
      let harga = document.getElementById("hargabuku").value;
      let jumlah = document.getElementById("jumlahbuku").value;
      let total = harga * jumlah;

     let totalbuku= document.getElementById("totalBuku");
     totalbuku.value=total;
    }
