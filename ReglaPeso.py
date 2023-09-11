class ReglaPeso(ReglaPrecio):

    def calcular_total(cantidad, precio):
        peso = cantidad * 1000
        return precio * peso
    
    def es_aplicable(sku):
        return sku.startswith("WE")