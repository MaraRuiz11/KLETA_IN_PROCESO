package com.senati.RestauranteKleta.controller;


import com.senati.RestauranteKleta.entity.DetalleVenta;
import com.senati.RestauranteKleta.service.DetalleVentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/detalle")
@CrossOrigin(origins = "*")
public class DetalleVentaController {

    @Autowired
    private DetalleVentaService service;

    @GetMapping("/deta")
    public List<DetalleVenta> listar() {
        return service.listar();
    }


}
