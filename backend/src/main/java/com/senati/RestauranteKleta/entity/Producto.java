package com.senati.RestauranteKleta.entity;


import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "Producto")
public class Producto {

    @Id
    @Column(name = "ID_Producto")
    private String IDproducto;

    @Column(name = "Nombre_Producto")
    private String nombreProducto;

    @Column(name = "Tipo_Producto")
    private String tipoProducto;

    @Column(name = "Precio")
    private BigDecimal precio;

    // Constructor vacío (obligatorio)
    public Producto() {}


    public String getIDproducto() {
        return IDproducto;
    }

    public void setIDproducto(String IDproducto) {
        this.IDproducto = IDproducto;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public String getTipoProducto() {
        return tipoProducto;
    }

    public void setTipoProducto(String tipoProducto) {
        this.tipoProducto = tipoProducto;
    }

    public BigDecimal getPrecio() {
        return precio;
    }

    public void setPrecio(BigDecimal precio) {
        this.precio = precio;
    }
}
