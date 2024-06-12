lista = par = impar = []
op = "S"
while op == "S":
  num = int(input("digite um valor"))
  lista.append(num)
  op = ""
  while op != "S":
    op = str(input("quer continuar [S|N] ")).strip().upper()[0]
    if op == "N":
      break
for c in lista:
  if c % 2 == 0:
    par.append(c)
  elif c % 2 == 1:
    impar.append(c)
print(f"a lista de todos os numeros {lista}")
print(f"a lista dos pares {par}")
print(f"a lista dos impares {impar}")