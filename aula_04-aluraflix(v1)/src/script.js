var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/a/a7/Free_Guy_poster.jpg",
  "https://s2.glbimg.com/C5NGJa7-Rg7EOYxgi9A2QPD_o8g=/0x0:984x1458/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/P/1/GtIodFSmC7G2AczzG0RA/shangchi.jpeg",
  "https://i.pinimg.com/originals/6b/6a/2f/6b6a2f5e3f5322c07728805f3defb292.jpg"
];

for (let i = 0; i < listaFilmes.length; i++) {
  document.write("<img src='" + listaFilmes[i] + "' >");
}