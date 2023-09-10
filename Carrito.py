class Carrito:

    def __init__(self):
        self.valor_total_venta = 0
        self.items = []

    def agregar_item(self, item):
        self.items.append(item)
        self.valor_total_venta += item.calcular_total()

    def eliminar_item(self, item):
        self.items.remove(item)
        self.valor_total_venta -= item.calcular_total()

    

