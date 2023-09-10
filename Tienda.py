from Item import Item


class Tienda:

    def __init__(self):
        self.usuarios = []
        self.productos = []
        self.total_ventas = 0

    def agregar_prducto_a_carrito(self, carrito, producto, cantidad):
        if producto.hay_unidades(cantidad):
            print(f"No hay suficientes unidades disponibles de {producto.nombre}, solo quedan {producto.unidades_disponibles} unidades")
        else:
            item = Item(producto, cantidad)
            carrito.agregar_item(item)

    def terminar_compra(self, carrito):
        for item in carrito.items:
            item.producto.restar_unidades(item.cantidad)
            self.total_ventas += carrito.valor_total_venta