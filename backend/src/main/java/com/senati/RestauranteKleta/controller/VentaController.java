package com.senati.RestauranteKleta.controller;


import com.senati.RestauranteKleta.entity.Venta;
import com.senati.RestauranteKleta.service.VentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/venta")
@CrossOrigin(origins = "*")
public class VentaController {

    @Autowired
    private VentaService ventaService;

    @GetMapping("/ventas")
    public List<Venta> listar() {
        return ventaService.listarVentas();
    }
}
