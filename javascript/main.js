document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.closest('.card');

        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').textContent;
        let judul = parent.querySelector('.card-text').textContent;
        let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML : '<i>tidak tersedia</i>';

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').textContent = judul;
        let modalImage = document.querySelector('.modalImage');
        modalImage.innerHTML = `<img src="${gambar}" class="w-100" alt="${judul}">`;

        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').textContent = harga;

        const nohp = '6282130763267';
        let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Assalamualaikum Kak, saya mau membeli produk ${judul}. Harga: ${harga}`;

        document.querySelector('.btnBeli').href = pesan;
    });
});