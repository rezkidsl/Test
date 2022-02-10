if __name__ == '__main__':
    Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
    print('Matrix =',Matrix)
    print('')

    N = len(Matrix)
    sum1 = 0
    sum2 = 0
    
    print('diagonal pertama = ', end='')
    for i in range(N):
        sum1 = sum1 + Matrix[i][i]
        if i != (N-1):
            print(Matrix[i][i], '+ ', end='')
        else:
            print(Matrix[i][i], '= ', end='')
    print(sum1)
    
    print('diagonal kedua = ', end='')
    for i in range(N):
        Value = Matrix[i]
        Reversed = Value[::-1]
        sum2 = sum2 + Reversed[i]
        if i != (N-1):
            print(Reversed[i], '+ ', end='')
        else:
            print(Reversed[i], '= ', end='')
    print(sum2)
    print('')
    print('maka hasilnya adalah', sum1, '-', sum2, '=', sum1-sum2)


