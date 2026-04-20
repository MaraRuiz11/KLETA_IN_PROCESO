package com.senati.RestauranteKleta.service;


import com.senati.RestauranteKleta.entity.Producto;
import com.senati.RestauranteKleta.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdcutoService {


    @Autowired
    public ProductoRepository productoRepository;

    public List<Producto> listarProductos() {
        return productoRepository.findAll();

    }

    // Metodo para guardar un producto
    public Producto guardarProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    public void eliminarProducto(Integer id) {  // Integer
        productoRepository.deleteById(id);
    }

    public Producto obtenerProductoPorId(Integer id) {  // Integer
        return productoRepository.findById(id).orElse(null);
    }
}