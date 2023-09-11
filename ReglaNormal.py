from ReglaPrecio import ReglaPrecio


class ReglaNormal(ReglaPrecio):

    def calcular_total(self, cantidad, precio):
        return precio * cantidad
    
    def es_aplicable(self, sku):
        return sku.startswith("EA")