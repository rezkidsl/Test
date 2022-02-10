def splitWord(String):
    List = String.split()
    return List

def countWord(List):
    Count = 0
    index = 0
    for i in range(len(List)):
        Word = List[i]
        listChar = list(Word)
        if len(listChar) > Count:
            Count = len(listChar)
            index = i
        elif len(listChar) == Count:
            Count = len(listChar)
            index = i
    return Count,index

if __name__ == '__main__':
    String = "Saya sangat senang mengerjakan soal algoritma"
    print('const sentence = ', String)
    print(' ')
    List = splitWord(String)
    Count, index = countWord(List)
    print('longest(sentence)')
    print('//', List[index],':',Count,'character')