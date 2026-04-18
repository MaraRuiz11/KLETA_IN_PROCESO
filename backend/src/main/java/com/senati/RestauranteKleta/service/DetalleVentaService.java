package com.senati.RestauranteKleta.service;

import com.senati.RestauranteKleta.entity.DetalleVenta;
import com.senati.RestauranteKleta.repository.DetalleVentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DetalleVentaService {

    @Autowired
    private DetalleVentaRepository detalleVentaRepository;

    public List<DetalleVenta> listar() {
        return detalleVentaRepository.findAll();
    }
}
