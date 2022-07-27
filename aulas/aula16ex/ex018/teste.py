
print('-=' * 20)
print('              Calculadora              ')
print('-=' * 20)

while True:
    n1 = int(input('Qual é o primeiro valor? '))

    n2 = int(input('Qual é o segundo valor? '))

    print('-=' * 20)

    print("""
    [1] Somar
    [2] Subtrair
    [3] multiplicar
    [4] Dividir
    [5] Resto da divisão
    [6] Média
    """)

    resp = int(input('Escolha uma opção: '))

    if(resp >= 7 or resp == 0):
        print('erro')

    if(resp == 1):
        result = n1 + n2
        conta = 'Soma'

    elif(resp == 2):
        result = n1 - n2
        conta = 'Subração' 

    elif(resp == 3):
        result = n1 * n2 
        conta = 'Multiplicação'

    elif(resp == 4):
        result = n1 / n2 
        conta = 'Divisão'

    elif(resp == 5):
        result = n1 % n2 
        conta = 'Resto da divisão'

    elif(resp == 6):
        result = 2 / (n1 + n2)
        conta = 'Média'

    else:
        print('Valor não encontrado!')
        break

    print(f"A {conta} entre {n1} e {n2} é {result}")