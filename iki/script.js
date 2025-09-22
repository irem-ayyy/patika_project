// Blog yazılarını burada saklıyoruz
const posts = {
    1: { title: "JavaScript’e Giriş", content: "JavaScript webin temel programlama dilidir..." },
    2: { title: "CSS ile Tasarım İpuçları", content: "CSS ile tasarımları güzelleştirebiliriz..." },
    3: { title: "Frontend Developer Yol Haritası", content: "HTML, CSS, JS öğren, sonra frameworklere geç..." }
};

// URL’den id çek
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

// İçeriği doldur
if (postId && posts[postId]) {
    document.getElementById("post-content").innerHTML = `
      <h2>${posts[postId].title}</h2>
      <p>${posts[postId].content}</p>
    `;
} else {
    document.getElementById("post-content").innerHTML = "<p>Yazı bulunamadı!</p>";
}
