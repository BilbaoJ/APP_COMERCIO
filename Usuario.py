from Carrito import Carrito
from Item import Item


class Usuario:

    def __init__(self, nombre, identificacion, telefono):
        self.nombre = nombre
        self.identificacion = identificacion
        self.telefono = telefono
        self.carrito = Carrito()

    def agregar_producto_a_carrito(self, producto, cantidad):
        item = Item(producto, cantidad)
        self.carrito.agregar_item(item)