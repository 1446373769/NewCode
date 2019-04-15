import operator
import csv
import math
import random

def loadDataSet(filename,split,trainingSet=[],testSet=[]):
    #读取本地数据#
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

def EuclidDist(instance1,instance2,len):
    #求欧几里得距离#
    distance=0.0
    for x in range(len):
        distance+=pow((instance1[x]-instance2[x]),2)
    return math.sqrt(distance)


def getNeighbors(trainSet,testInstance,k):
    #获取最近邻居#
    distance=[]
    length=len(testInstance)-1
    for x in range(len(trainSet)):
        dist=EuclidDist(testInstance,trainSet[x],length)
        distance.append((trainSet[x],dist))
    distance.sort(key=operator.itemgetter(1))
    #列表的sort（key）方法用来根据关键字排序
    neighbors=[]
    for x in range(k):
        neighbors.append(distance[x][0])
    return neighbors

def getClass(neighbors):
    #分类与评估函数#
     classVotes={}
     for x in range(len(neighbors)):
         instance_class=neighbors[x][-1]
         if instance_class in classVotes:
             classVotes[instance_class]+=1
         else:
             classVotes[instance_class]=1
         sortedVotes=sorted(classVotes.items(),key=operator.itemgetter(1),reverse=True)
     return sortedVotes[0][0]

def getAccuracy(testSet,predictions):
    #预测正确率计算#
    correct=0
    for x in range(len(testSet)):
        if testSet[x][-1]==predictions[x]:
            correct+=1
    return (correct/float(len(testSet)))*100.0

def main():
    trainingSet=[]
    testSet=[]
    split=0.7
    loadDataSet('iris.data.csv',split,trainingSet,testSet)
    print('训练集合：'+repr(len(trainingSet)))
    print('测试集合：'+repr(len(testSet)))
    predictions=[]
    k=3
    for x in range(len(testSet)):
        neighbors=getNeighbors(trainingSet,testSet[x],k)
        result=getClass(neighbors)
        predictions.append(result)
        print('>预测='+repr(result)+',实际='+repr(testSet[x][-1]))
    accuracy=getAccuracy(testSet,predictions)
    print('精确度为：'+repr(accuracy)+'%')

main()