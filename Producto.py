class Producto:

    def __init__(self, codigo_sku, nombre, descripcion, unidades_disponibles, precio_unitario):
        self.codigo_sku = codigo_sku
        self.nombre = nombre
        self.descipcion = descripcion
        self.unidades_disponibles = unidades_disponibles
        self.precio_unitario = precio_unitario

    def hay_unidades(self, cantidad):
        return cantidad <= self.unidades_disponibles

    def restar_unidades(self, cantidad):
        self.unidades_disponibles -= cantidad