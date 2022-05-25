def bottle_song(num):
	x = range(num, 1, -1)
	for n in x:
		if n == 2:
			print("""2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.""")
		else:
			print(f"""{n} bottles of beer on the wall, {n} bottles of beer.
Take one down and pass it around, {n-1} bottles of beer on the wall.""")


bottle_song()

