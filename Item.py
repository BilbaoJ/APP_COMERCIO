import Producto


class Item:

    def __init__(self, producto, cantidad):
        self.producto = producto
        self.cantidad = cantidad

    def calcular_total(self):
        manejador_reglas = ManejadorReglas()
        if self.producto.codigo_sku.startswith("EA"):
            manejador_reglas.set_regla(ReglaNormal())
        elif self.producto.codigo_sku.startswith("WE"):
            manejador_reglas.set_regla(ReglaPeso())
        elif self.producto.codigo_sku.startswith("SP"):
            manejador_reglas.set_regla(ReglaEspecial())

        return manejador_reglas.ejecutar_regla(self.cantidad, self.producto.precio_unitario)