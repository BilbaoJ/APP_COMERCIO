class ManejadorReglas:

    def __init__(self):
        self.__regla=None

    def set_regla(self, regla):
        self.__regla = regla
    
    def ejecutar_regla(self, cantidad, precio):
        return self.__regla.calcular_total(cantidad, precio)