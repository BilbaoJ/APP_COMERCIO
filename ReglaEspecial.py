class ReglaEspecial(ReglaPrecio):

    def calcular_total(cantidad, precio):
        numero_descuentos = round(cantidad / 3)
        descuento = 0.2 * numero_descuentos
        if(descuento > 0.5):
            descuento = 0.5
        return (precio*cantidad)*(1-descuento_total)
    
    def es_aplicable(sku):
        return sku.startswith("SP")