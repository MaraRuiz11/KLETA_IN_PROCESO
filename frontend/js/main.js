// EVENTOS EN JAVASCRIPT

fetch("http://localhost:8080/api/producto/product")
    .then(response => response.json())
    .then(data => {
        let tabla = document.getElementById("table-producto");
        tabla.innerHTML = "";

        data.forEach(producto => {
            let fila = `
                <tr>
                    <td>${producto.idproducto}</td>
                    <td>${producto.nombreProducto}</td>
                    <td>${producto.tipoProducto   }</td>
                    <td>${producto.precio}</td>
                </tr>
            `;
            tabla.innerHTML += fila;
        });
    })
    .catch(error => console.error("Error:", error));

async function cargarVentas() {
    try {
        const response = await fetch("http://localhost:8080/api/venta/ventas"); // cambia por tu URL real
        const data = await response.json();

        const tabla = document.getElementById("table-venta");
        tabla.innerHTML = ""; // limpiar tabla

        data.forEach(venta => {
            const fila = `
                <tr>
                    <td>${venta.idVenta}</td>
                    <td>${venta.fecha}</td>
                    <td>${venta.total}</td>
                </tr>
            `;
            tabla.innerHTML += fila;
        });

    } catch (error) {
        console.error("Error al cargar ventas:", error);
    }
}

// ejecutar automáticamente
cargarVentas();

//
fetch("http://localhost:8080/api/detalle/deta")
    .then(response => response.json())
    .then(data => {
        let tabla = document.getElementById("table-detalle");
        tabla.innerHTML = "";

        data.forEach(d => {
            let fila = `
                <tr>
                    <td>${d.idDetalle}</td>
                    <td>${d.venta?.idVenta}</td>
                    <td>${d.producto?.nombreProducto}</td>
                    <td>${d.cantidad}</td>
                    <td>S/ ${d.subtotal}</td>
                </tr>
            `;
            tabla.innerHTML += fila;
        });
    })
    .catch(error => console.error("Error:", error));  