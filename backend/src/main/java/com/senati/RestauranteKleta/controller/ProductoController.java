package com.senati.RestauranteKleta.controller;

import com.senati.RestauranteKleta.entity.Producto;
import com.senati.RestauranteKleta.service.ProdcutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/producto")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods =
        {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS})
public class ProductoController {

    @Autowired
    public ProdcutoService prodcutoService;
    //Devolvemos de la DB una lista de productos al frontend
    @GetMapping("/product")
    public List<Producto> listar(){
        return prodcutoService.listarProductos();
    }

    //Registramos un producto
    @PostMapping("/registrar")
    public Producto registrar(@RequestBody Producto producto){
        return prodcutoService.guardarProducto(producto);
    }
    //Eliminamos el producto
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {  // Integer
        prodcutoService.eliminarProducto(id);
        return ResponseEntity.ok().build();
    }
    //Traemos el producto para editarlo 
    @GetMapping("/product/{id}")
    public Producto obtenerPorId(@PathVariable Integer id) {  // Integer
        return prodcutoService.obtenerProductoPorId(id);
    }
    //Actualizamos el producto con el metodo post
    @PostMapping("/actualizar/{id}")
    public Producto actualizarPost(@PathVariable Integer id, @RequestBody Producto producto){
        producto.setIDproducto(id);
        return prodcutoService.guardarProducto(producto);
    }

}
