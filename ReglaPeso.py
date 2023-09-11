from ReglaPrecio import ReglaPrecio


class ReglaPeso(ReglaPrecio):

    def calcular_total(self, cantidad, precio):
        peso = cantidad * 1000
        return precio * peso
    
    def es_aplicable(self, sku):
        return sku.startswith("WE")