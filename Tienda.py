class Tienda:

    def __init__(self):
        self.usuarios = []
        self.productos = []
        self.total_ventas = 0

    def agregar_producto_a_carrito(self, usuario, producto, cantidad):
        if producto.hay_unidades(cantidad):
            usuario.agregar_producto_a_carrito(producto, cantidad)
        else:
            print(f"No hay suficientes unidades disponibles de {producto.nombre}, solo quedan {producto.unidades_disponibles} unidades")

    def terminar_compra(self, usuario):
        for item in usuario.carrito.items:
            item.producto.restar_unidades(item.cantidad)
            self.total_ventas += usuario.carrito.valor_total_venta