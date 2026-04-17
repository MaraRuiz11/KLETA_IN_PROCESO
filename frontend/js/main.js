// EVENTOS EN JAVASCRIPT (CLICK, CARGAR, KEY,)

document.addEventListener("DOMContentLoaded", () => {

  fetch("http://localhost:8080/api/productos")
    .then((response) => response.json())
    .then((data) => {
      // DOM -> <tbody id="table-producto">
      const elemento = document.getElementById("table-productos");
      for (let i = 0; i < data.length; i++) {
        // data[i], muestra en forma de array
        let producto = data[i];
        // alt + 96 -> template literal (backtick)
        let fila = `
          <tr>
            <td>${producto.id_producto}</td>
            <td>${producto.nombre_producto}</td>
            <td>${producto.tipo_producto}</td>
            <td>S/ ${producto.precio.toFixed(2)}</td>
          </tr>
        `;
        elemento.innerHTML += fila;
      }
    })
    .catch((error) => {
      console.error("Error al cargar productos:", error);
    });

});