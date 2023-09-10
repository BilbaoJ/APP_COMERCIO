class Item:

    def __init__(self, producto, cantidad):
        self.producto = producto
        self.cantidad = cantidad

    def calcular_total(self):
        manejador_reglas = ManejadorReglas()
        if self.producto.codigo_sku.startswith("EA"):
            manejador_reglas.crear_regla(ReglaNormal())
        elif self.producto.codigo_sku.startswith("WE"):
            manejador_reglas.crear_regla(ReglaPeso())
        elif self.producto.codigo_sku.startswith("SP"):
            manejador_reglas.crear_regla(ReglaEspecial())

        return 0