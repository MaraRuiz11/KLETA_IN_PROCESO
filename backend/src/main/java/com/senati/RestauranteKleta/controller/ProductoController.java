package com.senati.RestauranteKleta.controller;

import com.senati.RestauranteKleta.entity.Producto;
import com.senati.RestauranteKleta.service.ProdcutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/producto")
@CrossOrigin(origins = "*")
public class ProductoController {

    @Autowired
    public ProdcutoService prodcutoService;

    @GetMapping("/product")
    public List<Producto> listar(){
        return prodcutoService.listarProductos();
    }

}
