package com.senati.RestauranteKleta.entity;


import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "Detalle_Venta")
public class DetalleVenta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Detalle")
    private Integer idDetalle;

    // RELACIÓN CON VENTA
    @ManyToOne
    @JoinColumn(name = "ID_Venta")
    private Venta venta;

    //  RELACIÓN CON PRODUCTO
    @ManyToOne
    @JoinColumn(name = "ID_Producto")
    private Producto producto;

    @Column(name = "Cantidad")
    private Integer cantidad;

    @Column(name = "Subtotal")
    private BigDecimal subtotal;

    public DetalleVenta() {}

    public Integer getIdDetalle() {
        return idDetalle;
    }

    public void setIdDetalle(Integer idDetalle) {
        this.idDetalle = idDetalle;
    }

    public Venta getVenta() {
        return venta;
    }

    public void setVenta(Venta venta) {
        this.venta = venta;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public BigDecimal getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(BigDecimal subtotal) {
        this.subtotal = subtotal;
    }
}
