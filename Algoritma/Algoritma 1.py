import io

def splitChar(word):
    listChar = list(word)
    return listChar

def reverseChar(listChar):
    lenList = len(listChar)
    index = lenList - 2
    reversedList = listChar[index::-1]
    reversedList.append(listChar[lenList - 1])
    return reversedList

def newWord(reservedList):
    nW = io.StringIO()
    nW.writelines(reservedList)
    print(nW.getvalue())

if __name__ == '__main__':
    word = 'NEGIE1'
    listChar = splitChar(word)
    reservedList =reverseChar(listChar)
    newWord(reservedList)





