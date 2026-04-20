package com.senati.RestauranteKleta.repository;

import com.senati.RestauranteKleta.entity.Venta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface VentaRepository extends JpaRepository<Venta, Long> {
}
