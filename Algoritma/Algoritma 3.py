def countWord(In, Que):
    List = []
    for i in range(len(Que)):
        Count = 0
        for j in range(len(In)):
            if In[j] == Que[i]:
                Count = Count + 1
        List.append(Count)
    return List

if __name__ == '__main__':
    INPUT = ['xc', 'dz', 'bbb', 'dz']
    QUERY = ['bbb', 'ac', 'dz']
    print('INPUT =',INPUT)
    print('QUERY =',QUERY)
    print('')

    OUTPUT = countWord(INPUT, QUERY)
    print('OUTPUT =', OUTPUT, 'karena ',end='')
    for i in range(len(QUERY)):
        if i != (len(QUERY)-1):
            if OUTPUT[i] > 0:
                print('kata ',"'", QUERY[i],"'", ' terdapat', OUTPUT[i], 'pada INPUT, ',end='')
            else:
                print('kata ',"'", QUERY[i],"'", ' tidak ada pada INPUT, ', end='')
        else:
            if OUTPUT[i] > 0:
                print('kata ',"'", QUERY[i],"'", ' terdapat', OUTPUT[i], 'pada INPUT')
            else:
                print('kata ',"'", QUERY[i],"'", ' tidak ada pada INPUT')





