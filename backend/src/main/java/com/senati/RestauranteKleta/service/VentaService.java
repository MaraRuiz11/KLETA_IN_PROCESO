package com.senati.RestauranteKleta.service;


import com.senati.RestauranteKleta.entity.Venta;
import com.senati.RestauranteKleta.repository.VentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VentaService {
    @Autowired
    private VentaRepository ventaRepository;

    public List<Venta> listarVentas() {
        return ventaRepository.findAll();
    }
}
