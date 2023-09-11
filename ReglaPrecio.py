from abc import ABC, abstractmethod

class ReglaPrecio(ABC):

    @abstractmethod
    def calcular_total(self, cantidad, precio):
        pass
    
    @abstractmethod
    def es_aplicable(sself, sku):
        pass