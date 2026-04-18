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
}