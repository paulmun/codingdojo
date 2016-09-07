def selSort(arr):
	count1=0
	for i in range (len(arr)):
		temp = 0
		temp1 = 0
		temp2 = 0
		temp3 = 0
		valmax = arr[len(arr)-1-i]
		valmin = arr[i]
		count=0
		for x in range (len(arr)-1-i-count):
			if (arr[x+i]<valmin):
				valmin=arr[x+i]
				temp1 = x+i
			if (arr[x+i]>valmax):
				valmax=arr[x+i]
				temp3 = x+i
			count=count+1
			count1=count1+1
		temp=arr[i]
		arr[i]=valmin
		arr[temp1]=temp
		temp2=arr[len(arr)-1-i]
		arr[len(arr)-1-i]=valmax
		arr[temp3]=temp2
	print arr
	print count1
selSort([46, 15, 28, 25, 39, 59, 65, 62, 81, 63, 50, 68, 19, 72, 73, 69, 86, 23, 31, 33, 71, 97, 14, 61, 7, 12, 22, 18, 58, 20, 43, 80, 78, 16, 79, 88, 17, 2, 66, 30, 82, 9, 36, 47, 24, 55, 27, 38, 98, 75, 85, 91, 51, 11, 84, 93, 29, 34, 87, 1, 64, 77, 37, 49, 90, 94, 10, 89, 52, 44, 96, 6, 40, 83, 8, 21, 32, 48, 70, 57, 26, 45, 95, 100, 74, 53, 41, 54, 76, 56, 99, 42, 5, 92, 13, 67, 3, 60, 35, 4])

