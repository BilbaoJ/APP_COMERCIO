from Carrito import Carrito
from Item import Item
from ManejadorReglas import ManejadorReglas
from Producto import Producto

from Tienda import Tienda
from Usuario import Usuario


while True:
    print("\n•-•- Tienda de Comercio -•-•")
    print("1. Agregar producto al carrito")
    print("2. Eliminar producto del carrito")
    print("3. Mostrar carrito de compras")
    print("4. Comprar")
    print("5. Salir")
    opcion = input("Seleccione una opción: ")

    if opcion == "1":
        print("De acuerdo al codigo ingrese el producto que desea agregar. \n •1. EA(producto normal) \n •2. WE(producto de peso) \n •3. SP(Descuento especial")
        opcionProduct = input("Seleccione la opcion: ")
        if opcionProduct == "1":
            sku = input("Ingrese el SKU del producto a agregar: EA")
            cantidad = int(input("Ingrese la cantidad a agregar: "))
            Tienda().agregar_producto_a_carrito(sku, cantidad)
        elif opcionProduct == "2":
            sku = input("Ingrese el SKU del producto a agregar: WE")
            Peso = int(input("Ingrese el peso a agregar: "))
            Tienda().agregar_producto_a_carrito(sku, cantidad)
        elif opcionProduct == "3":
            sku = input("Ingrese el SKU del producto a agregar: SP")
            cantidad = int(input("Ingrese la cantidad a agregar: "))
            Tienda().agregar_producto_a_carrito(sku, cantidad)
        else:
            print("Opción no válida. Intente de nuevo.")
            break

    elif opcion == "2":
        Producto()
        index = int(input("Ingrese el número del producto a eliminar: ")) - 1
        Carrito().eliminar_item(index)

    elif opcion == "3":
        Carrito()

    elif opcion == "4":
        # Implementar la funcionalidad de compra y actualización de la tienda aquí
        print("Función de compra no implementada.")

    elif opcion == "5":
        # Guardar datos antes de salir
        Tienda().terminar_compra
        break
    else:
        print("Opción no válida. Intente de nuevo.")