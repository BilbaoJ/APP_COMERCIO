class ReglaNormal(ReglaPrecio):

    def calcular_total(cantidad, precio):
        return precio * cantidad
    
    def es_aplicable(sku):
        return sku.startswith("EA")