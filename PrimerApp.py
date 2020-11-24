primero = input("Ingrese primer número: ")

try:
    primero = int(primero)
except:
    primero = "mal"

if primero == "mal":
    print("El valor ingresado no es un entero")
    exit()


segundo = input("Ingrese segundo número: ")

try:
    segundo = int(segundo)
except:
    segundo = "mal"

if segundo == "mal":
    print("El valor ingresado no es un entero")
    exit()

simbolo = input("Ingrese operacion: ")

if simbolo == "+":
    print("Suma", primero + segundo)
elif simbolo == "-":
    print("Resta", primero - segundo)
elif simbolo == "*":
    print("Multiplicacion", primero * segundo)
elif simbolo == "/":
    print("Division", primero / segundo)
else:
    print("El simbolo ingresado no es valido")
