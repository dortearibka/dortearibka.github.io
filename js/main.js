// Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");
  
    burger.addEventListener("click", () => {
      // Toggle nav list and burger class
      navLists.classList.toggle("nav-active");
      burger.classList.toggle("toggle-burger");
    });
  };
  
  navSlide();
  
  // Clear form before unload
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };
  
// // Ambil elemen form
// const form = document.getElementById('contact-form');

// // Tambahkan event listener untuk menangani submit form
// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Mencegah refresh halaman

//     // Ambil data dari form
//     const formData = new FormData(form);

//     // Kirim data menggunakan Fetch API
//     fetch('<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         const messageBox = document.getElementById('response-message');
//         if (data.status === 'success') {
//             messageBox.innerHTML = `<p style="color: green;">${data.message}</p>`;
//         } else {
//             messageBox.innerHTML = `<p style="color: red;">${data.message}</p>`;
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         const messageBox = document.getElementById('response-message');
//         messageBox.innerHTML = `<p style="color: red;">Terjadi kesalahan saat mengirim pesan.</p>`;
//     });
// });
