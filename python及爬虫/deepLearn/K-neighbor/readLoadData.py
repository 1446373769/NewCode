import csv
import random

def loadDataSet(filename,split,trainingSet=[],testSet=[]):
    with open(filename,'r') as csvfile:
        lines=csv.reader(csvfile)
        dataset=list(lines)
        for x in range(len(dataset)-1):
            for y in range (4):
                dataset[x][y]=float(dataset[x][y])
            if random.random()<split:
                trainingSet.append(dataset[x])
            else:
                testSet.append(dataset[x])

trainingSet=[]
testSet=[]
loadDataSet('iris.data.csv',0.7,trainingSet,testSet)
print('训练集合样本数：'+repr(len(trainingSet)))
print('测试集合样本数：'+repr(len(testSet)))
