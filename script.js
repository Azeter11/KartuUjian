
function cekNilai() {
  const nilai = parseFloat(document.getElementById("nilaiInput").value);
  const output = document.getElementById("hasil");
  let grade = "";

  if (isNaN(nilai) || nilai < 0 || nilai > 4) {
    output.style.color = "red";
    output.textContent = "Masukkan nilai IPK dengan benar!";
    return;
  }

  if (nilai >= 3.8) {
    grade = "A";
    output.style.color = "green";
    output.textContent = `Nilaimu Bagus, Anda mendapatkan grade ${grade}`;
  } else if (nilai >= 3.0 ) {
    grade = "B";
    output.style.color = "green";
    output.textContent = `Tingkatkan Lagi Belajarmu, Anda mendapatkan grade ${grade}`;
  } else if (nilai >= 2.5 ) {
    grade = "C";
    output.style.color = "orange";
    output.textContent = `Belajar Lebih Giat Lagi, Anda mendapatkan grade ${grade}`;
  } else {
    grade = "E";
    output.style.color = "Red";
    output.textContent = `Peringatan Keras Untuk Anda, Anda mendapatkan grade ${grade}`;
  }

setTimeout(() => {
    document.getElementById("step-nilai").style.display = "none";
    document.getElementById("step-nama").style.display = "block";
  }, 1000);
}

function kirimNama() {
  const nama = document.getElementById("namaInput").value.trim();
  const output = document.getElementById("hasilNama");

  if (nama === "Azhar Khoirul") {
    output.style.color = "green";
    output.textContent = `Silahkan ${nama} Anda Sudah Terdaftar!`;
    } else {
        output.style.color = "red";
        output.textContent = `Maaf ${nama} Anda Terdata Dalam Berita Acara UAS!`;
  }

}



