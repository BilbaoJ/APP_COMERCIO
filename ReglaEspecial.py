from ReglaPrecio import ReglaPrecio


class ReglaEspecial(ReglaPrecio):

    def calcular_total(self, cantidad, precio):
        numero_descuentos = round(cantidad / 3)
        descuento = 0.2 * numero_descuentos
        if(descuento > 0.5):
            descuento = 0.5
        return (precio*cantidad)*(1-descuento)
    
    def es_aplicable(self, sku):
        return sku.startswith("SP")