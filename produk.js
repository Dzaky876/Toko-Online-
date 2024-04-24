let keranjang = [];

function tambahKeKeranjang(namaProduk, hargaProduk) {
  keranjang.push({ nama: namaProduk, harga: hargaProduk });
  updateKeranjang();
}

function updateKeranjang() {
  let keranjangList = document.getElementById('keranjang-list');
  let totalHarga = document.getElementById('total-harga');
  let total = 0;

  keranjangList.innerHTML = '';

  keranjang.forEach(item => {
    let li = document.createElement('li');
    li.innerText = `${item.nama} - Harga: $${item.harga}`;
    keranjangList.appendChild(li);
    total += item.harga;
  });

  totalHarga.innerText = `Total Harga: $${total}`;
}