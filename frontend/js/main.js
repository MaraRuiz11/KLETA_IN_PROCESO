// EVENTOS EN JAVASCRIPT

// PRODUCTOS - LISTAR
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
                    <td>${producto.tipoProducto}</td>
                    <td>S/ ${parseFloat(producto.precio).toFixed(2)}</td>
                    <td>
                        <button class="btn btn-sm btn-warning editar-producto" data-id="${producto.idproducto}">
                            Editar
                        </button>
                        <button class="btn btn-sm btn-danger eliminar-producto" data-id="${producto.idproducto}">
                            Eliminar
                        </button>
                    </td>
                </tr>
            `;
            tabla.innerHTML += fila;
        });
        
        document.getElementById("total-productos").textContent = data.length;
    })
    .catch(error => console.error("Error:", error));

// VENTAS - LISTAR
async function cargarVentas() {
    try {
        const response = await fetch("http://localhost:8080/api/venta/ventas");
        const data = await response.json();
        const tabla = document.getElementById("table-venta");
        if (tabla) {
            tabla.innerHTML = "";
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
        }
    } catch (error) {
        console.error("Error al cargar ventas:", error);
    }
}
cargarVentas();

// DETALLE VENTA - LISTAR
fetch("http://localhost:8080/api/detalle/deta")
    .then(response => response.json())
    .then(data => {
        let tabla = document.getElementById("table-detalle");
        if (tabla) {
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
        }
    })
    .catch(error => console.error("Error:", error));  

// ELIMINAR PRODUCTO
async function eliminarProducto(id) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
        try {
            const response = await fetch(`http://localhost:8080/api/producto/eliminar/${id}`, {
                method: "DELETE"
            });
            
            if (response.ok) {
                alert('Producto eliminado exitosamente');
                location.reload();
            } else {
                alert('Error al eliminar el producto');
            }
        } catch (error) {
            console.error("Error:", error);
            alert('Error de conexión con el servidor');
        }
    }
}

// EDITAR PRODUCTO - Cargar datos al modal
async function cargarProductoParaEditar(id) {
    try {
        const response = await fetch(`http://localhost:8080/api/producto/product/${id}`);
        const producto = await response.json();
        
        document.getElementById('nombreProducto').value = producto.nombreProducto;
        document.getElementById('tipoProducto').value = producto.tipoProducto;
        document.getElementById('precio').value = producto.precio;
        
        const btnGuardar = document.getElementById('guardarProductoBtn');
        btnGuardar.textContent = 'ACTUALIZAR';
        btnGuardar.setAttribute('data-editar', id);
        
        const modalElement = document.getElementById('registrarProductoModal');
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
        
    } catch (error) {
        console.error("Error:", error);
        alert('Error al cargar el producto');
    }
}

// ACTUALIZAR PRODUCTO - Usando POST en lugar de PUT
async function actualizarProducto(id) {
    const nombreProducto = document.getElementById('nombreProducto').value;
    const tipoProducto = document.getElementById('tipoProducto').value;
    const precio = document.getElementById('precio').value;
    
    if (!nombreProducto || !tipoProducto || !precio) {
        alert('Por favor, complete todos los campos');
        return;
    }
    
    const producto = {
        idproducto: parseInt(id),
        nombreProducto: nombreProducto,
        tipoProducto: tipoProducto,
        precio: parseFloat(precio)
    };
    
    try {
        const response = await fetch(`http://localhost:8080/api/producto/actualizar/${id}`, {
            method: "POST",  // Cambiado de PUT a POST
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        
        if (response.ok) {
            alert('Producto actualizado exitosamente');
            location.reload();
        } else {
            alert('Error al actualizar el producto');
        }
    } catch (error) {
        console.error("Error:", error);
        alert('Error de conexión con el servidor');
    }
}
// MODAL - REGISTRAR PRODUCTO
document.addEventListener('DOMContentLoaded', function() {
    
    const modalElement = document.getElementById('registrarProductoModal');
    const modal = new bootstrap.Modal(modalElement);
    
    const btnRegistrar = document.querySelector('.main-content .btn-primary');
    const btnGuardar = document.getElementById('guardarProductoBtn');
    
    if (btnRegistrar) {
        btnRegistrar.addEventListener('click', function() {
            document.getElementById('formProducto').reset();
            btnGuardar.textContent = 'GUARDAR';
            btnGuardar.removeAttribute('data-editar');
            modal.show();
        });
    }
    
    if (btnGuardar) {
        btnGuardar.addEventListener('click', function() {
            const idEditar = btnGuardar.getAttribute('data-editar');
            
            if (idEditar) {
                actualizarProducto(idEditar);
            } else {
                const nombreProducto = document.getElementById('nombreProducto').value;
                const tipoProducto = document.getElementById('tipoProducto').value;
                const precio = document.getElementById('precio').value;
                
                if (!nombreProducto || !tipoProducto || !precio) {
                    alert('Por favor, complete todos los campos');
                    return;
                }
                
                const producto = {
                    nombreProducto: nombreProducto,
                    tipoProducto: tipoProducto,
                    precio: parseFloat(precio)
                };
                
                fetch("http://localhost:8080/api/producto/registrar", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(producto)
                })
                .then(res => res.json())
                .then(data => {
                    document.getElementById("table-producto").innerHTML += `
                        <tr>
                            <td>${data.idproducto}</td>
                            <td>${data.nombreProducto}</td>
                            <td>${data.tipoProducto}</td>
                            <td>S/ ${data.precio}</td>
                            <td>
                                <button class="btn btn-sm btn-warning editar-producto" data-id="${data.idproducto}">
                                    ✏️ Editar
                                </button>
                                <button class="btn btn-sm btn-danger eliminar-producto" data-id="${data.idproducto}">
                                    🗑️ Eliminar
                                </button>
                            </td>
                        </tr>
                    `;
                    
                    const totalProductos = document.getElementById("total-productos");
                    totalProductos.textContent = parseInt(totalProductos.textContent) + 1;
                    
                    modal.hide();
                    document.getElementById('formProducto').reset();
                    alert("Producto registrado!");
                })
                .catch(error => alert("Error: " + error));
            }
        });
    }
    
    // Delegación de eventos para editar y eliminar
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('eliminar-producto')) {
            const id = e.target.getAttribute('data-id');
            eliminarProducto(id);
        }
        
        if (e.target.classList.contains('editar-producto')) {
            const id = e.target.getAttribute('data-id');
            cargarProductoParaEditar(id);
        }
    });
});