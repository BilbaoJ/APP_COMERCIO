from abc import ABC, abstractmethod

class ReglaPrecio(ABC):

    @abstractmethod
    def calcular_total(cantidad, precio):
        pass
    
    @abstractmethod
    def es_aplicable(sku):
        pass